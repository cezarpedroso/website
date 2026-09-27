import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
} from 'lucide-react';
import './_group.css';

const capabilityAreas = [
  {
    number: '01',
    title: 'Software Systems',
    Icon: Code2,
    lead: 'Software that reflects how work actually happens.',
    copy: 'We design and build custom business applications around the people, assets, workflows, and decisions that make an operation run. The result is a system shaped by your work—not a template asking your work to change.',
    items: ['Operations & internal workflows', 'Customer & asset systems', 'Purpose-built business applications'],
  },
  {
    number: '02',
    title: 'Data & Integration',
    Icon: Database,
    lead: 'Make information useful across the operation.',
    copy: 'Disconnected data makes even simple decisions harder. We connect systems, structure information, and create reporting and automation that give teams a clearer view of what is happening.',
    items: ['APIs & system integrations', 'Business intelligence & reporting', 'Data systems & automation'],
  },
  {
    number: '03',
    title: 'Technology',
    Icon: Cloud,
    lead: 'A dependable foundation behind the work.',
    copy: 'Reliable software depends on the environment around it. We bring the infrastructure, deployment practices, security, and monitoring needed to keep critical systems working over time.',
    items: ['Cloud infrastructure & deployment', 'DevOps & monitoring', 'Security & operational reliability'],
  },
];

function PageHero({
  label,
  title,
  emphasis,
  description,
  aside,
}: {
  label: string;
  title: string;
  emphasis: string;
  description: string;
  aside: string;
}) {
  return (
    <section className="ip-hero">
      <div className="container-wide ip-hero-inner">
        <div className="ip-hero-main">
          <p className="eyebrow intro-eyebrow">{label}</p>
          <h1 className="display-heading ip-hero-title" tabIndex={-1}>{title} <em>{emphasis}</em></h1>
          <p className="ip-hero-description">{description}</p>
        </div>
        <div className="ip-hero-aside">
          <span className="ip-aside-rule" />
          <p>{aside}</p>
          <ArrowDown size={19} strokeWidth={1.5} aria-hidden="true" />
        </div>
      </div>
      <div className="container-wide ip-hero-bottom"><span>ROSALOGIC / BUSINESS SYSTEMS &amp; TECHNOLOGY</span><span>ENGINEERED FOR THE OPERATION</span></div>
    </section>
  );
}

function PageClose({ label, title, copy, link, linkText }: { label: string; title: string; copy: string; link: string; linkText: string }) {
  return (
    <section className="ip-close">
      <div className="container-wide ip-close-grid">
        <div>
          <p className="eyebrow intro-eyebrow eyebrow-light">{label}</p>
          <h2 className="display-heading">{title}</h2>
        </div>
        <div className="ip-close-action">
          <p>{copy}</p>
          <a className="button-solid" href={link} data-testid={`link-${linkText.toLowerCase().replaceAll(' ', '-')}`}>
            {linkText} <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Current() {
  return (
    <div className="inner-page rosalogic-solutions min-h-screen">
      <PageHero
        label="Our Solutions"
        title="Built around"
        emphasis="your operation."
        description="Your business has processes, people, assets, data and systems that need to work together. We build technology around those realities—not around a generic software template."
        aside="One connected perspective across software, information, and the technology that supports them."
      />
      <section className="ip-section ip-solutions-intro">
        <div className="container-wide ip-split-intro">
          <div className="ip-section-index"><span>What we do</span></div>
          <div>
            <h2 className="ip-serif-heading">The system is more than <em>the software.</em></h2>
            <p>Useful technology has to make sense as a whole. An application must fit the workflow. Its data must connect to other systems. Its infrastructure must be reliable enough to support the people who count on it. Our work brings these parts into one considered architecture.</p>
          </div>
        </div>
      </section>
      <section className="ip-capabilities" aria-label="Solution areas">
        <div className="container-wide">
          {capabilityAreas.map(({ number, title, Icon, lead, copy, items }) => (
            <article className="ip-capability-row" key={number}>
              <div className="ip-capability-label"><span>{number} / 03</span><Icon size={31} strokeWidth={1.2} aria-hidden="true" /></div>
              <div className="ip-capability-heading"><h3>{title}</h3><p>{lead}</p></div>
              <div className="ip-capability-detail"><p>{copy}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>
      <section className="ip-navy-panel">
        <div className="container-wide ip-panel-grid">
          <div>
            <p className="eyebrow industries-eyebrow">A connected approach</p>
            <h2 className="display-heading">Designed to work <em>together.</em></h2>
          </div>
          <div className="ip-system-diagram" aria-label="Connected software, data, and technology">
            <div><Code2 size={24} strokeWidth={1.3} aria-hidden="true" /><span>SOFTWARE</span></div>
            <span className="ip-diagram-line" />
            <div><Database size={24} strokeWidth={1.3} aria-hidden="true" /><span>DATA</span></div>
            <span className="ip-diagram-line" />
            <div><Cloud size={24} strokeWidth={1.3} aria-hidden="true" /><span>TECHNOLOGY</span></div>
          </div>
        </div>
      </section>
      <section className="ip-section">
        <div className="container-wide ip-split-intro ip-final-note">
          <div className="ip-section-index"><span>The outcome</span></div>
          <div><h2 className="ip-serif-heading">Less friction. <em>More clarity.</em></h2><p>Better systems make the operation easier to understand, manage, and improve. We focus on practical technology that can be maintained, trusted, and adapted as the business changes.</p><a href="/industries" className="ip-text-link" data-testid="link-solutions-industries">Explore the industries we work with <ArrowRight size={16} aria-hidden="true" /></a></div>
        </div>
      </section>
      <PageClose label="About ROSALOGIC" title="The thinking behind the work." copy="Good systems begin with a clear understanding of what the operation needs—and a commitment to building for the long term." link="/about" linkText="About ROSALOGIC" />
    </div>
  );
}