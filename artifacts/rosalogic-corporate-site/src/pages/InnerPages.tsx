import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Factory,
  HardHat,
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
import industrialRoofPhoto from '../assets/about-industrial-roof.jpg';
import teamDeveloperPhoto from '../assets/our-team-developer.png';
import silosPhoto from '../assets/solutions-silos.jpg';
import './inner-pages.css';
import './about-page.css';

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

const aboutValues = [
  { number: '01', title: 'Practicality', text: 'We focus on solutions that work in the real world—not just in theory. Technology should make the operation easier, not more complex.' },
  { number: '02', title: 'Quality', text: 'We care about architecture, maintainability, and security. Good engineering isn’t just about what works today; it’s about what lasts.' },
  { number: '03', title: 'Partnership', text: 'We work closely with clients as a long-term partner. Your business and goals guide our work, not generic templates.' },
  { number: '04', title: 'Continuous Improvement', text: 'Operations change, businesses grow, and technology evolves. We build systems that can adapt with you.' },
];

const aboutSteps = [
  { number: '01', title: 'Understand', text: 'We learn how your operation works and where the friction exists.' },
  { number: '02', title: 'Define', text: 'We identify requirements, constraints, integrations, and priorities.' },
  { number: '03', title: 'Architect', text: 'We design the technical and operational solution.' },
  { number: '04', title: 'Build', text: 'We develop, test, and integrate the system.' },
  { number: '05', title: 'Deploy', text: 'We put the system into its production environment.' },
  { number: '06', title: 'Operate', text: 'We can continue supporting, maintaining, and improving the system.' },
];

const aboutBenefits = [
  { title: 'Efficiency', text: 'Less manual work. More time for what matters.' },
  { title: 'Visibility', text: 'The right information, when and where it’s needed.' },
  { title: 'Control', text: 'Processes that are structured, measurable, and manageable.' },
  { title: 'Scalability', text: 'Systems that grow with your business, not against it.' },
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
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-heading">
        <div className="about-wrap about-hero-grid">
          <div className="about-hero-text">
            <p className="about-label">About</p>
            <h1 id="about-heading" className="about-serif" tabIndex={-1}>Engineering<br />better operations.</h1>
            <p className="about-copy">ROSALOGIC is a business software and technology company focused on building practical, reliable systems for real-world operations. We work with organizations to design, build, and maintain the technology that keeps their business running.</p>
          </div>
          <img className="about-hero-image" src={industrialRoofPhoto} alt="Industrial building beneath an evening sky" width="1024" height="1024" fetchPriority="high" />
          <p className="about-hero-aside">We turn business needs into reliable technology systems.</p>
        </div>
      </section>

      <section className="about-section about-values" aria-labelledby="about-values-heading">
        <div className="about-wrap about-values-grid">
          <div className="about-values-intro">
            <p className="about-label">Our values</p>
            <h2 id="about-values-heading" className="about-serif">What we believe in.</h2>
            <p className="about-copy">Our work is guided by a few core principles. They shape how we approach problems, work with clients, and build systems that last.</p>
          </div>
          {aboutValues.map(({ number, title, text }) => (
            <article className="about-value" key={number}>
              <span className="about-number">{number}</span>
              <h3>{title}</h3>
              <p className="about-copy">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-team" aria-labelledby="about-team-heading">
        <div className="about-wrap about-team-grid">
          <div>
            <p className="about-label">Our team</p>
            <h2 id="about-team-heading" className="about-serif">A small team<br />with a broad skillset.</h2>
            <p className="about-copy">ROSALOGIC is a focused team of engineers and problem solvers. We bring together experience in software development, cloud infrastructure, data, and business systems to build solutions that fit your operation.</p>
          </div>
          <img className="about-team-image" src={teamDeveloperPhoto} alt="Software developer working at a desktop computer" width="2000" height="1414" loading="lazy" />
        </div>
      </section>

      <section className="about-section about-approach" aria-labelledby="about-approach-heading">
        <div className="about-wrap about-approach-grid">
          <div className="about-approach-intro">
            <p className="about-label">Our approach</p>
            <h2 id="about-approach-heading" className="about-serif">A collaborative process, from problem to operation.</h2>
            <p className="about-copy">We don&apos;t start with a technology stack.<br />We start with your operation. Our process is designed to understand your needs, shape the right solution, and deliver a system that works in the real world.</p>
          </div>
          <div className="about-steps" aria-label="Six steps in our process">
            {aboutSteps.map(({ number, title, text }) => (
              <article className="about-step" key={number}>
                <span className="about-number">{number}</span>
                <h3>{title}</h3>
                <p className="about-copy">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-outcomes" aria-labelledby="about-outcomes-heading">
        <div className="about-wrap about-outcomes-grid">
          <div>
            <p className="about-label">Why it matters</p>
            <h2 id="about-outcomes-heading" className="about-serif">Better systems create better operations.</h2>
            <p className="about-copy">When software, data, and infrastructure work together, your teams can move faster, make better decisions, and focus on what matters. That&apos;s the real value of a well-engineered system.</p>
          </div>
          <img className="about-outcomes-image" src={silosPhoto} alt="Agricultural grain silos and surrounding operational site" width="1024" height="1024" loading="lazy" />
          <ul className="about-benefits">
            {aboutBenefits.map(({ title, text }) => <li key={title}><strong>{title}</strong><span>{text}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="about-cta" aria-labelledby="about-cta-heading">
        <div className="about-wrap about-cta-grid">
          <div>
            <p className="about-label">Let&apos;s talk</p>
            <h2 id="about-cta-heading">Where could your<br />operation work better?</h2>
          </div>
          <p className="about-cta-description">Tell us what is slowing your operation down. We can help define a practical software project, determine what should be built or connected, and plan how the system will be supported after it goes live.</p>
          <nav className="about-cta-actions" aria-label="Next steps">
            <Link className="about-cta-primary" href="/contact" data-testid="link-about-contact">Start a Conversation <ArrowUpRight size={14} aria-hidden="true" /></Link>
            <Link className="about-cta-secondary" href="/industries" data-testid="link-about-industries">Explore Industries <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </nav>
        </div>
      </section>
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