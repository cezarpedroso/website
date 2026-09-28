import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import './supporting-pages.css';

function SupportDocument({
  label,
  title,
  introduction,
  children,
}: {
  label: string;
  title: string;
  introduction: string;
  children: ReactNode;
}) {
  return (
    <div className="support-page">
      <div className="container-wide support-page-container">
        <header className="support-page-intro">
          <p className="eyebrow intro-eyebrow">{label}</p>
          <h1 className="display-heading" tabIndex={-1}>{title}</h1>
          <p>{introduction}</p>
          <span className="support-page-date">Last updated September 28, 2026</span>
        </header>
        <div className="support-page-content">{children}</div>
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <SupportDocument
      label="Information"
      title="Privacy Policy"
      introduction="This policy explains what information the ROSALOGIC website may collect and how we handle inquiries."
    >
      <section>
        <h2>Information we receive</h2>
        <p>When you submit the contact form, we collect your name, email address, optional organization, and the details of your inquiry. We store your submission in a private database so we can respond and maintain appropriate business records. We also use a pseudonymous identifier derived from your IP address and email to limit abusive submissions.</p>
        <p>Our hosting provider may process technical information needed to serve and protect the site, such as IP addresses, browser and device information, pages requested, and request times.</p>
      </section>
      <section>
        <h2>How we use information</h2>
        <p>We use inquiry information to respond to you, discuss potential work, and maintain appropriate business records. Technical information may be used to operate, troubleshoot, and secure the website. We do not sell personal information.</p>
      </section>
      <section>
        <h2>Analytics, cookies, and third parties</h2>
        <p>We do not currently run optional website analytics or advertising cookies. The site is hosted by an external provider, which may maintain operational logs or use technology necessary to deliver and secure the site. Fonts are provided by Google Fonts; loading them may send technical request information, including your IP address, to Google. When email notification is connected, Google processes a copy of contact inquiries in our private Gmail inbox. External sites linked from this website have their own privacy practices.</p>
      </section>
      <section>
        <h2>Retention and security</h2>
        <p>We retain correspondence for as long as reasonably needed to handle an inquiry and maintain business records, or as required by law. Hosting logs are retained under the provider&apos;s practices. We take reasonable steps to protect information, but no method of online transmission or storage is completely secure.</p>
      </section>
      <section>
        <h2>Your requests</h2>
        <p>To ask about, correct, or request deletion of information you have sent us, use our <Link href="/contact">contact form</Link>. We will review requests in accordance with applicable law. We may update this policy as the website or our practices change.</p>
      </section>
    </SupportDocument>
  );
}

export function TermsPage() {
  return (
    <SupportDocument
      label="Information"
      title="Terms of Use"
      introduction="These terms apply to your use of the ROSALOGIC website. They do not replace any separate agreement for services."
    >
      <section>
        <h2>Use of this website</h2>
        <p>You may use this website for lawful informational purposes. Do not use it to interfere with the site or its users, attempt unauthorized access, introduce harmful code, or violate applicable law.</p>
      </section>
      <section>
        <h2>Content and intellectual property</h2>
        <p>The text, design, branding, and other site materials are owned by ROSALOGIC or their respective rights holders and are protected by applicable intellectual property laws. You may view them for personal or business evaluation, but may not reproduce or use them commercially without permission.</p>
      </section>
      <section>
        <h2>External links</h2>
        <p>Links to other websites are provided for convenience. We do not control their content, availability, or practices, and a link does not mean we endorse them.</p>
      </section>
      <section>
        <h2>Disclaimer and liability</h2>
        <p>Website content is provided for general information and may change without notice. To the extent allowed by law, the site is provided “as is,” without warranties of accuracy, availability, or suitability for a particular purpose. ROSALOGIC is not liable for losses arising from use of or inability to use the site, except where liability cannot lawfully be excluded. Nothing here limits rights that cannot be waived under applicable law.</p>
      </section>
      <section>
        <h2>Governing law and contact</h2>
        <p>These terms are governed by the laws of the jurisdiction where ROSALOGIC maintains its principal place of business, without applying rules on conflicts of law, unless mandatory local law provides otherwise. Questions about these terms can be sent through our <Link href="/contact">contact form</Link>. We may revise these terms by updating this page.</p>
      </section>
    </SupportDocument>
  );
}

export function AccessibilityPage() {
  return (
    <SupportDocument
      label="Information"
      title="Accessibility Statement"
      introduction="ROSALOGIC wants this website to be usable by as many people as possible."
    >
      <section>
        <h2>Our accessibility goal</h2>
        <p>We aim to design and maintain the site in line with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. This is a target, not a claim of conformance: the site has not undergone a complete formal accessibility audit, and some content or interactions may not yet meet every criterion.</p>
      </section>
      <section>
        <h2>Feedback and assistance</h2>
        <p>If you encounter a barrier or need information in another format, please use our <Link href="/contact">contact form</Link>. If possible, include the page URL, what you were trying to do, and any browser or assistive technology details you are comfortable sharing. We will review the issue, respond, and work toward a practical way for you to access the information.</p>
      </section>
    </SupportDocument>
  );
}

function SupportMessage({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: ReactNode;
}) {
  return (
    <div className="support-page support-message-page">
      <section className="container-wide" aria-label={label}>
        <p className="eyebrow intro-eyebrow">{label}</p>
        <h1 className="display-heading" tabIndex={-1}>{title}</h1>
        <p className="support-message-description">{description}</p>
        <Link className="button-solid" href="/" data-testid="link-support-home">
          Back to homepage <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <SupportMessage
      label="404"
      title="This system couldn't find that page."
      description="The address may have changed, or the page may no longer be available."
    />
  );
}

export function ThankYouPage() {
  const confirmed = typeof window !== 'undefined' && window.history.state?.rosalogicContactReceived === true;

  if (!confirmed) {
    return (
      <SupportMessage
        label="Contact"
        title="No message was submitted."
        description={<>To send us an inquiry, please use the <Link href="/contact">contact form</Link>.</>}
      />
    );
  }

  return (
    <SupportMessage
      label="Contact"
      title="Thank you."
      description={<>Your inquiry has been saved. We&apos;ll review what you shared and follow up by email about the next steps.</>}
    />
  );
}