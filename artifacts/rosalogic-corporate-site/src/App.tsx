import { useEffect, useRef, useState } from 'react';
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
import { Link, Route, Router, Switch, useLocation } from 'wouter';
import { Toaster } from '@/components/ui/toaster';
import heroBackdrop from '@assets/heroback_1790416036994.jpg';
import footerLogo from '@assets/footer_1790418113742.png';
import logoTopbar from '@assets/topbarlogo_1790416925834.png';
import manufacturingPhoto from './assets/industry-manufacturing.jpg';
import agriculturePhoto from './assets/industry-agriculture.jpg';
import logisticsPhoto from './assets/industry-logistics.jpg';
import constructionPhoto from './assets/industry-construction.jpg';
import professionalServicesPhoto from './assets/industry-professional-services.jpg';
import { AboutPage, ContactPage, IndustriesPage } from './pages/InnerPages';
import { SolutionsPage } from './pages/SolutionsPage';
import { AccessibilityPage, NotFoundPage, PrivacyPage, TermsPage, ThankYouPage } from './pages/SupportingPages';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'ROSALOGIC | Business Systems & Technology',
    description: 'ROSALOGIC designs, builds, and operates software systems for organizations with complex operations.',
  },
  '/solutions': {
    title: 'Custom Business Software | ROSALOGIC',
    description: 'ROSALOGIC designs and builds custom business software for operational businesses, with integration, deployment, and support for the systems it builds.',
  },
  '/industries': {
    title: 'Industries We Serve | ROSALOGIC',
    description: 'ROSALOGIC works with manufacturing, agriculture, logistics, construction, and professional services organizations.',
  },
  '/about': {
    title: 'About ROSALOGIC | Systems, Engineered',
    description: 'Learn how ROSALOGIC approaches dependable business systems with efficiency, control, reliability, and longevity.',
  },
  '/contact': {
    title: 'Contact ROSALOGIC | Business Systems & Technology',
    description: 'Tell ROSALOGIC what your operation needs from software, data, and technology.',
  },
  '/privacy': {
    title: 'Privacy Policy | ROSALOGIC',
    description: 'Learn how ROSALOGIC handles website information and inquiries.',
  },
  '/terms': {
    title: 'Terms of Use | ROSALOGIC',
    description: 'Read the terms for using the ROSALOGIC website.',
  },
  '/accessibility': {
    title: 'Accessibility Statement | ROSALOGIC',
    description: 'Learn about ROSALOGIC’s website accessibility goals and how to report a barrier.',
  },
  '/404': {
    title: 'Page Not Found | ROSALOGIC',
    description: 'The requested ROSALOGIC page could not be found.',
  },
  '/thank-you': {
    title: 'Contact Confirmation | ROSALOGIC',
    description: 'Information about contacting ROSALOGIC and message confirmations.',
  },
};

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

