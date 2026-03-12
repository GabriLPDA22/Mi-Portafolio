"use client";

import { useState } from "react";
import { m, type Variants } from "framer-motion";
import {
  Send,
  CheckCircle,
  Mail,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

interface FormData {
  name: string;
  email: string;
  message: string;
  project: string;
}

const EMPTY_FORM: FormData = { name: "", email: "", message: "", project: "" };

export default function ContactForm() {
  const { t } = useLocale();
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage(t.contact.form.error);
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    try {
      const projectLabels: Record<string, string> = {
        mobile: t.contact.form.projectOptions.mobile,
        web: t.contact.form.projectOptions.web,
        ecommerce: t.contact.form.projectOptions.ecommerce,
        saas: t.contact.form.projectOptions.saas,
        consulting: t.contact.form.projectOptions.consulting,
        other: t.contact.form.projectOptions.other,
      };

      const response = await fetch("https://formspree.io/f/mrezlekq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project: formData.project
            ? projectLabels[formData.project] || formData.project
            : "",
          message: formData.message,
          _subject: "Contacto desde portfolio",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData(EMPTY_FORM);
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o escríbeme directamente a gsaiz.bajo@gmail.com"
      );
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage(null);
  };

  return (
    <m.div
      variants={fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="lg:col-span-3"
    >
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
        {status === "success" ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
              <CheckCircle className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              {t.contact.form.success.title}
            </h3>
            <p className="text-[15px] text-white/65">
              {t.contact.form.success.message}
            </p>
            <button
              onClick={handleReset}
              className="mt-6 text-[13px] font-medium text-[#8b5cf6] transition-colors hover:text-[#a78bfa]"
            >
              {t.contact.form.success.again}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[13px] font-medium text-white/70"
                >
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder-white/30 outline-none transition-all focus:border-[#8b5cf6]/50 focus:ring-1 focus:ring-[#8b5cf6]/30"
                  placeholder={t.contact.form.name}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[13px] font-medium text-white/70"
                >
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder-white/30 outline-none transition-all focus:border-[#8b5cf6]/50 focus:ring-1 focus:ring-[#8b5cf6]/30"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="project"
                className="mb-2 block text-[13px] font-medium text-white/70"
              >
                {t.contact.form.project}
              </label>
              <select
                id="project"
                name="project"
                value={formData.project}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setFormData({ ...formData, project: e.target.value })
                }
                className="w-full appearance-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-[14px] text-white outline-none transition-all focus:border-[#8b5cf6]/50 focus:ring-1 focus:ring-[#8b5cf6]/30"
              >
                <option value="" className="bg-[#18181b]">
                  {t.contact.form.projectOptions.select}
                </option>
                <option value="mobile" className="bg-[#18181b]">
                  {t.contact.form.projectOptions.mobile}
                </option>
                <option value="web" className="bg-[#18181b]">
                  {t.contact.form.projectOptions.web}
                </option>
                <option value="ecommerce" className="bg-[#18181b]">
                  {t.contact.form.projectOptions.ecommerce}
                </option>
                <option value="saas" className="bg-[#18181b]">
                  {t.contact.form.projectOptions.saas}
                </option>
                <option value="consulting" className="bg-[#18181b]">
                  {t.contact.form.projectOptions.consulting}
                </option>
                <option value="other" className="bg-[#18181b]">
                  {t.contact.form.projectOptions.other}
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[13px] font-medium text-white/70"
              >
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder-white/30 outline-none transition-all focus:border-[#8b5cf6]/50 focus:ring-1 focus:ring-[#8b5cf6]/30"
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>

            {status === "error" && errorMessage && (
              <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-[13px] text-red-400">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#8b5cf6] px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#7c4fe4] hover:shadow-lg hover:shadow-[#8b5cf6]/25 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t.contact.form.sending}
                </>
              ) : (
                <>
                  {t.contact.form.send}
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="text-center text-[12px] text-white/40">
              {t.contact.form.support}{" "}
              <a
                href="mailto:gsaiz.bajo@gmail.com"
                className="font-medium text-[#8b5cf6] transition-colors hover:text-[#a78bfa]"
              >
                gsaiz.bajo@gmail.com
              </a>
            </p>
          </form>
        )}
      </div>
    </m.div>
  );
}
