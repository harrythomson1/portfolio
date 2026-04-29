"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

const fieldClasses =
  "w-full rounded-tile bg-surface px-3.5 py-2.5 text-sm text-ink ring-1 ring-line placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-0";

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!ENDPOINT) {
      console.warn("NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set — form submission skipped.");
      setStatus("success");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });

      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-card bg-surface ring-1 ring-line p-10 text-center">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <p className="text-base font-semibold text-ink">Message sent — thank you!</p>
        <p className="text-sm text-ink-soft">I&apos;ll get back to you as soon as I can.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs text-ink-muted underline underline-offset-2 hover:text-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-card bg-surface ring-1 ring-line p-6">
      <Field label="Name" htmlFor="name">
        <input id="name" name="name" required placeholder="Your name" className={fieldClasses} />
      </Field>
      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={fieldClasses}
        />
      </Field>
      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can I help you?"
          className={fieldClasses}
        />
      </Field>

      {status === "error" && (
        <p className="text-xs text-red-500">Something went wrong — please try again or email me directly.</p>
      )}

      <Button
        type="submit"
        className="w-full justify-center"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        <Icon name="send" className="h-4 w-4" />
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <div className="mb-1.5 text-xs font-medium text-ink-soft">{label}</div>
      {children}
    </label>
  );
}
