import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Factory,
  HardHat,
  Layers3,
  Network,
  ShieldCheck,
  Sprout,
  Truck,
  UsersRound,
} from 'lucide-react';
import { Link } from 'wouter';
import manufacturingPhoto from '../assets/industry-manufacturing.jpg';
import agriculturePhoto from '../assets/industry-agriculture.jpg';
import logisticsPhoto from '../assets/industry-logistics.jpg';
import constructionPhoto from '../assets/industry-construction.jpg';
import professionalServicesPhoto from '../assets/industry-professional-services.jpg';
import './inner-pages.css';

const industryAreas = [
  {
    number: '01',
    name: 'Manufacturing',
    Icon: Factory,
    image: manufacturingPhoto,
    alt: 'Manufacturing production environment',
    details: 'Production · Maintenance · Inventory · Quality',
    copy: 'Production does not happen in one system. We help connect the information and workflows surrounding production, maintenance, inventory, and quality so teams can work with a clearer operational picture.',
  },
  {
    number: '02',
    name: 'Agriculture',
    Icon: Sprout,
    image: agriculturePhoto,
    alt: 'Agricultural operations landscape',
    details: 'Equipment · Operations · Inventory · Data',
    copy: 'From equipment and inventory to the data that informs daily decisions, agricultural operations depend on information that remains useful beyond the office. We build around that reality.',
  },
  {
    number: '03',
    name: 'Logistics',
    Icon: Truck,
    image: logisticsPhoto,
    alt: 'Logistics and transportation environment',
    details: 'Fleet · Dispatch · Transportation · Customers',
    copy: 'Moving work demands coordination between people, vehicles, schedules, and customers. We create systems that make dispatch and transportation information easier to see and act on.',
  },
  {
    number: '04',
    name: 'Construction',
    Icon: HardHat,
    image: constructionPhoto,
    alt: 'Construction site and field operations',
    details: 'Projects · Equipment · Field Operations',
    copy: 'Project information has to travel between the office and the field. We focus on the systems that support equipment, field operations, and the work of keeping projects coordinated.',
  },
  {
    number: '05',
    name: 'Professional Services',
    Icon: UsersRound,
    image: professionalServicesPhoto,
    alt: 'Professional services working environment',
    details: 'Clients · Workflow · Documents · Billing',
    copy: 'Client work involves more than the final deliverable. We help bring structure to workflows, documents, and billing information so teams can spend less effort navigating the process.',
  },
];

