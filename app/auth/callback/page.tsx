"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  useEffect(() => {
    const supabase = createClient();

    const handleCallback = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) console.error("Auth callback error:", error.message);
        }
      } catch (e) {
        console.error("Auth callback exception:", e);
      } finally {
        window.location.replace("/#comentarios");
      }
    };

    handleCallback();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
      <p className="text-sm text-white/40">Iniciando sesión...</p>
    </div>
  );
}
