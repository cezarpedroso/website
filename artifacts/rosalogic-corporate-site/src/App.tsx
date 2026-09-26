import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import heroBackdrop from '@assets/heroback_1790416036994.jpg';
import logoTopbar from '@assets/topbarlogo_1790416925834.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const solutions = [
  {
    number: '01',
    title: 'Business Systems',
    copy: 'The core systems that give your operation a clear, dependable source of truth.',
    image:
      'https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    number: '02',
    title: 'Operational Software',
    copy: 'Purpose-built tools for the work that generic software cannot see.',
    image:
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    number: '03',
    title: 'Data & Analytics',
    copy: 'Turn fragmented operational data into decisions your teams can use.',
    image:
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    number: '04',
    title: 'Integration & Automation',
    copy: 'Connect the systems you rely on and remove the friction between them.',
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const industries = [
  {
    name: 'Manufacturing',
    image:
      'https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    name: 'Agriculture',
    image:
      'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    name: 'Logistics & Transportation',
    image:
      'https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    name: 'Construction',
    image:
      'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Professional Services',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600',
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
        <p className="eyebrow hero-kicker">SYSTEM ENGINEERED.</p>
        <h1 id="hero-title" className="display-serif hero-title">
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
    <section className="section-light intro-section" aria-labelledby="intro-title">
      <div className="container-wide">
        <div className="intro-grid">
          <div>
            <p className="eyebrow">01 / The work</p>
            <h2 id="intro-title" className="display-serif section-title">
              Built around <em>your operation.</em>
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              Your operation is not a template. We build around the decisions, handoffs, constraints and
              opportunities that make your business work — not around the assumptions baked into generic software.
            </p>
            <a className="text-link" href="#about" data-testid="link-intro-about">
              How we work <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="solutions-section" aria-labelledby="solutions-title">
      <div className="container-wide">
        <div className="solutions-header">
          <div>
            <p className="eyebrow eyebrow-light">02 / Solutions</p>
            <h2 id="solutions-title" className="display-serif solutions-title">
              Systems built for how <em>business actually operates.</em>
            </h2>
          </div>
          <p className="solutions-header-copy">
            Connected by design. Built for use. Supported for the long term.
          </p>
        </div>
        <div className="solution-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.number}>
              <img
                className="solution-image"
                src={solution.image}
                alt={`${solution.title} technology environment`}
                width="1600"
                height="1000"
                loading="lazy"
              />
              <div>
                <span className="solution-number">{solution.number}</span>
                <h3>{solution.title}</h3>
              </div>
              <div className="solution-bottom">
                <p>{solution.copy}</p>
                <span className="solution-arrow" aria-hidden="true">
                  <ArrowUpRight size={17} />
                </span>
              </div>
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
      <div className="container-wide">
        <div className="industries-header">
          <div>
            <p className="eyebrow">03 / Industries</p>
            <h2 id="industries-title" className="display-serif industries-title">
              Built for <em>complex operations.</em>
            </h2>
          </div>
          <p className="industries-copy">
            From the plant floor to the project site, we make technology accountable to the work it supports.
          </p>
        </div>
        <div className="industry-grid">
          {industries.map((industry, index) => (
            <article className="industry-card" key={industry.name}>
              <img
                className="industry-image"
                src={industry.image}
                alt={`${industry.name} industrial environment`}
                width="1600"
                height="1000"
                loading="lazy"
              />
              <div>
                <span>{`0${index + 1}`}</span>
                <h3>{industry.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="approach-section" aria-labelledby="approach-title">
      <div className="container-wide">
        <div className="approach-header">
          <div>
            <p className="eyebrow">04 / Approach</p>
            <h2 id="approach-title" className="display-serif approach-title">
              From architecture <em>to operation.</em>
            </h2>
          </div>
          <p className="approach-copy">
            Software is only useful when it survives contact with the real world. We stay close to the full
            technology lifecycle — from the first question through the years of improvement that follow.
          </p>
        </div>
        <div className="process-list" aria-label="ROSALOGIC engineering process">
          {processSteps.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="process-step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
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
          <h2 id="about-title" className="display-serif about-title">
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
          <h2 id="contact-title" className="display-serif cta-title">
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
        <SolutionsSection />
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