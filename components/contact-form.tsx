"use client";

import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "next-themes";
import { Check, Loader2, Send, X } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<Status>("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
  const { resolvedTheme } = useTheme();
  const { t } = useLocale();

  function resetCaptcha() {
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
  }

  // Gonderim bitince form bir sure sonra tekrar kullanilabilir hale gelsin;
  // aksi halde buton "Mesaj gönderildi" halinde kilitli kaliyor.
  useEffect(() => {
    if (formStatus !== "success" && formStatus !== "error") return;
    const id = window.setTimeout(() => setFormStatus("idle"), 5000);
    return () => window.clearTimeout(id);
  }, [formStatus]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!captchaToken) return;

    const form = e.currentTarget;
    setFormStatus("loading");

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      captchaToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    } finally {
      resetCaptcha();
    }
  }

  const fieldClass =
    "w-full rounded-lg border border-border-token bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-fg/70 outline-none transition-colors focus:border-accent-token disabled:opacity-50";

  const disabled = formStatus === "loading" || formStatus === "success";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-medium text-muted-fg"
          >
            {t.contact.name}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            disabled={disabled}
            className={fieldClass}
            placeholder={t.contact.namePlaceholder}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-medium text-muted-fg"
          >
            {t.contact.email}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            disabled={disabled}
            className={fieldClass}
            placeholder={t.contact.emailPlaceholder}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-medium text-muted-fg"
        >
          {t.contact.message}
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          disabled={disabled}
          className={`${fieldClass} resize-none`}
          placeholder={t.contact.messagePlaceholder}
        />
      </div>

      <div className="flex justify-center sm:justify-start">
        {siteKey ? (
          <ReCAPTCHA
            // Tema degisince widget'in yeniden olusmasi icin key veriyoruz
            key={resolvedTheme === "dark" ? "dark" : "light"}
            ref={recaptchaRef}
            sitekey={siteKey}
            onChange={(token) => setCaptchaToken(token)}
            theme={resolvedTheme === "dark" ? "dark" : "light"}
          />
        ) : (
          <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-500">
            {t.contact.captchaMissing}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={disabled || !captchaToken}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-token px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto cursor-pointer"
      >
        {formStatus === "loading" && (
          <>
            <Loader2 size={16} className="animate-spin" /> {t.contact.sending}
          </>
        )}
        {formStatus === "idle" && (
          <>
            <Send size={16} /> {t.contact.send}
          </>
        )}
        {formStatus === "success" && (
          <>
            <Check size={16} /> {t.contact.sent}
          </>
        )}
        {formStatus === "error" && (
          <>
            <X size={16} /> {t.contact.errorButton}
          </>
        )}
      </button>

      {formStatus === "error" && (
        <p className="text-sm text-red-500">
          {t.contact.errorText}
        </p>
      )}
    </form>
  );
}
