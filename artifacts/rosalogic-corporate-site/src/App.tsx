import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  Factory,
  HardHat,
  Menu,
  Sprout,
  Truck,
  UsersRound,
  X,
} from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import heroBackdrop from '@assets/heroback_1790416036994.jpg';
import logoTopbar from '@assets/topbarlogo_1790416925834.png';
import manufacturingPhoto from './assets/industry-manufacturing.jpg';
import agriculturePhoto from './assets/industry-agriculture.jpg';
import logisticsPhoto from './assets/industry-logistics.jpg';
import constructionPhoto from './assets/industry-construction.jpg';
import professionalServicesPhoto from './assets/industry-professional-services.jpg';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const capabilities = [
  {
    title: 'Software Systems',
    Icon: Code2,
    copy: 'Custom business applications for operations, customers, assets, workflows and internal processes.',
  },
  {
    title: 'Data & Integration',
    Icon: Database,
    copy: 'Business intelligence, reporting, APIs, integrations, automation and data systems.',
  },
  {
    title: 'Technology',
    Icon: Cloud,
    copy: 'Cloud infrastructure, deployment, DevOps, security and monitoring for reliable operations.',
  },
];

const industries = [
  {
    name: 'Manufacturing',
    Icon: Factory,
    details: 'Production · Maintenance · Inventory · Quality',
    image: manufacturingPhoto,
  },
  {
    name: 'Agriculture',
    Icon: Sprout,
    details: 'Equipment · Operations · Inventory · Data',
    image: agriculturePhoto,
  },
  {
    name: 'Logistics',
    Icon: Truck,
    details: 'Fleet · Dispatch · Transportation · Customers',
    image: logisticsPhoto,
  },
  {
    name: 'Construction',
    Icon: HardHat,
    details: 'Projects · Equipment · Field Operations',
    image: constructionPhoto,
  },
  {
    name: 'Professional Services',
    Icon: UsersRound,
    details: 'Clients · Workflow · Documents · Billing',
    image: professionalServicesPhoto,
  },
];

