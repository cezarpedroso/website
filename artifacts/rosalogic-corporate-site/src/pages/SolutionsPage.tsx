import { Link } from 'wouter';
import { ArrowUpRight, Cloud, Database, Link2, PanelsTopLeft, Workflow, UsersRound } from 'lucide-react';
import siloImage from '../assets/solutions-silos.jpg';
import architectureImage from '../assets/solutions-architecture.jpg';
import './solutions-page.css';

const layers = [
  { name: 'People', copy: 'The people who use, manage, and maintain the system.', icon: UsersRound },
  { name: 'Processes', copy: 'The workflows and rules that keep the operation moving.', icon: Workflow },
  { name: 'Software', copy: 'The applications that turn work into action.', icon: PanelsTopLeft },
  { name: 'Data', copy: 'The information that creates visibility and supports decisions.', icon: Database },
  { name: 'Integrations', copy: 'The connections between the systems and services the business already uses.', icon: Link2 },
  { name: 'Infrastructure', copy: 'The technology environment that keeps the system running reliably.', icon: Cloud },
];

const softwareAreas = [
  { no: '01', title: 'Operations & Workflow', copy: 'Custom software for the processes that keep an operation moving.', items: ['Workflow management', 'Work orders', 'Approvals', 'Scheduling', 'Inventory', 'Procurement', 'Internal portals', 'Field operations'] },
  { no: '02', title: 'Customer & Relationship Systems', copy: 'Applications for managing customer relationships and the work surrounding them.', items: ['CRM', 'Customer portals', 'Sales workflows', 'Service management', 'Account management', 'Quoting & proposals'] },
  { no: '03', title: 'Asset & Maintenance Systems', copy: 'Systems for organizations managing physical assets, equipment, and maintenance.', items: ['EAM / CMMS', 'Asset registers', 'Preventive maintenance', 'Inspections', 'Work orders', 'Parts & inventory', 'Equipment history'] },
  { no: '04', title: 'Purpose-Built Applications', copy: 'When existing tools don’t adequately support the work, we build a business application around the operation.', items: ['Internal business platforms', 'Management portals', 'Operational dashboards', 'Custom internal tools', 'Specialized workflows'] },
];

const integrationAreas = [
  { title: 'System Integration', copy: 'Connect existing tools to the business software we build.', items: ['REST APIs', 'Third-party API integration', 'Webhooks', 'Database integration', 'System synchronization', 'Data imports / exports'] },
  { title: 'Operational Reporting', copy: 'Make operational information easier to understand and use.', items: ['Operational reports', 'Management dashboards', 'KPIs', 'Automated reports', 'Data visualization'] },
  { title: 'Workflow Automation', copy: 'Automate predictable steps inside the systems we build and connect.', items: ['Data synchronization', 'Notifications', 'Document generation', 'Scheduled workflows', 'Approval workflows', 'Automated imports/exports'] },
];

const infrastructure = [
  { title: 'Hosting & Environments', items: ['AWS / Azure', 'On-premise deployment', 'Databases', 'Containers', 'Application hosting', 'Environment configuration'] },
  { title: 'Deployment & Support', items: ['CI/CD', 'Deployment automation', 'Environment management', 'Application monitoring', 'Logging', 'Backups', 'Maintenance', 'Updates'] },
  { title: 'Security & Access', items: ['Application security', 'Identity & access', 'Secrets management', 'Secure architecture', 'Security hardening'] },
];

const industries = [
  { title: 'Manufacturing', copy: 'Software for production, maintenance, inventory, quality, and operational workflows.', detail: 'Production · Maintenance · Inventory' },
  { title: 'Agriculture', copy: 'Tools for coordinating field work, equipment, inventory, and operational information.', detail: 'Operations · Field services · Asset management' },
  { title: 'Logistics & Transportation', copy: 'Systems for dispatch, fleet work, scheduling, and customer workflows.', detail: 'Fleet · Dispatch · Customer systems' },
  { title: 'Professional Services', copy: 'Business tools for projects, client relationships, documents, and service delivery.', detail: 'CRM · Projects · Documents' },
];

