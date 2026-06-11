"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Comments = dynamic(() => import("./Comments"));

/**
 * Monta la sección de comentarios solo cuando el usuario se acerca a ella.
 * Evita descargar el bundle de Supabase (~200KB) en la carga inicial.
 */
export default function LazyComments() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // El ancla #comentarios vive en el wrapper hasta que monta la sección real
  return (
    <div ref={ref} id={show ? undefined : "comentarios"} className="scroll-mt-24">
      {show ? <Comments /> : <div className="min-h-[480px]" aria-hidden="true" />}
    </div>
  );
}