const processSteps = [
  { number: '01', title: 'Understand', copy: 'Learn the operation before prescribing a system.' },
  { number: '02', title: 'Architect', copy: 'Shape a durable technical foundation.' },
  { number: '03', title: 'Build', copy: 'Make the system useful, clear and maintainable.' },
  { number: '04', title: 'Deploy', copy: 'Put reliable software into the real environment.' },
  { number: '05', title: 'Operate', copy: 'Keep the technology healthy as work changes.' },
  { number: '06', title: 'Improve', copy: 'Make the next decision from better information.' },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="brand-link" aria-label="ROSALOGIC home">
      <span className="logo-mark" aria-hidden="true">
        <span className="logo-r">R</span>
      </span>
      <span className="logo-wordmark">ROSALOGIC</span>
      {light ? <span className="sr-only">Business Systems &amp; Technology</span> : null}
    </span>
  );
}

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container-wide header-inner">
        <a className="brand-link" href="#home" onClick={closeMenu} data-testid="link-home-logo">
          <img
            className="header-logo-image"
            src={logoTopbar}
            alt="ROSALOGIC — Business Systems & Technology"
            width="1000"
            height="120"
          />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase()}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button-line header-cta" href="#contact" data-testid="link-header-contact">
          Get in touch
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </div>
      {menuOpen ? (
        <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} data-testid={`link-mobile-${item.label.toLowerCase()}`}>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} data-testid="link-mobile-contact-cta">
            Start a conversation <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src={heroBackdrop}
        alt="Contemporary glass and steel office building viewed against the sky"
        width="6000"
        height="4000"
        fetchPriority="high"
      />
      <div className="container-wide hero-content">
        <h1 id="hero-title" className="display-heading hero-title">
          <span className="headline-line">Software and technology</span>{' '}
          <span className="headline-line">for the systems your</span>{' '}
          <em className="headline-line">business depends on.</em>
        </h1>
        <p className="hero-copy">
          ROSALOGIC designs, builds, and operates software systems for organizations with complex operations.
        </p>
        <div className="hero-actions">
          <a className="button-solid" href="#solutions" data-testid="link-hero-solutions">
            Explore solutions <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a className="button-line" href="#contact" data-testid="link-hero-contact">
            Get in touch <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section id="solutions" className="section-light intro-section" aria-labelledby="intro-title">
      <div className="container-wide solutions-strip">
        <div className="intro-heading">
          <p className="eyebrow intro-eyebrow">OUR SOLUTIONS</p>
          <h2 id="intro-title" className="display-heading section-title">
            Built around <em>your operation.</em>
          </h2>
          <p className="intro-copy">
            Your business has processes, people, assets, data and systems that need to work together. We build
            technology around those realities — not around a generic software template.
          </p>
        </div>
        <div className="capability-grid" aria-label="ROSALOGIC capability areas">
          {capabilities.map(({ title, Icon, copy }) => (
            <article className="capability-card" key={title}>
              <Icon size={30} strokeWidth={1.35} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#about" aria-label={`Learn more about ${title}`}>
                Learn more <ArrowRight size={13} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="industries-section" aria-labelledby="industries-title">
      <div className="industries-mosaic">
        <div className="industries-intro">
          <p className="eyebrow industries-eyebrow">Industries</p>
          <h2 id="industries-title" className="display-heading industries-title">
            Built for operational businesses.
          </h2>
          <p className="industries-copy">
            We work with organizations across industries that rely on complex operations and real-world systems.
          </p>
          <a className="industry-link" href="#contact">
            Learn more <ArrowRight size={13} aria-hidden="true" />
          </a>
        </div>
        {industries.map(({ name, image, Icon, details }) => (
          <article className="industry-card" key={name}>
            <img
              className="industry-image"
              src={image}
              alt={`${name} environment`}
              width="1600"
              height="1000"
              loading="lazy"
            />
            <div className="industry-card-content">
              <Icon size={25} strokeWidth={1.35} aria-hidden="true" />
              <h3>{name}</h3>
              <p>{details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section id="approach" className="approach-section" aria-labelledby="approach-title">
      <div className="container-wide approach-inner">
        <h2 id="approach-title" className="approach-label">Our approach</h2>
        <ol className="process-list" aria-label="ROSALOGIC engineering process">
          {processSteps.map((step) => (
            <li className="process-step" key={step.number}>
              <span className="process-step-number">{step.number}</span>
              <span>{step.title}</span>
              <ArrowRight size={13} aria-hidden="true" />
              <span className="sr-only"> — {step.copy}</span>
            </li>
          ))}
        </ol>
        <p className="approach-signoff">Long-term partnerships. Real results.</p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="container-wide about-grid">
        <div>
          <p className="eyebrow">05 / About ROSALOGIC</p>
          <h2 id="about-title" className="display-heading about-title">
            Engineering technology <em>that lasts.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            ROSALOGIC is focused on the quiet disciplines that make technology dependable: clean architecture,
            maintainable software, reliable infrastructure, security and long-term relationships.
          </p>
          <div className="about-rule" />
          <div className="about-detail">
            <span>Business systems &amp; technology</span>
            <span>Designed for the operation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="cta-section" aria-labelledby="contact-title">
      <div className="container-wide cta-inner">
        <div>
          <p className="eyebrow eyebrow-light">06 / Contact</p>
          <h2 id="contact-title" className="display-heading cta-title">
            Have a system that needs <em>to work better?</em>
          </h2>
        </div>
        <div>
          <p className="cta-copy">
            Let&apos;s understand the operation, define the architecture, and build the right system.
          </p>
          <div className="cta-button-wrap">
            <a className="button-solid" href="#footer-contact" data-testid="link-start-conversation">
              Start a conversation <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer-contact" className="site-footer">
      <div className="container-wide footer-main">
        <div className="footer-brand">
          <a className="brand-link" href="#home" data-testid="link-footer-logo">
            <Logo light />
          </a>
          <p>Business Systems &amp; Technology</p>
        </div>
        <nav className="footer-group" aria-label="Footer navigation">
          <h2>Navigate</h2>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} data-testid={`link-footer-${item.label.toLowerCase()}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-group">
          <h2>Connect</h2>
          <a href="#contact" data-testid="link-footer-linkedin">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="#contact" data-testid="link-footer-social">Social profile <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-group footer-contact">
          <h2>Contact details</h2>
          <p className="footer-contact-placeholder">[Contact email placeholder]</p>
          <p className="footer-contact-placeholder">[Phone number placeholder]</p>
          <p className="footer-contact-placeholder">[Office location placeholder]</p>
        </div>
      </div>
      <div className="container-wide footer-bottom">
        <span>© {new Date().getFullYear()} ROSALOGIC. All rights reserved.</span>
        <span>Systems, engineered.</span>
      </div>
    </footer>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content" data-testid="link-skip-content">
        Skip to content
      </a>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main-content">
        <Hero />
        <IntroSection />
        <IndustriesSection />
        <ApproachSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Home />
      <Toaster />
    </>
  );
}

export default App;