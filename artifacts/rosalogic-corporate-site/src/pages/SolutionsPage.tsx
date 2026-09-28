import { Link } from 'wouter';
import { ArrowUpRight, Cloud, Database, Link2, PanelsTopLeft, Workflow, UsersRound } from 'lucide-react';
import siloImage from '../assets/solutions-silos.jpg';
import architectureImage from '../assets/solutions-architecture.jpg';
import './solutions-page.css';

const layers = [
  { name: 'People', copy: 'The people who use, manage and maintain the system.', icon: UsersRound },
  { name: 'Processes', copy: 'The workflows and rules that keep the operation moving.', icon: Workflow },
  { name: 'Software', copy: 'The applications that turn work into action.', icon: PanelsTopLeft },
  { name: 'Data', copy: 'The information that creates visibility and insight.', icon: Database },
  { name: 'Integrations', copy: 'The connections between systems and external services.', icon: Link2 },
  { name: 'Infrastructure', copy: 'The environment that keeps everything running reliably.', icon: Cloud },
];

const softwareAreas = [
  { no: '01', title: 'Operations & Workflow', copy: 'Systems for managing the processes that keep an organization moving.', items: ['Workflow management', 'Work orders', 'Approvals', 'Scheduling', 'Inventory', 'Procurement', 'Internal portals', 'Field operations'] },
  { no: '02', title: 'Customer & Relationship Systems', copy: 'Applications for managing customers and the processes surrounding them.', items: ['CRM', 'Customer portals', 'Sales workflows', 'Service management', 'Account management', 'Quoting & proposals'] },
  { no: '03', title: 'Asset & Maintenance Systems', copy: 'Systems for organizations managing physical assets, equipment, and maintenance.', items: ['EAM / CMMS', 'Asset registers', 'Preventive maintenance', 'Inspections', 'Work orders', 'Parts & inventory', 'Equipment history'] },
  { no: '04', title: 'Purpose-Built Applications', copy: 'When an existing product doesn’t adequately support the operation, we design and build the system around it.', items: ['Internal business platforms', 'Management portals', 'Operational dashboards', 'Industry-specific applications', 'Specialized workflows'] },
];

const integrationAreas = [
  { title: 'System Integration', copy: 'Connect the systems that already run the business.', items: ['REST APIs', 'Webhooks', 'Third-party APIs', 'Database integration', 'ETL / ELT', 'Event-driven workflows', 'System synchronization'] },
  { title: 'Reporting & Business Intelligence', copy: 'Turn operational data into information people can actually use.', items: ['Management dashboards', 'Operational reporting', 'KPIs', 'Data visualization', 'Automated reports', 'Business intelligence'] },
  { title: 'Automation', copy: 'Reduce repetitive work by allowing systems to handle predictable processes.', items: ['Data synchronization', 'Notifications', 'Document generation', 'Scheduled processes', 'Approval workflows', 'Automated imports/exports'] },
];

const infrastructure = [
  { title: 'Cloud & Infrastructure', items: ['AWS / Azure', 'On-premise environments', 'Networking', 'Databases', 'Containers', 'Compute', 'Storage'] },
  { title: 'DevOps & Delivery', items: ['CI/CD', 'Deployment automation', 'Environment management', 'Monitoring', 'Logging', 'Backups'] },
  { title: 'Security', items: ['Identity & access management', 'Secure architecture', 'Secrets management', 'Network security', 'Security monitoring', 'Backup & recovery'] },
];

const industries = [
  { title: 'Manufacturing', copy: 'Production, maintenance, inventory, and quality systems.', detail: 'Agriculture · Food production · Industrial equipment' },
  { title: 'Agriculture', copy: 'Connect operations, assets, people, and information across the field.', detail: 'Operations · Field services · Asset management' },
  { title: 'Logistics & Transportation', copy: 'Flow of materials, information, and work across operations.', detail: 'Fleet · Dispatch · Customer systems' },
  { title: 'Professional Services', copy: 'Systems that make delivery, knowledge, and relationships work together.', detail: 'CRM · Projects · Documents' },
];

const process = [
  { no: '01', title: 'Understand', copy: 'We learn how the operation works and where friction exists.' },
  { no: '02', title: 'Define', copy: 'We identify requirements, constraints, integrations, and priorities.' },
  { no: '03', title: 'Architect', copy: 'We design the technical and operational solution.' },
  { no: '04', title: 'Build', copy: 'We develop, test, and integrate the system.' },
  { no: '05', title: 'Deploy', copy: 'We put the system into its production environment.' },
  { no: '06', title: 'Operate', copy: 'We support, maintain, secure, and improve the system.' },
];

