import type { ReactNode } from 'react';
import { Link } from 'wouter';
import manufacturingImage from '../assets/industry-manufacturing.jpg';
import './solutions-page.css';

const softwareAreas = [
  { no: '01', title: 'Operations & workflow', description: 'Coordinate the work that keeps an organization moving.', examples: ['Workflow management', 'Work orders', 'Approvals', 'Scheduling', 'Inventory', 'Procurement', 'Internal portals', 'Field operations'] },
  { no: '02', title: 'Customer & relationship systems', description: 'Manage customer relationships and the work around them.', examples: ['CRM', 'Customer portals', 'Sales workflows', 'Service management', 'Account management', 'Quoting & proposals'] },
  { no: '03', title: 'Asset & maintenance systems', description: 'Keep physical assets, equipment, and maintenance history connected.', examples: ['EAM / CMMS', 'Asset registers', 'Preventive maintenance', 'Inspections', 'Parts & inventory', 'Equipment history'] },
  { no: '04', title: 'Purpose-built applications', description: 'Build around a workflow when existing products do not fit the operation.', examples: ['Internal business platforms', 'Management portals', 'Operational dashboards', 'Industry-specific applications', 'Specialized workflows'] },
];

const integrationAreas = [
  { no: '01', title: 'System integration', description: 'Connect applications and data so information moves reliably.', examples: ['REST APIs', 'Webhooks', 'Third-party APIs', 'Database integration', 'ETL / ELT', 'System synchronization'] },
  { no: '02', title: 'Reporting & business intelligence', description: 'Make operational information easier to understand and act on.', examples: ['Management dashboards', 'Operational reporting', 'KPIs', 'Data visualization', 'Automated reports'] },
  { no: '03', title: 'Automation', description: 'Reduce repetitive work across predictable processes.', examples: ['Data synchronization', 'Notifications', 'Document generation', 'Scheduled processes', 'Approval workflows'] },
];

const infrastructure = [
  { no: '01', title: 'Cloud & infrastructure', description: 'Environments sized and structured for the system they support.', examples: ['AWS and Azure', 'On-premise environments', 'Networking', 'Databases', 'Containers', 'Compute and storage'] },
  { no: '02', title: 'DevOps & delivery', description: 'Repeatable ways to release, monitor, and maintain software.', examples: ['CI/CD', 'Deployment automation', 'Environment management', 'Monitoring and logging', 'Backups'] },
  { no: '03', title: 'Security', description: 'Practical safeguards built into architecture and operations.', examples: ['Identity and access management', 'Secure architecture', 'Secrets management', 'Network security', 'Backup and recovery'] },
];

const process = [
  ['01', 'Understand', 'Learn how the operation works and where friction exists.'],
  ['02', 'Define', 'Clarify requirements, constraints, integrations, and priorities.'],
  ['03', 'Architect', 'Shape the technical and operational solution.'],
  ['04', 'Build', 'Develop, test, and integrate the system.'],
  ['05', 'Deploy', 'Put the system into its production environment.'],
  ['06', 'Operate', 'Support, maintain, and improve the system over time.'],
];

const engagements = [
  ['Build', 'Design and develop a new business or operational system.'],
  ['Improve', 'Modernize, extend, or replace an existing system.'],
  ['Connect', 'Integrate existing applications and data.'],
  ['Operate', 'Maintain, monitor, secure, and improve critical systems.'],
];

function Section({ id, label, title, intro, tone = 'paper', showLabel = true, children }: {
  id?: string; label: string; title?: ReactNode; intro?: ReactNode; tone?: 'paper' | 'white'; showLabel?: boolean; children: ReactNode;
}) {
  return (
    <section id={id} aria-label={!title ? label : undefined} className={`rd-section rd-tone-${tone}`}>
      <div className="rd-wrap">
        {(showLabel || title || intro) && (
          <header className={`rd-grid rd-section-head${title ? '' : ' rd-section-head--compact'}${showLabel ? '' : ' rd-section-head--plain'}`}>
            {showLabel && (title ? <p className="rd-index">{label}</p> : <h2 className="rd-index">{label}</h2>)}
            {title && <h2 className="rd-section-title">{title}</h2>}
            {intro && <p className="rd-section-intro">{intro}</p>}
          </header>
        )}
        <div className="rd-section-body">{children}</div>
      </div>
    </section>
  );
}

