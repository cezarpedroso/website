import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import './_group.css';
import './Redesign.css';

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
    no: 'A',
    title: 'System Integration',
    lead: 'Connect the systems that already run the business.',
    examples: ['REST APIs', 'Webhooks', 'Third-party APIs', 'Database integration', 'ETL / ELT', 'Event-driven workflows', 'System synchronization'],
  },
  {
    no: 'B',
    title: 'Reporting & Business Intelligence',
    lead: 'Turn operational data into information people can actually use.',
    examples: ['Management dashboards', 'Operational reporting', 'KPIs', 'Data visualization', 'Automated reports', 'Business intelligence'],
  },
  {
    no: 'C',
    title: 'Automation',
    lead: 'Reduce repetitive work by allowing systems to handle predictable processes.',
    examples: ['Data synchronization', 'Notifications', 'Document generation', 'Scheduled processes', 'Approval workflows', 'Automated imports and exports'],
  },
];

const infrastructure = [
  { title: 'Cloud & Infrastructure', items: ['AWS', 'Azure', 'On-premise environments', 'Networking', 'Databases', 'Containers', 'Compute', 'Storage'] },
  { title: 'DevOps & Delivery', items: ['CI/CD', 'Deployment automation', 'Environment management', 'Monitoring', 'Logging', 'Backups'] },
  { title: 'Security', items: ['Identity & access management', 'Secure architecture', 'Secrets management', 'Network security', 'Security monitoring', 'Backup & recovery'] },
];

const industries = [
  {
    no: '01',
    industry: 'MANUFACTURING',
    title: 'Production + Maintenance + Inventory',
    description: 'A production company needs better visibility into equipment, maintenance, parts, and production activity.',
    chain: ['Production', 'Equipment', 'Maintenance', 'Parts Inventory', 'Operational Data', 'Management Dashboard'],
  },
  {
    no: '02',
    industry: 'AGRICULTURE',
    title: 'Operations + Assets + Field Data',
    description: 'Connect equipment, field operations, inventory, work orders, and operational reporting.',
    chain: ['Equipment', 'Field Operations', 'Inventory', 'Work Orders', 'Operational Reporting'],
  },
  {
    no: '03',
    industry: 'LOGISTICS & TRANSPORTATION',
    title: 'Fleet + Dispatch + Customers + Data',
    description: 'Connect vehicles, drivers, scheduling, customers, maintenance, and operational information.',
    chain: ['Vehicles', 'Drivers', 'Scheduling', 'Customers', 'Maintenance', 'Operational Information'],
  },
  {
    no: '04',
    industry: 'PROFESSIONAL SERVICES',
    title: 'CRM + Projects + Documents + Billing',
    description: 'Connect customer relationships, projects, work, documents, and business information.',
    chain: ['Relationships', 'Projects', 'Work', 'Documents', 'Billing'],
  },
];

const engagementSteps = [
  ['01', 'UNDERSTAND', 'We learn how the operation works and where the friction exists.'],
  ['02', 'DEFINE', 'We identify requirements, constraints, integrations, and priorities.'],
  ['03', 'ARCHITECT', 'We design the technical and operational solution.'],
  ['04', 'BUILD', 'We develop, test, and integrate the system.'],
  ['05', 'DEPLOY', 'We put the system into its production environment.'],
  ['06', 'OPERATE', 'We can continue supporting, maintaining, and improving the system.'],
];

const engagements = [
  ['BUILD', 'Design and development of a new business or operational system.'],
  ['IMPROVE', 'Modernize, extend, or replace an existing system.'],
  ['CONNECT', 'Integrate existing applications and data.'],
  ['OPERATE', 'Maintain, monitor, secure, and continuously improve critical systems.'],
];

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return <p className={`rs-eyebrow${light ? ' rs-eyebrow-light' : ''}`}>{children}</p>;
}

function LayerStack({ dark = false }: { dark?: boolean }) {
  const labels = dark
    ? ['BUSINESS', 'OPERATIONS + USERS', 'SOFTWARE SYSTEMS', 'DATA + INTEGRATIONS', 'INFRASTRUCTURE', 'SECURITY']
    : ['PEOPLE', 'PROCESSES', 'SOFTWARE', 'DATA', 'INTEGRATIONS', 'INFRASTRUCTURE'];
  return (
    <ol className={`rs-layer-stack${dark ? ' rs-layer-stack-dark' : ''}`} role="list" aria-label={dark ? 'Connected system layers, from business and users through software and infrastructure to security' : 'Business system layers, from people and processes through software and data to infrastructure'}>
      {labels.map((label, index) => (
        <li key={label}>
          <span className="rs-layer-index">{String(index + 1).padStart(2, '0')}</span>
          <span>{label}</span>
          {index < labels.length - 1 && <span className="rs-layer-drop" aria-hidden="true">↓</span>}
        </li>
      ))}
    </ol>
  );
}

