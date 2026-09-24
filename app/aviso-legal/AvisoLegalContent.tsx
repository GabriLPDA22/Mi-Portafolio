"use client";

import LegalPageShell from "@/components/legal/LegalPageShell";
import {
  LegalBulletList,
  LegalContactBlock,
  LegalEmailLink,
  LegalKeyValueList,
  LegalSection,
} from "@/components/legal/LegalBlocks";
import { useLocale } from "@/contexts/LocaleContext";

export default function AvisoLegalContent() {
  const { t } = useLocale();
  const s = t.legalNotice.sections;

  const sections = [
    { id: "identity", title: s.identity.title },
    { id: "purpose", title: s.purpose.title },
    { id: "terms", title: s.terms.title },
    { id: "ip", title: s.ip.title },
    { id: "liability", title: s.liability.title },
    { id: "links", title: s.links.title },
    { id: "law", title: s.law.title },
    { id: "changes", title: s.changes.title },
    { id: "contact", title: s.contact.title },
  ];

  return (
    <LegalPageShell
      title={t.legalNotice.title}
      lastUpdatedLabel={t.legalNotice.lastUpdated}
      sections={sections}
    >
      <LegalSection id="identity" title={s.identity.title}>
        <p>{s.identity.intro}</p>
        <LegalKeyValueList
          items={[
            { label: s.identity.name, value: s.identity.nameValue },
            { label: s.identity.email, value: <LegalEmailLink /> },
            { label: s.identity.website, value: s.identity.websiteValue },
            { label: s.identity.activity, value: s.identity.activityValue },
          ]}
        />
      </LegalSection>

      <LegalSection id="purpose" title={s.purpose.title}>
        <p>{s.purpose.description}</p>
      </LegalSection>

      <LegalSection id="terms" title={s.terms.title}>
        <p>{s.terms.description}</p>
        <LegalBulletList items={s.terms.items} />
      </LegalSection>

      <LegalSection id="ip" title={s.ip.title}>
        <p>{s.ip.description}</p>
      </LegalSection>

      <LegalSection id="liability" title={s.liability.title}>
        <p>{s.liability.description}</p>
        <LegalBulletList items={s.liability.items} />
      </LegalSection>

      <LegalSection id="links" title={s.links.title}>
        <p>{s.links.description}</p>
      </LegalSection>

      <LegalSection id="law" title={s.law.title}>
        <p>{s.law.description}</p>
      </LegalSection>

      <LegalSection id="changes" title={s.changes.title}>
        <p>{s.changes.description}</p>
      </LegalSection>

      <LegalSection id="contact" title={s.contact.title}>
        <LegalContactBlock description={s.contact.description} />
      </LegalSection>
    </LegalPageShell>
  );
}