const engagements = [
  { title: 'Build', copy: 'Design and development of a new business or operational system.' },
  { title: 'Improve', copy: 'Modernize, extend, or replace an existing system.' },
  { title: 'Connect', copy: 'Integrate existing applications and data.' },
  { title: 'Operate', copy: 'Maintain, monitor, secure, and continuously improve critical systems.' },
];

function Eyebrow({ number, children }: { number: string; children: string }) {
  return <p className="rs-eyebrow"><span>{number}</span><span className="rs-eyebrow-slash">/</span>{children}</p>;
}

function ItemList({ items }: { items: string[] }) {
  return <ul className="rs-item-list">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

function SolutionsContent() {
  return (
    <div className="inner-page rosalogic-solutions rs-page">
      <header className="rs-hero">
        <div className="rs-wrap rs-hero-grid">
          <div className="rs-hero-text">
            <Eyebrow number="01">Solutions</Eyebrow>
            <h1>Built around<br /><span>your operation.</span></h1>
            <p>Your business has processes, people, assets, data and systems that need to work together. ROSALOGIC designs and builds the technology around those realities—not around a generic software template.</p>
            <p className="rs-hero-closing">The goal isn’t more technology. It’s a better-running operation.</p>
          </div>
          <figure className="rs-hero-photo"><img src={siloImage} alt="Steel grain silos at an agricultural processing facility beneath a pale sky" /></figure>
          <div className="rs-hero-aside" aria-label="Solution layers"><span>Software</span><span>Data</span><span>Infrastructure</span></div>
        </div>
      </header>

      <div className="rs-content">
        <section className="rs-section rs-system" aria-labelledby="rs-system-title">
          <div className="rs-wrap rs-system-grid">
            <div className="rs-lead">
              <Eyebrow number="02">The system</Eyebrow>
              <h2 id="rs-system-title">The system is more than<br />the software.</h2>
              <p>A business system is the combination of software, processes, information, integrations and infrastructure that allows an organization to operate.</p>
              <p>ROSALOGIC works across these layers when the problem requires it. Sometimes that means building a new application. Sometimes it means connecting systems that already exist. Sometimes the right answer is improving the infrastructure underneath them.</p>
            </div>
            <div className="rs-layer-list" aria-label="Six layers of a business system">
              {layers.map(({ name, copy, icon: Icon }) => <div className="rs-layer" key={name}><div className="rs-layer-name"><Icon size={15} strokeWidth={1.4} aria-hidden="true" /><strong>{name}</strong></div><p>{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="rs-section rs-software" aria-labelledby="rs-software-title">
          <div className="rs-wrap rs-section-split">
            <div className="rs-lead">
              <Eyebrow number="03">Software systems</Eyebrow>
              <h2 id="rs-software-title">Software shaped around<br />the way work actually happens.</h2>
              <p>Off-the-shelf software is useful when your processes fit the product. When they don’t, teams often compensate with spreadsheets, manual workarounds, disconnected tools and repetitive data entry.</p>
              <p>ROSALOGIC builds purpose-specific applications around your actual workflows, users, assets and decisions.</p>
            </div>
            <div className="rs-columns rs-four-columns">
              {softwareAreas.map(area => <article className="rs-column" key={area.no}><span className="rs-column-no">{area.no}</span><h3>{area.title}</h3><p>{area.copy}</p><ItemList items={area.items} /></article>)}
            </div>
          </div>
        </section>

        <section className="rs-section rs-integration" aria-labelledby="rs-integration-title">
          <div className="rs-wrap rs-section-split">
            <div className="rs-lead">
              <Eyebrow number="04">Data & integration</Eyebrow>
              <h2 id="rs-integration-title">Make systems communicate.<br />Make information useful.</h2>
              <p>Businesses rarely operate on one system. Accounting, CRM, ERP, production, inventory, spreadsheets, customer portals and external services all contain pieces of the organization’s information.</p>
            </div>
            <div className="rs-columns rs-three-columns">
              {integrationAreas.map(area => <article className="rs-column" key={area.title}><h3>{area.title}</h3><p>{area.copy}</p><ItemList items={area.items} /></article>)}
            </div>
          </div>
        </section>

        <section className="rs-section rs-infrastructure" aria-labelledby="rs-infrastructure-title">
          <div className="rs-wrap rs-section-split">
            <div className="rs-lead">
              <Eyebrow number="05">Infrastructure & security</Eyebrow>
              <h2 id="rs-infrastructure-title">The foundation<br />behind the system.</h2>
              <p>Software is only useful when the environment supporting it is reliable, secure and maintainable.</p>
              <p className="rs-small-note">We work with the infrastructure you already have when appropriate.</p>
            </div>
            <div className="rs-columns rs-three-columns">
              {infrastructure.map(area => <article className="rs-column" key={area.title}><h3>{area.title}</h3><ItemList items={area.items} /></article>)}
            </div>
          </div>
        </section>

        <section className="rs-connected" aria-labelledby="rs-connected-title">
          <div className="rs-wrap rs-connected-grid">
            <div className="rs-connected-copy"><Eyebrow number="06">Connected systems</Eyebrow><h2 id="rs-connected-title">One system.<br />Multiple layers.</h2><p>A new application may require new infrastructure.<br />A reporting problem may actually be an integration problem.<br />An automation opportunity may require changes to the underlying workflow.</p><p>That’s why ROSALOGIC does not treat software, data and infrastructure as isolated services.</p></div>
            <div className="rs-connected-diagram" aria-label="Business system stack"><span className="rs-diagram-side">Business<br />Operations<br />Users</span><div className="rs-stack"><span>Business</span><span>Operations + Users</span><span>Software Systems</span><span>Data + Integrations</span><span>Infrastructure</span><span>Security</span></div></div>
            <img className="rs-connected-image" src={architectureImage} alt="Angular concrete and glass architecture against a blue sky" loading="lazy" />
          </div>
        </section>

        <section className="rs-section rs-industries" aria-labelledby="rs-industries-title">
          <div className="rs-wrap rs-section-split">
            <div className="rs-lead"><Eyebrow number="07">Where this can live</Eyebrow><h2 id="rs-industries-title">Systems designed for<br />real operations.</h2></div>
            <div className="rs-columns rs-four-columns">
              {industries.map(area => <article className="rs-column" key={area.title}><h3>{area.title}</h3><p>{area.copy}</p><p className="rs-industry-detail">{area.detail}</p></article>)}
            </div>
          </div>
        </section>

        <section className="rs-section rs-process" aria-labelledby="rs-process-title">
          <div className="rs-wrap rs-section-split">
            <div className="rs-lead"><Eyebrow number="08">From problem to system</Eyebrow><h2 id="rs-process-title">Not sure what you need?<br />Start with the problem.</h2><p>You do not need to arrive with a technical specification. We can help define the work from the operational challenge.</p></div>
            <ol className="rs-process-steps">{process.map(step => <li key={step.no}><span>{step.no}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
          </div>
        </section>

        <section className="rs-section rs-engagement" aria-labelledby="rs-engagement-title">
          <div className="rs-wrap rs-section-split">
            <div className="rs-lead"><Eyebrow number="09">Ways of engagement</Eyebrow><h2 id="rs-engagement-title">Engage us where the problem is.</h2></div>
            <div className="rs-columns rs-four-columns">{engagements.map(area => <article className="rs-column" key={area.title}><h3>{area.title}</h3><p>{area.copy}</p></article>)}</div>
          </div>
        </section>

        <section className="rs-cta" aria-labelledby="rs-cta-title">
          <div className="rs-wrap rs-cta-grid">
            <div><Eyebrow number="10">Let’s talk</Eyebrow><h2 id="rs-cta-title">Where could your<br />operation work better?</h2></div>
            <p>Tell us what’s slowing your business down. We’ll help you understand the options, determine what technology can improve it, and define a practical path forward.</p>
            <nav aria-label="Next steps"><Link href="/contact" data-testid="link-solutions-contact" className="rs-cta-primary">Start a Conversation <ArrowUpRight size={14} aria-hidden="true" /></Link><Link href="/industries" data-testid="link-solutions-industries" className="rs-cta-secondary">Explore Industries <ArrowUpRight size={14} aria-hidden="true" /></Link></nav>
          </div>
        </section>
      </div>
    </div>
  );
}

export function SolutionsPage() { return <SolutionsContent />; }