function DetailRow({ title, description, examples }: {
  title: string; description: string; examples: string[];
}) {
  return (
    <article className="rd-grid rd-detail-row">
      <div className="rd-detail-title">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      <ul className="rd-example-list">{examples.map((example) => <li key={example}>{example}</li>)}</ul>
    </article>
  );
}

function EditorialImage({ src, alt }: { src: string; alt: string }) {
  return <figure className="rd-editorial-image"><img src={src} alt={alt} loading="lazy" /></figure>;
}

export function SolutionsPage() {
  return (
    <div className="inner-page rosalogic-solutions rd-page">
      <header className="rd-hero">
        <div className="rd-wrap">
          <div className="rd-grid rd-hero-meta"><span className="rd-index">Solutions</span></div>
          <div className="rd-grid rd-hero-main">
            <h1 tabIndex={-1}>Built around<br /><em>your operation.</em></h1>
            <div className="rd-hero-copy">
              <p>Your processes, people, assets, data, and systems need to work together. ROSALOGIC designs and builds technology around those realities—not around a generic software template.</p>
              <p className="rd-hero-principle">The goal isn't more technology. <strong>It's a better-running operation.</strong></p>
            </div>
          </div>
        </div>
      </header>

      <Section label="The system" showLabel={false}>
        <div className="rd-grid rd-definition">
          <ol className="rd-layers" aria-label="Business system layers">
            {['People', 'Processes', 'Software', 'Data', 'Integrations', 'Infrastructure'].map((label) => <li className="rd-grid rd-layer-row" key={label}><span className="rd-layer-label">{label}</span></li>)}
          </ol>
          <p className="rd-definition-copy">We work across these layers when the problem calls for it: building an application, connecting existing systems, or improving the infrastructure beneath them. A reporting issue may begin with disconnected data; an automation opportunity may depend on a clearer workflow.</p>
        </div>
      </Section>

      <Section label="Software systems" title={<>Software shaped around<br /><em>the work itself.</em></>} tone="white">
        <div className="rd-feature rd-feature--image-only">
          <EditorialImage src={manufacturingImage} alt="A technician working beside industrial production equipment on a factory floor." />
        </div>
        <div className="rd-row-list">{softwareAreas.map((area) => <DetailRow key={area.no} title={area.title} description={area.description} examples={area.examples} />)}</div>
      </Section>

      <Section label="Data & integration" showLabel={false} intro="Accounting, CRM, ERP, production, inventory, and external services each hold part of the picture. We connect the right information and make it easier to use.">
        <div className="rd-row-list">{integrationAreas.map((area) => <DetailRow key={area.no} title={area.title} description={area.description} examples={area.examples} />)}</div>
      </Section>

      <Section label="Infrastructure & security" tone="white">
        <div className="rd-row-list">{infrastructure.map((area) => <DetailRow key={area.no} title={area.title} description={area.description} examples={area.examples} />)}</div>
        <p className="rd-principle">We work with the infrastructure you already have when it is the right fit.</p>
      </Section>

      <Section label="How we work" intro="You do not need to arrive with a technical specification. We can help shape the work from the operational challenge." tone="white">
        <ol className="rd-row-list rd-process-list">{process.map(([number, title, copy]) => <li className="rd-grid rd-process-row" key={number}><span className="rd-row-no">{number}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
      </Section>

      <Section label="Engagements" showLabel={false} intro="A focused improvement or integration can be the right place to begin.">
        <div className="rd-row-list rd-engagement-list">{engagements.map(([title, copy]) => <article className="rd-grid rd-engagement-row" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </Section>

      <section className="rd-cta" aria-labelledby="rd-cta-heading">
        <div className="rd-wrap">
          <div className="rd-grid rd-cta-head"><span className="rd-index">Start a conversation</span><h2 id="rd-cta-heading">Where could your<br /><em>operation work better?</em></h2><p>Tell us about the operational problem you are considering.</p></div>
          <nav className="rd-grid rd-cta-actions" aria-label="Next steps"><Link href="/contact">Start a conversation <span aria-hidden="true">→</span></Link><Link href="/industries">Explore industries <span aria-hidden="true">→</span></Link></nav>
        </div>
      </section>
    </div>
  );
}