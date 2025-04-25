<!-- src/components/ui/CodeTerminalEffect.vue -->
<template>
    <div class="terminal-container" ref="container" :class="{ 'is-fullscreen': isFullscreen }">
        <!-- Barra superior de la terminal -->
        <div class="terminal-header glass">
            <div class="terminal-controls">
                <div class="control red" @click="closeTerminal"></div>
                <div class="control yellow"></div>
                <div class="control green" @click="toggleFullscreen"></div>
            </div>
            <div class="terminal-title">{{ title || 'terminal@gabrielcodes' }}</div>
            <div class="terminal-actions">
                <button v-if="!isPaused" @click="pauseAnimation" class="terminal-btn">
                    <span class="sr-only">Pausar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <button v-else @click="resumeAnimation" class="terminal-btn">
                    <span class="sr-only">Reanudar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Contenido de la terminal -->
        <div class="terminal-content glass" @click="focusTerminal">
            <div class="line-numbers">
                <div v-for="n in lineCount" :key="`line-${n}`" class="line-number">{{ n }}</div>
            </div>
            <div class="code-content">
                <div v-for="(line, index) in displayedCode" :key="`code-${index}`" class="code-line">
                    <span v-html="getFormattedLine(line)"></span>
                </div>
                <div class="cursor" :class="{ 'blink': isCursorBlinking, 'hidden': !showCursor }"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CodeTerminalEffect',
    props: {
        code: {
            type: Array,
            default: () => [
                'const skills = {',
                '  frontend: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS"],',
                '  backend: ["PHP", "Node.js", "Symfony", "Express"],',
                '  databases: ["MySQL", "PostgreSQL", "MongoDB"],',
                '  devOps: ["Docker", "Git", "AWS", "CI/CD"],',
                '  design: ["Figma", "Adobe XD", "Responsive Design"]',
                '};',
                '',
                'function renderPortfolio() {',
                '  console.log("¡Bienvenido a mi portafolio!");',
                '  ',
                '  // Mostrando mis habilidades principales',
                '  Object.keys(skills).forEach(category => {',
                '    console.log(`${category}: ${skills[category].join(", ")}`);',
                '  });',
                '  ',
                '  // Comprometido con el aprendizaje continuo',
                '  const learning = ["TypeScript", "React", "Next.js"];',
                '  console.log(`Actualmente aprendiendo: ${learning.join(", ")}`);',
                '}',
                '',
                'renderPortfolio();'
            ]
        },
        speed: {
            type: Number,
            default: 30 // ms por carácter
        },
        autoStart: {
            type: Boolean,
            default: true
        },
        loop: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: ''
        },
        typeSound: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            displayedCode: [],
            currentLine: 0,
            currentChar: 0,
            lineCount: 0,
            interval: null,
            isPaused: false,
            showCursor: true,
            isCursorBlinking: true,
            isFullscreen: false,
            typeSoundElement: null
        }
    },
    mounted() {
        this.lineCount = this.code.length;
        this.showCursor = true;

        // Configurar sonido de escritura si está habilitado
        if (this.typeSound) {
            this.setupTypeSound();
        }

        // Iniciar animación si autoStart es true
        if (this.autoStart) {
            this.startAnimation();
        }

        // Iniciar parpadeo del cursor
        this.blinkCursor();

        // Configurar IntersectionObserver para iniciar/pausar cuando esté visible
        this.setupIntersectionObserver();
    },
    beforeUnmount() {
        this.cleanupIntervals();

        // Limpiar listeners y observadores
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        setupTypeSound() {
            this.typeSoundElement = new Audio();
            this.typeSoundElement.src = 'data:audio/mp3;base64,SUQzAwAAAAAAIlRJVDIAAAAWAAAASGFja2VyIFR5cGluZyBTb3VuZAAA//uSwAAAAAABLBQAAAL6QWNgFAAAQAAANCAAAESJMS8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwG4AGAFtLlQUABSxN6XuCgAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUZAMAGllLRh57YAC1JOi/CGAAAAAABPgAAAAAAAJAAAAAA58+cJk5znOc5znOc5znOc5z9XOc5znOc5znOc5TrGk/kAAAGAAAAAA//MUZAYBs8EXb89UADk5oaP55oAAAAABPgAAAAAAAJAAAAABeJQAAAAAAQAAAAAAQA7DsPw/D8Pw/D+fwfBUFQVBUFQVBUIgqCQJAkCQJAkCQJAkCQJAkCQA//MUZAkARl8XH89UABXxth/56gAAAAABLgAAAAAAAKQAAAAJ9CpAEAQBAEAQA8CAIAgCAfvAgCAZBkGQZBkGf4g0OECYfh+H4fh+P//9wYMGD/wYMGDBgwYMGDA//MUZBABlkcE/81QAB2RmZ/5qgAAAAABLgAAAAAAAKQAAAAD8YAAAAAAABwOBgYGBgYGBgYGBgYG6eH3X/////oABoAdQABQAF///+TJ0yf8A//MUZBQBUkcC/81QABKhfZ/5qgAAAAABPgAAAAAAAJAAAAAAyZMmTJknDJkyZMmTJkyZmZmZmZmZmZmZmZmwCAAJEAAwACn8oCZAAAAAGAA//MUZBsARlACn89UABRQ/ZT5igAAAAABLgAAAAAAAKQAAAAAAAAMGAMGDBgwYMGlCAyAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwA//MUZCgBF0kCJ8xQABNZRXh5igAAAAABPgAAAAAAAJAAAAAAAAQMGDEDAwYMAAAAAAAAAf////////////39PT09PT09PT09PT0AAAAAAQdwA//MkZDMBtrkFX8xQABNA9XT5igAAP31dXV1dXV1dXVpISEhISEhISEgAGMDAwMDAwMP/P6ADEMDAcCNvRgYGDBiAA';
            this.typeSoundElement.volume = 0.15; // Volumen bajo
        },
        getFormattedLine(line) {
            // Formateo de sintaxis básico para resaltar código
            return line
                .replace(/(".*?")/g, '<span class="string">$1</span>')
                .replace(/('.*?')/g, '<span class="string">$1</span>')
                .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await)\b/g, '<span class="keyword">$1</span>')
                .replace(/\b(true|false|null|undefined|NaN|Infinity)\b/g, '<span class="boolean">$1</span>')
                .replace(/\b(\d+(\.\d+)?)\b/g, '<span class="number">$1</span>')
                .replace(/(\(|\)|\{|\}|\[|\]|;|,|\.)/g, '<span class="punctuation">$1</span>')
                .replace(/\/\/(.*?)$/g, '<span class="comment">\/\/$1</span>')
                .replace(/\/\*(.*?)\*\//g, '<span class="comment">\/\*$1\*\/</span>');
        },
        startAnimation() {
            if (this.interval) {
                clearInterval(this.interval);
            }

            this.displayedCode = [''];
            this.currentLine = 0;
            this.currentChar = 0;
            this.isPaused = false;

            this.typeNextChar();
        },
        typeNextChar() {
            if (this.isPaused) return;

            const currentCodeLine = this.code[this.currentLine];

            if (this.currentChar < currentCodeLine.length) {
                // Añadir el siguiente carácter
                this.displayedCode[this.currentLine] += currentCodeLine[this.currentChar];

                // Reproducir sonido si está habilitado
                if (this.typeSound && this.typeSoundElement) {
                    // Reproducir solo para caracteres alfanuméricos (no para espacios)
                    if (/\S/.test(currentCodeLine[this.currentChar])) {
                        this.typeSoundElement.currentTime = 0;
                        this.typeSoundElement.play().catch(e => {
                            // Ignorar errores de reproducción (navegadores pueden bloquear autoplay)
                        });
                    }
                }

                this.currentChar++;

                // Programar el siguiente carácter
                setTimeout(this.typeNextChar, this.getRandomTypingSpeed());
            } else if (this.currentLine < this.code.length - 1) {
                // Pasar a la siguiente línea
                this.currentLine++;
                this.currentChar = 0;
                this.displayedCode.push('');

                // Pequeña pausa entre líneas
                setTimeout(this.typeNextChar, this.speed * 2);
            } else if (this.loop) {
                // Reiniciar la animación después de una pausa más larga si loop es true
                setTimeout(() => {
                    this.displayedCode = [''];
                    this.currentLine = 0;
                    this.currentChar = 0;
                    this.typeNextChar();
                }, 3000); // Pausa de 3 segundos antes de reiniciar
            }
        },
        pauseAnimation() {
            this.isPaused = true;
        },
        resumeAnimation() {
            this.isPaused = false;
            this.typeNextChar();
        },
        blinkCursor() {
            setInterval(() => {
                this.isCursorBlinking = !this.isCursorBlinking;
            }, 530); // Tiempo de parpadeo del cursor
        },
        getRandomTypingSpeed() {
            // Añadir variación aleatoria al speed para hacerlo más natural
            const variance = this.speed * 0.3; // 30% de variación
            return this.speed + (Math.random() * variance - variance / 2);
        },
        focusTerminal() {
            // Método para simular el "enfoque" de la terminal
            this.isCursorBlinking = true;
        },
        toggleFullscreen() {
            this.isFullscreen = !this.isFullscreen;

            // Emitir evento para que el componente padre pueda responder
            this.$emit('fullscreen-change', this.isFullscreen);

            // Ajustar scroll al contenido si es necesario
            if (this.isFullscreen) {
                setTimeout(() => {
                    this.$refs.container.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        },
        closeTerminal() {
            // Emitir evento de cierre
            this.$emit('close');
        },
        setupIntersectionObserver() {
            // Configurar IntersectionObserver para detectar cuando el componente está visible
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && this.autoStart) {
                        // Si está visible y es autoStart, reanudar la animación
                        if (this.isPaused) {
                            this.resumeAnimation();
                        }
                    } else {
                        // Si no está visible, pausar la animación para ahorrar recursos
                        if (!this.isPaused) {
                            this.pauseAnimation();
                        }
                    }
                });
            }, { threshold: 0.3 }); // Visible cuando al menos el 30% del componente está en viewport

            // Comenzar a observar
            this.observer.observe(this.$refs.container);
        },
        cleanupIntervals() {
            // Limpiar todos los intervalos y timeouts
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    }
}
</script>