const principles = [
  { number: '01', title: 'Efficiency', text: 'Reduce friction in the work people do every day.' },
  { number: '02', title: 'Control', text: 'Connect information so decisions have context.' },
  { number: '03', title: 'Reliability', text: 'Build systems people can trust when work depends on them.' },
  { number: '04', title: 'Longevity', text: 'Create foundations that can evolve with the operation.' },
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
          <Link className="button-solid" href={link} data-testid={`link-${linkText.toLowerCase().replaceAll(' ', '-')}`}>
            {linkText} <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function IndustriesPage() {
  return (
    <div className="inner-page">
      <PageHero
        label="Industries"
        title="Built for operational"
        emphasis="businesses."
        description="We work with organizations across industries that rely on complex operations and real-world systems. Different environments, one shared need: technology that understands the work."
        aside="From the production floor to the field, useful systems begin with operational context."
      />
      <section className="ip-section ip-industries-lead">
        <div className="container-wide ip-split-intro">
          <div className="ip-section-index"><span>Where we work</span></div>
          <div><h2 className="ip-serif-heading">Built with the <em>real world in view.</em></h2><p>Processes cross teams, locations, and systems. Information changes hands. Work does not pause for software. We approach each industry through the operational details that matter within it.</p></div>
        </div>
      </section>
      <section className="ip-industry-list" aria-label="Industries served">
        {industryAreas.map(({ number, name, Icon, image, alt, details, copy }) => (
          <article className="ip-industry-row" key={name}>
            <div className="ip-industry-photo"><img src={image} alt={alt} loading="lazy" /><span>{number} / 05</span></div>
            <div className="ip-industry-body">
              <div className="ip-industry-kicker"><Icon size={26} strokeWidth={1.3} aria-hidden="true" /><span>INDUSTRY {number}</span></div>
              <h2>{name}</h2>
              <p className="ip-industry-details">{details}</p>
              <p className="ip-industry-copy">{copy}</p>
              <Link href="/solutions" className="ip-text-link" data-testid={`link-${name.toLowerCase().replaceAll(' ', '-')}-solutions`}>Explore relevant capabilities <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </section>
      <section className="ip-section ip-industry-outro">
        <div className="container-wide ip-split-intro">
          <div className="ip-section-index"><span>The common thread</span></div>
          <div><h2 className="ip-serif-heading">Different work. <em>The same standard.</em></h2><p>Every operation has its own constraints, language, and pace. The goal is not to force a familiar solution into an unfamiliar setting. It is to understand the setting first, then engineer what belongs there.</p></div>
        </div>
      </section>
      <PageClose label="Our Solutions" title="Technology shaped by the work." copy="Explore the software, data, and technology capabilities that support complex operations." link="/solutions" linkText="Explore solutions" />
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="inner-page">
      <PageHero
        label="About ROSALOGIC"
        title="Engineering technology"
        emphasis="that lasts."
        description="ROSALOGIC designs, builds, and operates software systems for organizations with complex operations. We focus on the quiet disciplines that make technology dependable."
        aside="Clean architecture. Maintainable software. Reliable infrastructure. Long-term thinking."
      />
      <section className="ip-section ip-about-statement">
        <div className="container-wide ip-split-intro">
          <div className="ip-section-index"><span>Our perspective</span></div>
          <div><h2 className="ip-serif-heading">Technology should serve <em>the operation.</em></h2><p>Not the other way around. The strongest systems begin with an understanding of how people work, where information moves, and what the business needs to rely on. That understanding informs the architecture, the software, and the decisions that follow.</p></div>
        </div>
      </section>
      <section className="ip-principles">
        <div className="container-wide">
          <div className="ip-principles-heading"><p className="eyebrow industries-eyebrow">Operating principles</p><h2 className="display-heading">A practical measure of <em>good work.</em></h2></div>
          <div className="ip-principles-grid">
            {principles.map(({ number, title, text }) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="ip-section ip-about-disciplines">
        <div className="container-wide">
            <div className="ip-split-intro"><div className="ip-section-index"><span>The discipline</span></div><div><h2 className="ip-serif-heading">Dependability is <em>designed in.</em></h2><p>Reliable systems are not the result of one good feature. They come from considered choices throughout the life of the work—from architecture and deployment to security, monitoring, and the ability to change without losing control.</p></div></div>
          <div className="ip-discipline-grid">
            <article><Layers3 size={29} strokeWidth={1.3} aria-hidden="true" /><h3>Clear architecture</h3><p>Structure that keeps complex systems understandable and maintainable.</p></article>
            <article><Network size={29} strokeWidth={1.3} aria-hidden="true" /><h3>Connected information</h3><p>Data and integrations that help the right context reach the right people.</p></article>
            <article><ShieldCheck size={29} strokeWidth={1.3} aria-hidden="true" /><h3>Reliable operation</h3><p>Infrastructure, security, and monitoring that support continuity.</p></article>
          </div>
        </div>
      </section>
      <section className="ip-quote-band"><div className="container-wide"><span>ROSALOGIC / BUSINESS SYSTEMS &amp; TECHNOLOGY</span><p>“Build systems people trust. Create systems that evolve.”</p></div></section>
      <PageClose label="Contact" title="Start with the operation." copy="The best place to begin is with the work itself: what is changing, what is difficult, and what a better system needs to support." link="/contact" linkText="View contact page" />
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="inner-page">
      <section className="ip-contact-form-section" aria-labelledby="contact-form-title">
        <div className="container-wide ip-contact-form-layout">
          <div className="ip-contact-form-copy">
            <p className="eyebrow intro-eyebrow">Start a conversation</p>
            <h2 id="contact-form-title" className="display-heading ip-contact-title">Tell us about <em>the work.</em></h2>
            <p>Share the process, system, or operational challenge you would like to improve. A little context helps us understand where to start.</p>
            <div className="ip-contact-direct">
              <span>DIRECT EMAIL</span>
              <a href="mailto:contact@rosalogic.com">contact@rosalogic.com</a>
            </div>
          </div>
          <form className="ip-contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="ip-contact-fields">
              <label className="ip-contact-field">
                <span>Full name <b aria-hidden="true">*</b></span>
                <input name="name" type="text" autoComplete="name" maxLength={120} required />
              </label>
              <label className="ip-contact-field">
                <span>Email address <b aria-hidden="true">*</b></span>
                <input name="email" type="email" autoComplete="email" maxLength={254} required />
              </label>
              <label className="ip-contact-field ip-contact-field-wide">
                <span>Company or organization</span>
                <input name="company" type="text" autoComplete="organization" maxLength={160} />
              </label>
              <label className="ip-contact-field ip-contact-field-wide">
                <span>How can we help? <b aria-hidden="true">*</b></span>
                <textarea name="message" rows={6} maxLength={4000} required />
              </label>
            </div>
            <div className="ip-contact-form-footer">
              <button className="button-solid" type="button" disabled data-testid="button-contact-submit">
                Send message <ArrowUpRight size={15} aria-hidden="true" />
              </button>
              <p className="ip-contact-form-note">
                Form submissions aren&apos;t enabled yet. For now, email{' '}
                <a href="mailto:contact@rosalogic.com">contact@rosalogic.com</a>.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}