const process = [
  { no: '01', title: 'Understand', copy: 'Learn how the operation works and where friction exists.' },
  { no: '02', title: 'Define', copy: 'Clarify requirements, constraints, integrations, and priorities.' },
  { no: '03', title: 'Architect', copy: 'Shape the technical and operational solution.' },
  { no: '04', title: 'Build', copy: 'Develop, test, and integrate the system.' },
  { no: '05', title: 'Deploy', copy: 'Put the system into its production environment.' },
  { no: '06', title: 'Support', copy: 'Maintain, monitor, secure, and improve the systems we build.' },
];

const engagements = [
  { title: 'Build', copy: 'Design and development of a new business or operational system.' },
  { title: 'Improve', copy: 'Extend, modernize, or replace an existing system.' },
  { title: 'Connect', copy: 'Integrate existing applications and data with the systems the business relies on.' },
  { title: 'Support', copy: 'Maintain, monitor, secure, and improve systems over time.' },
];

function Eyebrow({ children }: { children: string }) {
  return <p className="rs-eyebrow">{children}</p>;
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
            <Eyebrow>Solutions</Eyebrow>
            <h1>Built around<br /><span>your operation.</span></h1>
            <p>ROSALOGIC designs and builds custom business software around the way your operation works. We develop applications for workflows, customers, assets, and internal processes. We also connect them to the systems your business already uses.</p>
            <p className="rs-hero-closing">Business software first. Integration and support when needed.</p>
          </div>
          <figure className="rs-hero-photo"><img src={siloImage} alt="Steel grain silos at an agricultural processing facility beneath a pale sky" /></figure>
        </div>
      </header>

      <div className="rs-content">
        <section className="rs-section rs-software" aria-labelledby="rs-software-title">
          <div className="rs-wrap rs-section-split">
            <div className="rs-lead">
              <Eyebrow>Business software</Eyebrow>
              <h2 id="rs-software-title">Software shaped around<br />the way work actually happens.</h2>
              <p>Standard software is useful when your processes fit the product. When they don’t, teams often compensate with spreadsheets, manual workarounds, disconnected tools, and repetitive data entry.</p>
              <p>ROSALOGIC designs and builds custom business applications around your workflows, users, assets, and decisions instead of a generic software template.</p>
            </div>
            <div className="rs-columns rs-four-columns">
              {softwareAreas.map(area => <article className="rs-column" key={area.no}><span className="rs-column-no">{area.no}</span><h3>{area.title}</h3><p>{area.copy}</p><ItemList items={area.items} /></article>)}
            </div>
          </div>
        </section>

        <section className="rs-section rs-system" aria-labelledby="rs-system-title">
          <div className="rs-wrap rs-system-grid">
            <div className="rs-lead">
              <Eyebrow>The system</Eyebrow>
              <h2 id="rs-system-title">The system is more than<br />the software.</h2>
              <p>Software is only one part of a business system. The surrounding processes, data, integrations, and technology have to work together for the system to be useful.</p>
              <p>ROSALOGIC understands those layers and works across them when a project requires it. That might mean building an application, connecting existing tools, or improving the technology that supports the software.</p>
            </div>
            <div className="rs-layer-list" aria-label="Six layers of a business system">
              {layers.map(({ name, copy, icon: Icon }) => <div className="rs-layer" key={name}><div className="rs-layer-name"><Icon size={16} strokeWidth={1.4} aria-hidden="true" /><strong>{name}</strong></div><p>{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="rs-section rs-integration" aria-labelledby="rs-integration-title">
          <div className="rs-wrap rs-section-split">
            <div className="rs-lead">
              <Eyebrow>Integration & data</Eyebrow>
              <h2 id="rs-integration-title">Make the systems<br />work together.</h2>
              <p>The software we build often needs to work with tools a business already uses. Accounting, CRM, inventory, ERP, spreadsheets, customer systems, and external services can all contain pieces of the organization’s information.</p>
              <p>ROSALOGIC connects these systems when the project requires it, so information can move where it needs to go and become useful to the people running the operation.</p>
            </div>
            <div className="rs-columns rs-three-columns">
              {integrationAreas.map(area => <article className="rs-column" key={area.title}><h3>{area.title}</h3><p>{area.copy}</p><ItemList items={area.items} /></article>)}
            </div>
          </div>
        </section>

        <section className="rs-section rs-infrastructure" aria-labelledby="rs-infrastructure-title">
          <div className="rs-wrap rs-section-split">
            <div className="rs-lead">
              <Eyebrow>Technology & support</Eyebrow>
              <h2 id="rs-infrastructure-title">The foundation<br />behind the system.</h2>
              <p>The software we build needs a reliable environment around it. ROSALOGIC can provide the deployment, infrastructure, security, and ongoing maintenance needed to keep business systems working over time.</p>
              <p className="rs-small-note">We work with the client’s existing environment when it is the right fit.</p>
            </div>
            <div className="rs-columns rs-three-columns">
              {infrastructure.map(area => <article className="rs-column" key={area.title}><h3>{area.title}</h3><ItemList items={area.items} /></article>)}
            </div>
          </div>
        </section>

        <section className="rs-connected" aria-labelledby="rs-connected-title">
          <div className="rs-wrap rs-connected-grid">
            <div className="rs-connected-copy"><Eyebrow>Connected systems</Eyebrow><h2 id="rs-connected-title">One system.<br />Multiple layers.</h2><p>A new application may need integrations.<br />Reporting gaps can start with disconnected systems.<br />Automation may require changes to the underlying workflow.</p><p>ROSALOGIC brings these pieces together when the project requires them, so the software works reliably in practice.</p></div>
            <div className="rs-connected-diagram" aria-label="Business system stack"><span className="rs-diagram-side">Business<br />Operations<br />Users</span><div className="rs-stack"><span>Business</span><span>Operations + Users</span><span>Software Systems</span><span>Data + Integrations</span><span>Infrastructure</span><span>Security</span></div></div>
            <div className="rs-connected-photo"><img className="rs-connected-image" src={architectureImage} alt="Angular concrete and glass architecture against a blue sky" loading="lazy" /></div>
          </div>
        </section>

        <section className="rs-section rs-industries" aria-labelledby="rs-industries-title">
          <div className="rs-wrap rs-section-split">
            <div className="rs-lead"><Eyebrow>Industries</Eyebrow><h2 id="rs-industries-title">Software for<br />real operations.</h2><p>Our strongest fit is with organizations where daily operations involve people, equipment, workflows, customers, and information that need to work together.</p><p>We also work with other organizations whose operational challenges fit our capabilities.</p></div>
            <div className="rs-columns rs-four-columns">
              {industries.map(area => <article className="rs-column" key={area.title}><h3>{area.title}</h3><p>{area.copy}</p><p className="rs-industry-detail">{area.detail}</p></article>)}
            </div>
          </div>
        </section>

        <section className="rs-section rs-process" aria-labelledby="rs-process-title">
          <div className="rs-wrap rs-section-split">
            <div className="rs-lead"><Eyebrow>How we work</Eyebrow><h2 id="rs-process-title">Start with the problem.<br />Build the right system.</h2><p>You do not need to arrive with a technical specification. We can help define the work from the operational challenge.</p></div>
            <ol className="rs-process-steps">{process.map(step => <li key={step.no}><span>{step.no}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
          </div>
        </section>

        <section className="rs-section rs-engagement" aria-labelledby="rs-engagement-title">
          <div className="rs-wrap rs-section-split">
            <div className="rs-lead"><Eyebrow>Ways of engagement</Eyebrow><h2 id="rs-engagement-title">Engage us where<br />the problem is.</h2></div>
            <div className="rs-columns rs-four-columns">{engagements.map(area => <article className="rs-column" key={area.title}><h3>{area.title}</h3><p>{area.copy}</p></article>)}</div>
          </div>
        </section>

        <section className="rs-cta" aria-labelledby="rs-cta-title">
          <div className="rs-wrap rs-cta-grid">
            <div><Eyebrow>Let’s talk</Eyebrow><h2 id="rs-cta-title">Where could your<br />operation work better?</h2></div>
            <p>Tell us what is slowing your operation down. We can help define a practical software project, determine what should be built or connected, and plan how the system will be supported after it goes live.</p>
            <nav aria-label="Next steps"><Link href="/contact" data-testid="link-solutions-contact" className="rs-cta-primary">Start a Conversation <ArrowUpRight size={14} aria-hidden="true" /></Link><Link href="/industries" data-testid="link-solutions-industries" className="rs-cta-secondary">Explore Industries <ArrowUpRight size={14} aria-hidden="true" /></Link></nav>
          </div>
        </section>
      </div>
    </div>
  );
}

export function SolutionsPage() { return <SolutionsContent />; }