<style scoped>
.terminal-container {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    margin: 1rem 0;
    width: 100%;
    height: 400px;
    transition: all 0.3s ease;
}

.terminal-container.is-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    border-radius: 0;
    margin: 0;
}

.terminal-header {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    background-color: rgba(24, 24, 27, 0.95);
    border-bottom: 1px solid rgba(63, 63, 70, 0.4);
}

.terminal-controls {
    display: flex;
    gap: 0.5rem;
}

.control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
}

.control.red {
    background-color: #ff5f56;
}

.control.yellow {
    background-color: #ffbd2e;
}

.control.green {
    background-color: #27c93f;
}

.terminal-title {
    flex: 1;
    text-align: center;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

.terminal-actions {
    display: flex;
    gap: 0.5rem;
}

.terminal-btn {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: all 0.2s ease;
}

.terminal-btn:hover {
    background-color: rgba(99, 102, 241, 0.2);
    color: white;
}

.terminal-content {
    height: calc(100% - 3rem);
    padding: 1rem;
    background-color: rgba(9, 9, 11, 0.95);
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    line-height: 1.5;
    white-space: pre;
    tab-size: 2;
    overflow-y: auto;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
}

.line-numbers {
    display: flex;
    flex-direction: column;
    padding-right: 1rem;
    opacity: 0.4;
    user-select: none;
    text-align: right;
    min-width: 2rem;
}

.line-number {
    color: #6366f1;
}

.code-content {
    flex: 1;
    white-space: pre;
    position: relative;
}

.code-line {
    min-height: 1.5rem;
}

.cursor {
    display: inline-block;
    width: 2px;
    height: 1.2rem;
    background-color: #6366f1;
    margin-left: 2px;
    position: relative;
    top: 3px;
}

.cursor.blink {
    animation: blink 1.06s infinite steps(1);
}

.cursor.hidden {
    opacity: 0;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

/* Estilos para resaltado de sintaxis */
:deep(.string) {
    color: #a5e075;
}

:deep(.keyword) {
    color: #ff7edb;
}

:deep(.boolean),
:deep(.number) {
    color: #f97583;
}

:deep(.punctuation) {
    color: #bbbbbb;
}

:deep(.comment) {
    color: #7b7b7b;
    font-style: italic;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
</style>