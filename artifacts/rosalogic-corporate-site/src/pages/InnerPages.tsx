import {
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'wouter';
import manufacturingPhoto from '../assets/industry-manufacturing.jpg';
import agriculturePhoto from '../assets/industry-agriculture.jpg';
import logisticsPhoto from '../assets/industry-logistics.jpg';
import constructionPhoto from '../assets/industry-construction.jpg';
import professionalServicesPhoto from '../assets/industry-professional-services.jpg';
import silosPhoto from '../assets/solutions-silos.jpg';
import officePhoto from '../assets/about-office.png';
import teamDeveloperPhoto from '../assets/our-team-developer.png';
import './inner-pages.css';
import './about-page.css';
import './industries-page.css';

const industryAreas = [
  {
    name: 'Manufacturing',
    image: manufacturingPhoto,
    alt: 'Manufacturing production environment',
    systems: ['Production tracking', 'Maintenance planning', 'Inventory management', 'Work orders and scheduling', 'Operational reporting'],
    copy: 'Production does not happen in one system. We help connect the information and workflows surrounding production, maintenance, inventory, and quality so teams can work with a clearer operational picture.',
  },
  {
    name: 'Agriculture',
    image: agriculturePhoto,
    alt: 'Agricultural operations landscape',
    systems: ['Field operations', 'Equipment and assets', 'Inventory management', 'Work orders and maintenance', 'Operational reporting'],
    copy: 'From equipment and inventory to the data that informs daily decisions, agricultural operations depend on information that remains useful beyond the office. We build around that reality.',
  },
  {
    name: 'Logistics',
    image: logisticsPhoto,
    alt: 'Logistics and transportation environment',
    systems: ['Fleet management', 'Dispatch and routing', 'Customer coordination', 'Maintenance planning', 'Tracking and reporting'],
    copy: 'Moving work demands coordination between people, vehicles, schedules, and customers. We create systems that make dispatch and transportation information easier to see and act on.',
  },
  {
    name: 'Construction',
    image: constructionPhoto,
    alt: 'Construction site and field operations',
    systems: ['Project management', 'Equipment and assets', 'Field operations', 'Document management', 'Reporting and analytics'],
    copy: 'Project information has to travel between the office and the field. We focus on the systems that support equipment, field operations, and the work of keeping projects coordinated.',
  },
  {
    name: 'Professional Services',
    image: professionalServicesPhoto,
    alt: 'Professional services working environment',
    systems: ['Client relationship management', 'Project coordination', 'Document management', 'Time tracking and billing', 'Business reporting'],
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

export function IndustriesPage() {
  return (
    <div className="industries-page">
      <section className="industries-hero" aria-labelledby="industries-page-title">
        <div className="container-wide industries-hero-grid">
          <div className="industries-hero-copy">
            <p className="eyebrow intro-eyebrow">Industries</p>
            <h1 id="industries-page-title" className="display-heading industries-page-title" tabIndex={-1}>
              Different industries.<br /><em>Same foundation.</em>
            </h1>
            <p>Every operation has its own challenges, workflows, and business drivers. We build software, data, and technology around the way your operation works—so you can reduce friction, improve control, and create a stronger foundation for what&apos;s next.</p>
          </div>
          <figure className="industries-hero-photo">
            <img src={silosPhoto} alt="Agricultural grain silos beside a field" fetchPriority="high" />
          </figure>
          <aside className="industries-hero-aside">
            <span>Industry solutions</span>
            <span>Built around real operations</span>
          </aside>
        </div>
      </section>

      <section className="industries-list" aria-label="Industries and example operational systems">
        {industryAreas.map(({ name, image, alt, systems, copy }) => (
          <article className="industry-editorial-row" key={name}>
            <div className="industry-editorial-copy">
              <p className="industry-editorial-kicker">{name}</p>
              <h2>{name === 'Manufacturing' ? <>Production, maintenance<br />and inventory.</> :
                name === 'Agriculture' ? <>Operations, assets<br />and field data.</> :
                  name === 'Logistics' ? <>Fleet, dispatch, customers<br />and data.</> :
                    name === 'Construction' ? <>Projects, assets<br />and teams.</> :
                      <>Clients, projects<br />and performance.</>}</h2>
              <p className="industry-editorial-description">{copy}</p>
              <Link href="/solutions" className="industry-editorial-link" data-testid={`link-${name.toLowerCase().replaceAll(' ', '-')}-solutions`}>
                Explore solutions <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className="industry-editorial-systems">
              <p>Example systems</p>
              <ul>
                {systems.map((system) => <li key={system}>{system}</li>)}
              </ul>
            </div>
            <figure className="industry-editorial-photo">
              <img src={image} alt={alt} loading="lazy" />
            </figure>
          </article>
        ))}
      </section>

      <section className="industries-invitation" aria-labelledby="industries-invitation-title">
        <div className="container-wide industries-invitation-grid">
          <div>
            <p className="eyebrow intro-eyebrow eyebrow-light">Next steps</p>
            <h2 id="industries-invitation-title" className="display-heading">Have an operation<br />that could <em>work better?</em></h2>
          </div>
          <p className="industries-invitation-copy">Tell us what is slowing your business down. We&apos;ll help you understand the problem, determine what technology can improve it, and define a practical path forward.</p>
          <div className="industries-invitation-actions">
            <Link className="button-solid" href="/contact" data-testid="link-industries-contact">Start a conversation <ArrowUpRight size={15} aria-hidden="true" /></Link>
            <Link className="industries-about-link" href="/about" data-testid="link-industries-about">About ROSALOGIC <ArrowRight size={13} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
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
            <h1 id="about-heading" className="about-heading" tabIndex={-1}>Engineering<br />better operations.</h1>
            <p className="about-copy">ROSALOGIC is a business software and technology company focused on building practical, reliable systems for real-world operations. We work with organizations to design, build, and maintain the technology that keeps their business running.</p>
          </div>
          <img className="about-hero-image" src={officePhoto} alt="Bright office workspace with desks and computer monitors" width="1124" height="750" fetchPriority="high" />
        </div>
      </section>

      <section className="about-section about-values" aria-labelledby="about-values-heading">
        <div className="about-wrap about-values-grid">
          <div className="about-values-intro">
            <p className="about-label">Our values</p>
            <h2 id="about-values-heading" className="about-heading">What we believe in.</h2>
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
            <h2 id="about-team-heading" className="about-heading">A small team<br />with a broad skillset.</h2>
            <p className="about-copy">ROSALOGIC is a focused team of engineers and problem solvers. We bring together experience in software development, cloud infrastructure, data, and business systems to build solutions that fit your operation.</p>
          </div>
          <img className="about-team-image" src={teamDeveloperPhoto} alt="Software developer working at a desktop computer" width="2000" height="1414" loading="lazy" />
        </div>
      </section>

      <section className="about-section about-approach" aria-labelledby="about-approach-heading">
        <div className="about-wrap about-approach-grid">
          <div className="about-approach-intro">
            <p className="about-label">Our approach</p>
            <h2 id="about-approach-heading" className="about-heading">A collaborative process, from problem to operation.</h2>
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
            <h2 id="about-outcomes-heading" className="about-heading">Better systems create better operations.</h2>
            <p className="about-copy">When software, data, and infrastructure work together, your teams can move faster, make better decisions, and focus on what matters. That&apos;s the real value of a well-engineered system.</p>
          </div>
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