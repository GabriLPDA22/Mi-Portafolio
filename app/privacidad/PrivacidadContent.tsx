"use client";

import LegalPageShell from "@/components/legal/LegalPageShell";
import {
  LegalBulletList,
  LegalContactBlock,
  LegalEmailLink,
  LegalKeyValueList,
  LegalSection,
  LegalSubSection,
} from "@/components/legal/LegalBlocks";
import { useLocale } from "@/contexts/LocaleContext";

export default function PrivacidadContent() {
  const { t } = useLocale();
  const p = t.privacy.sections;

  const sections = [
    { id: "responsible", title: p.responsible.title },
    { id: "data-collected", title: p.dataCollected.title },
    { id: "purpose", title: p.purpose.title },
    { id: "legal-basis", title: p.legalBasis.title },
    { id: "retention", title: p.retention.title },
    { id: "rights", title: p.rights.title },
    { id: "security", title: p.security.title },
    { id: "third-party", title: p.thirdParty.title },
    { id: "changes", title: p.changes.title },
    { id: "contact", title: p.contact.title },
  ];

  return (
    <LegalPageShell
      title={t.privacy.title}
      lastUpdatedLabel={t.privacy.lastUpdated}
      sections={sections}
    >
      <LegalSection id="responsible" title={p.responsible.title}>
        <p>{p.responsible.description}</p>
        <LegalKeyValueList
          items={[
            { label: p.responsible.name, value: "Gabriel Saiz" },
            { label: p.responsible.email, value: <LegalEmailLink /> },
            { label: p.responsible.website, value: "gabrielcodes.dev" },
          ]}
        />
      </LegalSection>

      <LegalSection id="data-collected" title={p.dataCollected.title}>
        <p>{p.dataCollected.description}</p>
        <LegalSubSection title={p.dataCollected.contactForm.title}>
          <p>{p.dataCollected.contactForm.description}</p>
          <LegalBulletList items={p.dataCollected.contactForm.items} />
          <p>{p.dataCollected.contactForm.note}</p>
        </LegalSubSection>
        <LegalSubSection title={p.dataCollected.cookies.title}>
          <p>{p.dataCollected.cookies.description}</p>
          <LegalBulletList items={p.dataCollected.cookies.items} />
          <p>{p.dataCollected.cookies.note}</p>
        </LegalSubSection>
      </LegalSection>

      <LegalSection id="purpose" title={p.purpose.title}>
        <p>{p.purpose.description}</p>
        <LegalBulletList items={p.purpose.items} />
      </LegalSection>

      <LegalSection id="legal-basis" title={p.legalBasis.title}>
        <p>{p.legalBasis.description}</p>
        <LegalBulletList items={p.legalBasis.items} />
      </LegalSection>

      <LegalSection id="retention" title={p.retention.title}>
        <p>{p.retention.description}</p>
        <p>{p.retention.cookiesNote}</p>
        <LegalBulletList items={p.retention.cookieItems} />
      </LegalSection>

      <LegalSection id="rights" title={p.rights.title}>
        <p>{p.rights.description}</p>
        <LegalBulletList items={p.rights.items} />
        <p>
          {p.rights.contact} <LegalEmailLink />
        </p>
      </LegalSection>

      <LegalSection id="security" title={p.security.title}>
        <p>{p.security.description}</p>
      </LegalSection>

      <LegalSection id="third-party" title={p.thirdParty.title}>
        <p>{p.thirdParty.description}</p>
      </LegalSection>

      <LegalSection id="changes" title={p.changes.title}>
        <p>{p.changes.description}</p>
      </LegalSection>

      <LegalSection id="contact" title={p.contact.title}>
        <LegalContactBlock description={p.contact.description} />
      </LegalSection>
    </LegalPageShell>
  );
}
