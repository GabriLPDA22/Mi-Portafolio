"use client";

import { useEffect, useReducer, useTransition } from "react";
import { createClient } from "@/lib/supabase/client";
import { useLocale } from "@/contexts/LocaleContext";
import type { User } from "@supabase/supabase-js";
import { m, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

interface Comment {
  id: string;
  user_name: string;
  user_avatar: string | null;
  message: string;
  created_at: string;
}

type CommentsState = {
  user: User | null;
  comments: Comment[];
  message: string;
  error: string | null;
  loading: boolean;
  submitted: boolean;
};

type CommentsAction =
  | { type: "INIT_DONE"; user: User | null; comments: Comment[] }
  | { type: "SET_USER"; user: User | null }
  | { type: "SET_COMMENTS"; comments: Comment[] }
  | { type: "SET_MESSAGE"; message: string }
  | { type: "SET_ERROR"; error: string | null }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_ERROR"; error: string }
  | { type: "RESET_SUBMITTED" };

function commentsReducer(
  state: CommentsState,
  action: CommentsAction
): CommentsState {
  switch (action.type) {
    case "INIT_DONE":
      return {
        ...state,
        user: action.user,
        comments: action.comments,
        loading: false,
      };
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_COMMENTS":
      return { ...state, comments: action.comments };
    case "SET_MESSAGE":
      return { ...state, message: action.message };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "SUBMIT_SUCCESS":
      return { ...state, message: "", submitted: true, error: null };
    case "SUBMIT_ERROR":
      return { ...state, error: action.error };
    case "RESET_SUBMITTED":
      return { ...state, submitted: false };
    default:
      return state;
  }
}

const CAROUSEL_THRESHOLD = 5;

function timeAgo(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return "ahora mismo";
  if (diff < 3600) return `hace ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `hace ${Math.floor(diff / 3600)} h`;
  if (diff < 604800) return `hace ${Math.floor(diff / 86400)} d`;
  return new Date(dateStr).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
  });
}

function Avatar({
  name,
  src,
  size = "md",
}: {
  name: string;
  src: string | null;
  size?: "sm" | "md";
}) {
  const cls = size === "sm" ? "h-8 w-8 text-xs" : "h-10 w-10 text-sm";
  const dim = size === "sm" ? 32 : 40;
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        width={dim}
        height={dim}
        referrerPolicy="no-referrer"
        className={`${cls} flex-shrink-0 rounded-full object-cover ring-2 ring-acid/20`}
      />
    );
  }
  return (
    <div
      className={`${cls} flex flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-acid to-acid-dark font-bold text-noir ring-2 ring-acid/20`}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function CommentCard({
  comment,
  index,
  verified,
}: {
  comment: Comment;
  index: number;
  verified: string;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="card-acid group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] px-6 py-5"
    >
      {/* Comilla decorativa */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-3 right-4 font-display text-6xl font-bold text-acid/[0.08]"
      >
        &ldquo;
      </span>

      <p className="flex-1 text-[15px] leading-relaxed text-ink/65">
        {comment.message}
      </p>

      <div className="h-px w-full bg-white/[0.06]" />

      <div className="flex items-center gap-3">
        <Avatar name={comment.user_name} src={comment.user_avatar} size="sm" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink/85">{comment.user_name}</p>
          <p className="text-[11px] text-ink/35">{timeAgo(comment.created_at)}</p>
        </div>
        <span className="text-[10px] font-semibold tracking-wide text-acid/60">
          {verified}
        </span>
      </div>
    </m.div>
  );
}

function MarqueeTrack({
  comments,
  verified,
}: {
  comments: Comment[];
  verified: string;
}) {
  const items = [
    ...comments.map((c) => ({ ...c, _key: `orig-${c.id}` })),
    ...comments.map((c) => ({ ...c, _key: `clone-${c.id}` })),
  ];
  return (
    <div className="marquee-mask relative overflow-hidden">
      <div className="animate-marquee flex w-max gap-4 py-2">
        {items.map((c) => (
          <div
            key={c._key}
            className="flex w-64 flex-shrink-0 flex-col gap-4 rounded-3xl border border-white/[0.07] bg-white/[0.025] px-5 py-5 sm:w-72"
          >
            <p className="line-clamp-3 text-sm leading-relaxed text-ink/65">
              {c.message}
            </p>
            <div className="h-px w-full bg-white/[0.06]" />
            <div className="flex items-center gap-2.5">
              <Avatar name={c.user_name} src={c.user_avatar} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink/85">{c.user_name}</p>
                <p className="text-[11px] text-ink/35">{timeAgo(c.created_at)}</p>
              </div>
              <span className="text-[10px] font-semibold text-acid/60">
                {verified}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Comments() {
  const supabase = createClient();
  const { t } = useLocale();
  const tc = t.comments;
  const [isPending, startTransition] = useTransition();
  const [state, dispatch] = useReducer(commentsReducer, {
    user: null,
    comments: [],
    message: "",
    error: null,
    loading: true,
    submitted: false,
  });

  useEffect(() => {
    const init = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { data } = await supabase
        .from("comments")
        .select("*")
        .order("created_at", { ascending: false });
      dispatch({ type: "INIT_DONE", user, comments: data ?? [] });
    };
    init();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_e, session) => {
      dispatch({ type: "SET_USER", user: session?.user ?? null });
    });
    return () => subscription.unsubscribe();
  }, []);

  async function loadComments() {
    const { data } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) dispatch({ type: "SET_COMMENTS", comments: data });
  }

  async function handleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!state.message.trim() || !state.user) return;
    dispatch({ type: "SET_ERROR", error: null });
    startTransition(async () => {
      const { error } = await supabase.from("comments").insert({
        user_id: state.user!.id,
        user_name:
          state.user!.user_metadata?.full_name ?? state.user!.email ?? "Anónimo",
        user_avatar: state.user!.user_metadata?.avatar_url ?? null,
        message: state.message.trim(),
      });
      if (error) {
        dispatch({
          type: "SUBMIT_ERROR",
          error: "No se pudo enviar el comentario. Inténtalo de nuevo.",
        });
      } else {
        dispatch({ type: "SUBMIT_SUCCESS" });
        await loadComments();
        setTimeout(() => dispatch({ type: "RESET_SUBMITTED" }), 3000);
      }
    });
  }

  const useCarousel = state.comments.length >= CAROUSEL_THRESHOLD;

  return (
    <section id="comentarios" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-main max-w-4xl">
        <SectionHeading
          tag={tc.tag}
          headline={tc.headline}
          subtitle={tc.subtitle}
        />

        {/* Comments display */}
        {state.loading ? (
          <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="h-36 animate-pulse rounded-3xl bg-white/[0.03]"
              />
            ))}
          </div>
        ) : state.comments.length === 0 ? (
          <p className="mb-14 text-center text-sm text-ink/30">{tc.empty}</p>
        ) : useCarousel ? (
          <div className="mb-14">
            <MarqueeTrack comments={state.comments} verified={tc.verified} />
          </div>
        ) : (
          <div
            className={`mb-14 grid gap-4 ${
              state.comments.length === 1
                ? "mx-auto max-w-sm grid-cols-1"
                : state.comments.length === 2
                ? "mx-auto max-w-2xl grid-cols-1 sm:grid-cols-2"
                : state.comments.length === 3
                ? "grid-cols-1 sm:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2"
            }`}
          >
            {state.comments.map((c, i) => (
              <CommentCard key={c.id} comment={c} index={i} verified={tc.verified} />
            ))}
          </div>
        )}

        {/* Auth + Form */}
        <div className="mx-auto max-w-lg">
          <div className="mb-5 flex items-center justify-between rounded-full border border-white/[0.08] bg-white/[0.025] px-5 py-3">
            {state.user ? (
              <div className="flex items-center gap-3">
                <Avatar
                  name={state.user.user_metadata?.full_name ?? "U"}
                  src={state.user.user_metadata?.avatar_url ?? null}
                  size="sm"
                />
                <span className="text-sm text-ink/65">
                  {state.user.user_metadata?.full_name ?? state.user.email}
                </span>
              </div>
            ) : (
              <span className="text-sm text-ink/40">{tc.loginPrompt}</span>
            )}
            {state.user ? (
              <button
                onClick={() => supabase.auth.signOut()}
                className="cursor-pointer text-xs text-ink/35 transition hover:text-ink/60"
              >
                {tc.logout}
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-ink/85 transition hover:border-acid/40 hover:bg-white/[0.07]"
              >
                <GoogleIcon />
                {tc.loginBtn}
              </button>
            )}
          </div>

          {state.user && (
            <AnimatePresence mode="wait">
              {state.submitted ? (
                <m.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-2 rounded-3xl border border-acid/25 bg-acid/[0.06] py-8 text-center"
                >
                  <span className="text-2xl text-acid">✓</span>
                  <p className="text-sm font-semibold text-acid">
                    {tc.successTitle}
                  </p>
                </m.div>
              ) : (
                <m.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                >
                  <textarea
                    value={state.message}
                    onChange={(e) =>
                      dispatch({ type: "SET_MESSAGE", message: e.target.value })
                    }
                    placeholder={tc.placeholder}
                    rows={3}
                    maxLength={500}
                    className="w-full resize-none rounded-3xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-sm text-ink/85 placeholder-white/25 outline-none transition focus:border-acid/40 focus:ring-1 focus:ring-acid/20"
                  />
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="text-xs text-ink/25">
                      {state.message.length}/500
                    </span>
                    <button
                      type="submit"
                      disabled={isPending || !state.message.trim()}
                      className="btn-shine cursor-pointer rounded-full bg-acid px-6 py-2.5 text-sm font-bold text-noir transition hover:bg-acid-light disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {isPending ? tc.submitting : tc.submit}
                    </button>
                  </div>
                  {state.error && (
                    <p className="mt-2 text-xs text-red-400">{state.error}</p>
                  )}
                </m.form>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}
