import type { ReactNode } from 'react';
import './_group.css';
import './Document.css';

const softwareAreas = [
  {
    no: '01',
    title: 'Operations & Workflow',
    description: 'Systems for managing the processes that keep the organization moving.',
    examples: ['Workflow management', 'Work orders', 'Approvals', 'Scheduling', 'Inventory', 'Procurement', 'Internal portals', 'Field operations'],
  },
  {
    no: '02',
    title: 'Customer & Relationship Systems',
    description: 'Applications for managing customers and the processes surrounding them.',
    examples: ['CRM', 'Customer portals', 'Sales workflows', 'Service management', 'Account management', 'Quoting & proposals'],
  },
  {
    no: '03',
    title: 'Asset & Maintenance Systems',
    description: 'Systems for organizations managing physical assets, equipment, and maintenance.',
    examples: ['EAM', 'CMMS', 'Asset registers', 'Preventive maintenance', 'Work orders', 'Inspections', 'Parts & inventory', 'Equipment history'],
  },
  {
    no: '04',
    title: 'Purpose-Built Applications',
    description: "When an existing product doesn't adequately support the operation, we design and build the system around it.",
    examples: ['Internal business platforms', 'Management portals', 'Operational dashboards', 'Industry-specific applications', 'Specialized workflow systems'],
  },
];

const integrationAreas = [
  {
    no: '01',
    title: 'System Integration',
    lead: 'Connect the systems that already run the business.',
    examples: ['REST APIs', 'Webhooks', 'Third-party APIs', 'Database integration', 'ETL / ELT', 'Event-driven workflows', 'System synchronization'],
  },
  {
    no: '02',
    title: 'Reporting & Business Intelligence',
    lead: 'Turn operational data into information people can actually use.',
    examples: ['Management dashboards', 'Operational reporting', 'KPIs', 'Data visualization', 'Automated reports', 'Business intelligence'],
  },
  {
    no: '03',
    title: 'Automation',
    lead: 'Reduce repetitive work by allowing systems to handle predictable processes.',
    examples: ['Data synchronization', 'Notifications', 'Document generation', 'Scheduled processes', 'Approval workflows', 'Automated imports and exports'],
  },
];

const infrastructure = [
  { no: '01', title: 'Cloud & Infrastructure', items: ['AWS', 'Azure', 'On-premise environments', 'Networking', 'Databases', 'Containers', 'Compute', 'Storage'] },
  { no: '02', title: 'DevOps & Delivery', items: ['CI/CD', 'Deployment automation', 'Environment management', 'Monitoring', 'Logging', 'Backups'] },
  { no: '03', title: 'Security', items: ['Identity & access management', 'Secure architecture', 'Secrets management', 'Network security', 'Security monitoring', 'Backup & recovery'] },
];

const layers = ['PEOPLE', 'PROCESSES', 'SOFTWARE', 'DATA', 'INTEGRATIONS', 'INFRASTRUCTURE'];
const connectedLayers = ['BUSINESS', 'OPERATIONS + USERS', 'SOFTWARE SYSTEMS', 'DATA + INTEGRATIONS', 'INFRASTRUCTURE', 'SECURITY'];

const industries = [
  {
    no: '01',
    industry: 'MANUFACTURING',
    title: 'Production + Maintenance + Inventory',
    description: 'A production company needs better visibility into equipment, maintenance, parts, and production activity.',
    relationships: ['Production', 'Equipment', 'Maintenance', 'Parts Inventory', 'Operational Data', 'Management Dashboard'],
  },
  {
    no: '02',
    industry: 'AGRICULTURE',
    title: 'Operations + Assets + Field Data',
    description: 'Connect equipment, field operations, inventory, work orders, and operational reporting.',
    relationships: ['Equipment', 'Field Operations', 'Inventory', 'Work Orders', 'Operational Reporting'],
  },
  {
    no: '03',
    industry: 'LOGISTICS & TRANSPORTATION',
    title: 'Fleet + Dispatch + Customers + Data',
    description: 'Connect vehicles, drivers, scheduling, customers, maintenance, and operational information.',
    relationships: ['Vehicles', 'Drivers', 'Scheduling', 'Customers', 'Maintenance', 'Operational Information'],
  },
  {
    no: '04',
    industry: 'PROFESSIONAL SERVICES',
    title: 'CRM + Projects + Documents + Billing',
    description: 'Connect customer relationships, projects, work, documents, and business information.',
    relationships: ['Relationships', 'Projects', 'Work', 'Documents', 'Billing'],
  },
];

const process = [
  ['01', 'UNDERSTAND', 'We learn how the operation works and where the friction exists.'],
  ['02', 'DEFINE', 'We identify requirements, constraints, integrations, and priorities.'],
  ['03', 'ARCHITECT', 'We design the technical and operational solution.'],
  ['04', 'BUILD', 'We develop, test, and integrate the system.'],
  ['05', 'DEPLOY', 'We put the system into its production environment.'],
  ['06', 'OPERATE', 'We can continue supporting, maintaining, and improving the system.'],
];