export function Redesign() {
  return (
    <main className="inner-page rosalogic-solutions rs-page">
      <section className="rs-hero">
        <div className="container-wide rs-hero-grid">
          <div className="rs-hero-copy">
            <Eyebrow>01 / SOLUTIONS</Eyebrow>
            <h1 className="display-heading rs-hero-title">Built around<br /><em>your operation.</em></h1>
            <p className="rs-hero-description">Your business has processes, people, assets, data, and systems that need to work together. ROSALOGIC designs and builds the technology around those realities—not around a generic software template.</p>
            <p className="rs-hero-point">The goal isn't more technology.<br /><strong>It's a better-running operation.</strong></p>
          </div>
          <figure className="rs-hero-figure" role="img" aria-label="The operation at the center, connected with people, processes, information, and systems">
            <div className="rs-figure-top"><span>ROSALOGIC / SYSTEMS, ENGINEERED.</span><span>FIG. 01</span></div>
            <div className="rs-orbit rs-orbit-outer" />
            <div className="rs-orbit rs-orbit-inner" />
            <div className="rs-figure-core"><span>THE</span><b>OPERATION</b></div>
            <span className="rs-figure-node rs-node-a">PEOPLE</span>
            <span className="rs-figure-node rs-node-b">PROCESS</span>
            <span className="rs-figure-node rs-node-c">SYSTEMS</span>
            <span className="rs-figure-node rs-node-d">INFORMATION</span>
            <div className="rs-figure-bottom"><span>BUSINESS SYSTEMS &amp; TECHNOLOGY</span><span>BUILT AROUND THE WORK</span></div>
          </figure>
        </div>
        <div className="container-wide rs-hero-footer"><span>BUSINESS SYSTEMS &amp; TECHNOLOGY</span><span>ENGINEERED FOR THE OPERATION <ArrowDown size={14} /></span></div>
      </section>

      <section className="rs-definition">
        <div className="container-wide">
          <div className="rs-section-head rs-definition-head">
            <Eyebrow>02 / THE SYSTEM</Eyebrow>
            <h2 className="ip-serif-heading">The system is more than<br /><em>the software.</em></h2>
            <p>A business system is the combination of software, processes, information, integrations, and infrastructure that allows an organization to operate.</p>
          </div>
          <div className="rs-definition-body">
            <div className="rs-diagram-caption"><span>01—06</span><p>One operating architecture.<br />Multiple connected layers.</p></div>
            <LayerStack />
            <div className="rs-definition-note">
              <span className="rs-note-mark">↳</span>
              <p>ROSALOGIC works across these layers when the problem requires it. Sometimes that means building a new application. Sometimes it means connecting systems that already exist. Sometimes the right answer is improving the infrastructure underneath them.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-software">
        <div className="container-wide">
          <div className="rs-software-intro">
            <Eyebrow>03 / SOFTWARE SYSTEMS</Eyebrow>
            <h2 className="display-heading">Software shaped around<br /><em>the way work actually happens.</em></h2>
            <div className="rs-intro-copy">
              <p>Off-the-shelf software is useful when your processes fit the product. When they don't, teams often compensate with spreadsheets, manual workarounds, disconnected tools, and repetitive data entry.</p>
              <p>ROSALOGIC builds purpose-specific applications around your actual workflows, users, assets, and decisions.</p>
            </div>
          </div>
          <div className="rs-software-list">
            {softwareAreas.map((area) => (
              <article className="rs-software-row" key={area.no}>
                <div className="rs-row-number"><span>{area.no}</span><i /></div>
                <div className="rs-row-title"><h3>{area.title}</h3><p>{area.description}</p></div>
                <ul className="rs-example-list">{area.examples.map((example) => <li key={example}>{example}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-integration">
        <div className="container-wide">
          <div className="rs-section-head rs-integration-head">
            <Eyebrow>04 / DATA &amp; INTEGRATION</Eyebrow>
            <h2 className="ip-serif-heading">Make systems communicate.<br /><em>Make information useful.</em></h2>
            <p>Businesses rarely operate on one system. Accounting, CRM, ERP, production, inventory, spreadsheets, customer portals, and external services all contain pieces of the organization's information.</p>
          </div>
          <div className="rs-integration-layout">
            <figure className="rs-system-rail" aria-label="Example information flow: CRM to ERP to accounting to inventory to custom software">
              <span className="rs-rail-label">A CONNECTED INFORMATION FLOW</span>
              {['CRM', 'ERP', 'ACCOUNTING', 'INVENTORY', 'CUSTOM SOFTWARE'].map((system, index) => (
                <div className="rs-rail-item" key={system}><span className="rs-rail-dot">{String(index + 1).padStart(2, '0')}</span><b>{system}</b>{index < 4 && <span className="rs-rail-arrow">→</span>}</div>
              ))}
              <p>Shared data. Clear handoffs. Fewer isolated systems.</p>
            </figure>
            <div className="rs-integration-services">
              {integrationAreas.map((area) => (
                <article className="rs-integration-row" key={area.no}>
                  <span className="rs-integration-index">{area.no}</span>
                  <div><h3>{area.title}</h3><p>{area.lead}</p><ul className="rs-inline-list">{area.examples.map((example) => <li key={example}>{example}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rs-foundation">
        <div className="container-wide">
          <div className="rs-foundation-top">
            <div><Eyebrow>05 / INFRASTRUCTURE &amp; SECURITY</Eyebrow><h2 className="ip-serif-heading">The foundation<br /><em>behind the system.</em></h2></div>
            <p>Software is only useful when the environment supporting it is reliable, secure, and maintainable.</p>
          </div>
          <div className="rs-foundation-grid">
            {infrastructure.map((area, index) => (
              <article className="rs-foundation-column" key={area.title}>
                <div className="rs-foundation-column-head"><span>0{index + 1}</span><h3>{area.title}</h3></div>
                <ul>{area.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <p className="rs-foundation-principle"><span>ENGINEERING PRINCIPLE</span>We work with the infrastructure you already have when appropriate.</p>
        </div>
      </section>

      <section className="rs-connected">
        <div className="container-wide">
          <div className="rs-connected-heading"><Eyebrow light>06 / CONNECTED SYSTEMS</Eyebrow><h2 className="display-heading">One system.<br /><em>Multiple layers.</em></h2><span className="rs-connected-index">SYSTEM<br />ARCHITECTURE / 01</span></div>
          <div className="rs-connected-architecture">
            <LayerStack dark />
            <div className="rs-architecture-side">
              <span className="rs-side-label">A SYSTEM IS A SET OF RELATIONSHIPS</span>
              <p>A new application may require new infrastructure. A reporting problem may actually be an integration problem. An automation opportunity may require changes to the underlying workflow.</p>
              <p>That's why ROSALOGIC does not treat software, data, and infrastructure as isolated services.</p>
              <div className="rs-side-key"><span><i /> OPERATIONAL LAYER</span><span><i /> TECHNICAL LAYER</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-examples">
        <div className="container-wide">
          <div className="rs-examples-heading">
            <div><Eyebrow>07 / WHAT THIS CAN LOOK LIKE</Eyebrow><h2 className="ip-serif-heading">Systems designed for<br /><em>real operations.</em></h2></div>
            <p>Illustrative system relationships—not client examples or claims of prior work.</p>
          </div>
          <div className="rs-industry-list">
            {industries.map((item) => (
              <article className="rs-industry-row" key={item.no}>
                <div className="rs-industry-meta"><span>{item.no} / 04</span><span>{item.industry}</span></div>
                <div className="rs-industry-detail"><h3>{item.title}</h3><p>{item.description}</p></div>
                <div className="rs-industry-chain" role="img" aria-label={`${item.industry} system relationships, in sequence: ${item.chain.join(' to ')}`}>
                  {item.chain.map((step, index) => <div className="rs-chain-node" key={step}><span>{String(index + 1).padStart(2, '0')}</span><b>{step}</b>{index < item.chain.length - 1 && <i aria-hidden="true">→</i>}</div>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-process">
        <div className="container-wide">
          <div className="rs-process-head">
            <div><Eyebrow>08 / FROM PROBLEM TO SYSTEM</Eyebrow><h2 className="display-heading">Not sure what you need?<br /><em>Start with the problem.</em></h2></div>
            <p>You don't need to arrive with a technical specification. If you know the business problem, we can help define the system around it.</p>
          </div>
          <ol className="rs-process-track">
            {engagementSteps.map(([number, title, copy]) => <li key={number}><span className="rs-process-num">{number}</span><span className="rs-process-node" /><h3>{title}</h3><p>{copy}</p></li>)}
          </ol>
          <div className="rs-process-foot"><span>DISCOVERY → DEFINITION → DELIVERY → CONTINUITY</span><span>ONE DELIBERATE STEP AT A TIME</span></div>
        </div>
      </section>

      <section className="rs-engagement">
        <div className="container-wide">
          <div className="rs-engagement-head"><Eyebrow>09 / WAYS TO WORK TOGETHER</Eyebrow><h2 className="ip-serif-heading">Engage us where<br /><em>the problem is.</em></h2></div>
          <div className="rs-engagement-list">
            {engagements.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={18} aria-hidden="true" /></article>)}
          </div>
          <p className="rs-engagement-note">A focused improvement or integration can be the right place to begin. A new system is only one kind of engagement.</p>
        </div>
      </section>

      <section className="rs-cta">
        <div className="container-wide rs-cta-grid">
          <div><Eyebrow light>09 / START A CONVERSATION</Eyebrow><h2 className="display-heading">Where could your<br /><em>operation work better?</em></h2></div>
          <div className="rs-cta-action">
            <p>Tell us what's slowing your business down. We'll help understand the problem, determine what technology can improve it, and define a practical path forward.</p>
            <div className="rs-cta-links">
              <a className="rs-primary-link" href="/contact">Start a Conversation <ArrowRight size={17} aria-hidden="true" /></a>
              <a className="rs-secondary-link" href="/industries">Explore Industries <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="container-wide rs-cta-footer"><span>ROSALOGIC / BUSINESS SYSTEMS &amp; TECHNOLOGY</span><span>SYSTEMS, ENGINEERED.</span></div>
      </section>
    </main>
  );
}