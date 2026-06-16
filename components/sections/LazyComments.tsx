"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

function CommentsSkeleton() {
  return (
    <section
      aria-label="Comentarios"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="container-main max-w-4xl">
        <div className="mb-12 h-24 animate-pulse rounded-2xl bg-white/[0.03]" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="h-36 animate-pulse rounded-3xl bg-white/[0.03]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Comments = dynamic(() => import("./Comments"), {
  ssr: false,
  loading: () => <CommentsSkeleton />,
});

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

  return (
    <div ref={ref} id={show ? undefined : "comentarios"} className="scroll-mt-24">
      {show ? (
        <Comments />
      ) : (
        <div className="min-h-[480px]" aria-hidden="true" />
      )}
    </div>
  );
}