const operatingPrinciples = [
  { number: '01', title: 'EFFICIENCY', description: 'Reduce friction.' },
  { number: '02', title: 'CONTROL', description: 'Connect information.' },
  { number: '03', title: 'RELIABILITY', description: 'Build systems people trust.' },
  { number: '04', title: 'LONGEVITY', description: 'Create systems that evolve.' },
];

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  const closeMenu = () => setMenuOpen(false);
  const [location] = useLocation();

  return (
    <header className={location === '/solutions' ? 'site-header site-header-solutions' : 'site-header'}>
      <div className="container-wide header-inner">
        <Link className="brand-link" href="/" onClick={closeMenu} data-testid="link-home-logo">
          <img
            className="header-logo-image"
            src={location === '/solutions' ? footerLogo : logoTopbar}
            alt="ROSALOGIC — Business Systems & Technology"
            width="1000"
            height="120"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={location === item.href ? 'page' : undefined} data-testid={`link-nav-${item.label.toLowerCase()}`}>
              {item.label}
            </Link>
          ))}
        </nav>
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
            <Link key={item.href} href={item.href} onClick={closeMenu} aria-current={location === item.href ? 'page' : undefined} data-testid={`link-mobile-${item.label.toLowerCase()}`}>
              {item.label}
            </Link>
          ))}
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
        <h1 id="hero-title" className="display-heading hero-title" tabIndex={-1}>
          <span className="headline-line">Software and technology</span>{' '}
          <span className="headline-line">for the systems your</span>{' '}
          <em className="headline-line">business depends on.</em>
        </h1>
        <p className="hero-copy">
          ROSALOGIC designs, builds, and operates software systems for organizations with complex operations.
        </p>
        <div className="hero-actions">
          <Link className="button-solid" href="/solutions" data-testid="link-hero-solutions">
            Explore solutions <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link className="button-line" href="/contact" data-testid="link-hero-contact">
            Contact page <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
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
            The systems behind <em>the work.</em>
          </h2>
          <p className="intro-copy">
            Explore how purpose-built software, connected information, and dependable technology can support
            the work your organization relies on.
          </p>
        </div>
        <div className="capability-grid" aria-label="ROSALOGIC capability areas">
          {capabilities.map(({ title, Icon, copy }) => (
            <article className="capability-card" key={title}>
              <Icon size={30} strokeWidth={1.35} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
              <Link href="/solutions" aria-label={`Learn more about ${title}`} data-testid={`link-capability-${title.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                Learn more <ArrowRight size={13} aria-hidden="true" />
              </Link>
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
          <Link className="industry-link" href="/industries" data-testid="link-industries-learn-more">
            Learn more <ArrowRight size={13} aria-hidden="true" />
          </Link>
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

function AboutSection() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="container-wide about-grid">
        <div>
          <p className="eyebrow intro-eyebrow">About ROSALOGIC</p>
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
            <span>Engineered for the operation</span>
          </div>
        </div>
      </div>
      <ol className="container-wide about-principles" aria-label="ROSALOGIC operating principles">
        {operatingPrinciples.map(({ number, title, description }) => (
          <li className="about-principle" key={number}>
            <span className="about-principle-number">{number}</span>
            <div className="about-principle-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="cta-section" aria-labelledby="contact-title">
      <div className="container-wide cta-inner">
        <div>
          <p className="eyebrow intro-eyebrow eyebrow-light">Contact</p>
          <h2 id="contact-title" className="display-heading cta-title">
            Where could your operation <em>perform better?</em>
          </h2>
        </div>
        <div>
          <p className="cta-copy">
            The right system starts with understanding the operation, defining the architecture, and building around the work.
          </p>
          <div className="cta-button-wrap">
            <Link className="button-solid" href="/contact" data-testid="link-contact-page-cta">
              View contact page <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
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
          <Link className="footer-logo-link" href="/" data-testid="link-footer-logo">
            <img
              className="footer-logo-image"
              src={footerLogo}
              alt="ROSALOGIC — Business Systems & Technology"
              width="1000"
              height="120"
            />
          </Link>
        </div>
        <nav className="footer-group" aria-label="Footer navigation">
          <h2>Navigate</h2>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} data-testid={`link-footer-${item.label.toLowerCase()}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-group">
          <h2>Information</h2>
          <Link href="/contact" data-testid="link-footer-contact">Contact page <span aria-hidden="true">↗</span></Link>
          <Link href="/privacy" data-testid="link-footer-privacy">Privacy Policy</Link>
          <Link href="/terms" data-testid="link-footer-terms">Terms of Use</Link>
          <Link href="/accessibility" data-testid="link-footer-accessibility">Accessibility Statement</Link>
        </div>
        <div className="footer-group footer-contact">
          <h2>Contact details</h2>
          <a href="mailto:contact@rosalogic.com" data-testid="link-footer-email">contact@rosalogic.com</a>
        </div>
      </div>
      <div className="container-wide footer-bottom">
        <span>© {new Date().getFullYear()} ROSALOGIC. All rights reserved.</span>
        <span>Systems, engineered.</span>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <IndustriesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const previousLocation = useRef(location);

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

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
    if (previousLocation.current !== location) {
      document.querySelector<HTMLElement>('#main-content h1')?.focus({ preventScroll: true });
      previousLocation.current = location;
    }

    const metadata = pageMetadata[location] ?? {
      title: 'Page Not Found | ROSALOGIC',
      description: 'The requested ROSALOGIC page could not be found.',
    };
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', window.location.href);
    document.querySelector('meta[name="twitter:url"]')?.setAttribute('content', window.location.href);
    document.querySelector('meta[name="robots"]')?.setAttribute(
      'content',
      location === '/404' || location === '/thank-you' || !pageMetadata[location] ? 'noindex, follow' : 'index, follow',
    );
  }, [location]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content" data-testid="link-skip-content">
        Skip to content
      </a>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main-content">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/solutions" component={SolutionsPage} />
          <Route path="/industries" component={IndustriesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/accessibility" component={AccessibilityPage} />
          <Route path="/404" component={NotFoundPage} />
          <Route path="/thank-you" component={ThankYouPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Router base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <SiteLayout />
      </Router>
      <Toaster />
    </>
  );
}

export default App;