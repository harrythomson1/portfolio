import { PageCard, PageCardHeader } from "@/components/layout/page-card";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { ResumeCta } from "@/components/contact/resume-cta";

export default function ContactPage() {
  return (
    <PageCard>
      <PageCardHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s connect <span className="text-accent">·</span>
          </>
        }
        subtitle="I'm always open to discussing new opportunities, collaborations or interesting projects."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
      <ResumeCta />
    </PageCard>
  );
}