const engagements = [
  ['01', 'BUILD', 'Design and development of a new business or operational system.'],
  ['02', 'IMPROVE', 'Modernize, extend, or replace an existing system.'],
  ['03', 'CONNECT', 'Integrate existing applications and data.'],
  ['04', 'OPERATE', 'Maintain, monitor, secure, and continuously improve critical systems.'],
];

function Section({
  number,
  label,
  title,
  intro,
  tone = 'paper',
  children,
}: {
  number: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: 'paper' | 'white' | 'navy';
  children: ReactNode;
}) {
  return (
    <section className={`rd-section rd-tone-${tone}`}>
      <div className="rd-wrap">
        <header className="rd-grid rd-section-head">
          <p className="rd-index"><span>{number}</span><span>{label}</span></p>
          <h2>{title}</h2>
          {intro && <p className="rd-section-intro">{intro}</p>}
        </header>
        <div className="rd-section-body">{children}</div>
      </div>
    </section>
  );
}

function DetailRow({
  number,
  title,
  description,
  examples,
}: {
  number: string;
  title: string;
  description: string;
  examples: string[];
}) {
  return (
    <article className="rd-grid rd-detail-row">
      <span className="rd-row-no">{number}</span>
      <div className="rd-detail-title">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <ul className="rd-example-list">
        {examples.map((example) => <li key={example}>{example}</li>)}
      </ul>
    </article>
  );
}

function NumberedLayers({ labels, dark = false }: { labels: string[]; dark?: boolean }) {
  return (
    <ol className={`rd-grid rd-layers${dark ? ' rd-layers-dark' : ''}`} role="list" aria-label={dark ? 'Connected system layers, from business through operations, software, data and infrastructure to security' : 'Business system layers, from people and processes through software, data and integrations to infrastructure'}>
      {labels.map((label, index) => (
        <li className="rd-grid rd-layer-row" key={label}>
          <span className="rd-row-no">{String(index + 1).padStart(2, '0')}</span>
          <span className="rd-layer-label">{label}</span>
        </li>
      ))}
    </ol>
  );
}

export function Document() {
  return (
    <main className="inner-page rosalogic-solutions rd-page">
      <header className="rd-hero rd-tone-paper">
        <div className="rd-wrap">
          <div className="rd-grid rd-hero-meta">
            <span className="rd-index"><span>01</span><span>SOLUTIONS</span></span>
            <span className="rd-brandline">ROSALOGIC / BUSINESS SYSTEMS &amp; TECHNOLOGY</span>
            <span className="rd-document-mark">SYSTEMS, ENGINEERED.</span>
          </div>
          <div className="rd-grid rd-hero-main">
            <h1 tabIndex={-1}>Built around<br /><em>your operation.</em></h1>
            <div className="rd-hero-copy">
              <p>Your business has processes, people, assets, data, and systems that need to work together. ROSALOGIC designs and builds the technology around those realities—not around a generic software template.</p>
              <p className="rd-hero-principle">The goal isn't more technology.<br /><strong>It's a better-running operation.</strong></p>
            </div>
          </div>
          <div className="rd-hero-foot rd-grid">
            <span>ENGINEERING SCOPE</span>
            <span>SOFTWARE</span><span>DATA</span><span>INFRASTRUCTURE</span>
            <span className="rd-page-count">01 — 10</span>
          </div>
        </div>
      </header>

      <Section
        number="02"
        label="THE SYSTEM"
        title={<>The system is more than<br /><em>the software.</em></>}
        intro="A business system is the combination of software, processes, information, integrations, and infrastructure that allows an organization to operate."
      >
        <div className="rd-grid rd-definition">
          <p className="rd-side-note">BUSINESS SYSTEM<br />A CONNECTED WHOLE</p>
          <NumberedLayers labels={layers} />
          <p className="rd-definition-copy">ROSALOGIC works across these layers when the problem requires it. Sometimes that means building a new application. Sometimes it means connecting systems that already exist. Sometimes the right answer is improving the infrastructure underneath them.</p>
        </div>
      </Section>

      <Section
        number="03"
        label="SOFTWARE SYSTEMS"
        title={<>Software shaped around<br /><em>the way work actually happens.</em></>}
        intro={<>Off-the-shelf software is useful when your processes fit the product. When they don't, teams often compensate with spreadsheets, manual workarounds, disconnected tools, and repetitive data entry.<br /><br />ROSALOGIC builds purpose-specific applications around your actual workflows, users, assets, and decisions.</>}
        tone="white"
      >
        <div className="rd-row-list">
          {softwareAreas.map((area) => (
            <DetailRow key={area.no} number={area.no} title={area.title} description={area.description} examples={area.examples} />
          ))}
        </div>
      </Section>

      <Section
        number="04"
        label="DATA & INTEGRATION"
        title={<>Make systems communicate.<br /><em>Make information useful.</em></>}
        intro="Businesses rarely operate on one system. Accounting, CRM, ERP, production, inventory, spreadsheets, customer portals, and external services all contain pieces of the organization's information."
      >
        <div className="rd-grid rd-integration-flow" aria-label="Example information flow">
          <span className="rd-side-note">EXAMPLE<br />INFORMATION FLOW</span>
          <div className="rd-flow-list">
            {['CRM', 'ERP', 'ACCOUNTING', 'INVENTORY', 'CUSTOM SOFTWARE'].map((system, index) => (
              <div className="rd-flow-item" key={system}>
                <span>{String(index + 1).padStart(2, '0')}</span>{system}
              </div>
            ))}
          </div>
          <p className="rd-flow-note">Shared information across systems; connected through deliberate integration.</p>
        </div>
        <div className="rd-row-list rd-integration-services">
          {integrationAreas.map((area) => (
            <DetailRow key={area.no} number={area.no} title={area.title} description={area.lead} examples={area.examples} />
          ))}
        </div>
      </Section>

      <Section
        number="05"
        label="INFRASTRUCTURE & SECURITY"
        title={<>The foundation<br /><em>behind the system.</em></>}
        intro="Software is only useful when the environment supporting it is reliable, secure, and maintainable."
        tone="white"
      >
        <div className="rd-row-list">
          {infrastructure.map((area) => (
            <DetailRow key={area.no} number={area.no} title={area.title} description="" examples={area.items} />
          ))}
        </div>
        <p className="rd-principle"><span>ENGINEERING PRINCIPLE</span><strong>We work with the infrastructure you already have when appropriate.</strong></p>
      </Section>

      <Section
        number="06"
        label="CONNECTED SYSTEMS"
        title={<>One system.<br /><em>Multiple layers.</em></>}
        intro="A business system is a set of relationships across organizational and technical layers."
        tone="navy"
      >
        <div className="rd-grid rd-connected">
          <NumberedLayers labels={connectedLayers} dark />
          <div className="rd-connected-copy">
            <p>A new application may require new infrastructure. A reporting problem may actually be an integration problem. An automation opportunity may require changes to the underlying workflow.</p>
            <p>That's why ROSALOGIC does not treat software, data, and infrastructure as isolated services.</p>
          </div>
        </div>
      </Section>

      <Section
        number="07"
        label="WHAT THIS CAN LOOK LIKE"
        title={<>Systems designed for<br /><em>real operations.</em></>}
        intro="Illustrative system relationships—not client examples or claims of prior work."
      >
        <div className="rd-row-list rd-industry-list">
          {industries.map((item) => (
            <article className="rd-grid rd-industry-row" key={item.no}>
              <div className="rd-industry-meta"><span>{item.no} / 04</span><span>{item.industry}</span></div>
              <div className="rd-industry-description">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <ol className="rd-relationship-list">
                {item.relationships.map((relationship, index) => (
                  <li key={relationship}><span>{String(index + 1).padStart(2, '0')}</span>{relationship}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </Section>

      <Section
        number="08"
        label="FROM PROBLEM TO SYSTEM"
        title={<>Not sure what you need?<br /><em>Start with the problem.</em></>}
        intro="You don't need to arrive with a technical specification. If you know the business problem, we can help define the system around it."
        tone="white"
      >
        <ol className="rd-row-list rd-process-list">
          {process.map(([number, title, copy]) => (
            <li className="rd-grid rd-process-row" key={number}>
              <span className="rd-row-no">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        number="09"
        label="WAYS TO WORK TOGETHER"
        title={<>Engage us where<br /><em>the problem is.</em></>}
        intro="A focused improvement or integration can be the right place to begin. A new system is only one kind of engagement."
      >
        <div className="rd-row-list rd-engagement-list">
          {engagements.map(([number, title, copy]) => (
            <article className="rd-grid rd-engagement-row" key={title}>
              <span className="rd-row-no">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="rd-cta rd-tone-navy" aria-labelledby="rd-cta-heading">
        <div className="rd-wrap">
          <div className="rd-grid rd-cta-head">
            <span className="rd-index"><span>10</span><span>START A CONVERSATION</span></span>
            <h2 id="rd-cta-heading">Where could your<br /><em>operation work better?</em></h2>
            <p>Tell us what's slowing your business down. Start with the operational problem you are considering.</p>
          </div>
          <div className="rd-grid rd-cta-actions">
            <span className="rd-side-note">ROSALOGIC / BUSINESS SYSTEMS &amp; TECHNOLOGY</span>
            <a href="/contact">Start a Conversation <span aria-hidden="true">→</span></a>
            <a href="/industries">Explore Industries <span aria-hidden="true">→</span></a>
          </div>
          <div className="rd-grid rd-footer-line">
            <span>SYSTEMS, ENGINEERED.</span><span>ROSALOGIC</span><span>10 / 10</span>
          </div>
        </div>
      </section>
    </main>
  );
}