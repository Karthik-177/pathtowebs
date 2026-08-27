'use client';

import { FormEvent, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  Database,
  ExternalLink,
  Layers3,
  Menu,
  Monitor,
  MoveUpRight,
  PenTool,
  Server,
  Settings2,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

const services = [
  { number: '01', icon: PenTool, title: 'Website Design & UI/UX', text: 'Clean, intuitive digital experiences that make your business easy to understand and use.' },
  { number: '02', icon: Monitor, title: 'Front-end Development', text: 'Responsive, fast, accessible interfaces built for modern browsers and every screen.' },
  { number: '03', icon: Code2, title: 'Back-end & Full-stack', text: 'APIs, databases, authentication, and application logic that power your product.' },
  { number: '04', icon: Layers3, title: 'Static & Dynamic Websites', text: 'The right solution for your requirement, from a focused landing page to a complete web app.' },
  { number: '05', icon: Server, title: 'Deployment & Hosting', text: 'We take your project live with domains, SSL, hosting, and production infrastructure.' },
  { number: '06', icon: Settings2, title: 'Maintenance & Support', text: 'Updates, troubleshooting, improvements, and technical support beyond launch.' },
];

const process = [
  { number: '01', title: 'Understand', text: 'We learn about your business, audience, goals, and requirements.' },
  { number: '02', title: 'Plan', text: 'We define the structure, features, design direction, and technical approach.' },
  { number: '03', title: 'Design & Build', text: 'We create the interface and develop everything the experience needs.' },
  { number: '04', title: 'Deploy', text: 'We take the finished product live with the right production setup.' },
  { number: '05', title: 'Support', text: 'We stay available for improvements, maintenance, and troubleshooting.' },
];

const tech = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'REST APIs', 'SQL', 'MongoDB', 'Git', 'AWS'];
const team = [
  { name: 'Yeshwan', role: 'PathToWebs team' },
  { name: 'Teja', role: 'PathToWebs team' },
  { name: 'Kartik', role: 'PathToWebs team' },
  { name: 'Lahari', role: 'PathToWebs team' },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <header className="site-header">
        <div className="nav-wrap">
          <button className="brand" onClick={() => navigate('top')} aria-label="PathToWebs home">
            <img src="/image.png" alt="PathToWebs" />
          </button>
          <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
            {['services', 'work', 'process', 'about', 'contact'].map((item) => (
              <button key={item} onClick={() => navigate(item)}>{item[0].toUpperCase() + item.slice(1)}</button>
            ))}
            <button className="nav-cta" onClick={() => navigate('contact')}>Start a Project <ArrowRight size={16} /></button>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid page-width">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Hyderabad, India · Building for everywhere</div>
            <h1>We Build.<br /><em>You Grow.</em></h1>
            <p className="hero-lede">End-to-end web development for businesses, founders, and ideas — from first sketch to live product.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => navigate('contact')}>Start a Project <ArrowRight size={17} /></button>
              <button className="text-button" onClick={() => navigate('work')}>View our work <MoveUpRight size={16} /></button>
            </div>
            <div className="hero-trail"><span>IDEA</span><i /> <span>DESIGN</span><i /> <span>BUILD</span><i /> <span>LIVE</span></div>
          </div>
          <div className="hero-visual" aria-label="From idea to live product">
            <div className="visual-topline"><span>PATH / 001</span><span className="live-dot"><b /> LIVE SYSTEM</span></div>
            <div className="visual-core">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="core-mark"><Zap size={30} strokeWidth={1.6} /><span>BUILD<br />BETTER</span></div>
              <div className="node node-a"><span>01</span><strong>IDEA</strong><small>the starting point</small></div>
              <div className="node node-b"><span>02</span><strong>DESIGN</strong><small>make it clear</small></div>
              <div className="node node-c"><span>03</span><strong>CODE</strong><small>make it work</small></div>
              <div className="node node-d"><span>04</span><strong>DEPLOY</strong><small>make it live</small></div>
            </div>
            <div className="visual-footer"><span>ONE TEAM / FULL JOURNEY</span><ArrowDownRight size={18} /></div>
          </div>
        </div>
        <div className="hero-bottom page-width"><span>One team. From first idea to live product.</span><span>Design <i /> Development <i /> Deployment <i /> Support</span></div>
      </section>

      <section className="section services-section" id="services">
        <div className="page-width">
          <div className="section-heading"><div><span className="section-number">01 / WHAT WE DO</span><h2>Everything you need<br /><em>to build for the web.</em></h2></div><p>From a simple business website to a complete web application, we handle the technology end to end.</p></div>
          <div className="service-grid">{services.map(({ number, icon: Icon, title, text }) => <article className="service-card" key={number}><div className="service-card-top"><span>{number}</span><Icon size={22} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div>
        </div>
      </section>

      <section className="section compare-section">
        <div className="page-width"><div className="section-heading"><div><span className="section-number">02 / FIND YOUR FIT</span><h2>Not sure what<br /><em>you need?</em></h2></div><p>That&apos;s okay. Tell us what you&apos;re trying to build. We&apos;ll help you choose the right technical approach.</p></div>
          <div className="compare-grid"><article className="compare-card"><div className="compare-label">A focused foundation <span>01</span></div><h3>Static<br /><em>website</em></h3><p>Perfect for getting your business, idea, or personal brand online with speed and clarity.</p><div className="check-list"><span><Check size={15} /> Business websites</span><span><Check size={15} /> Landing pages</span><span><Check size={15} /> Portfolios & brands</span></div><div className="pill-row"><b>Fast</b><b>Lightweight</b><b>Secure</b></div></article><article className="compare-card compare-dark"><div className="compare-label">A product that grows <span>02</span></div><h3>Dynamic<br /><em>web application</em></h3><p>For products that need accounts, data, custom workflows, and room to scale.</p><div className="check-list"><span><Check size={15} /> Dashboards & admin panels</span><span><Check size={15} /> APIs & databases</span><span><Check size={15} /> Custom workflows</span></div><div className="pill-row"><b>Interactive</b><b>Scalable</b><b>Custom</b></div></article></div>
          <div className="compare-cta"><span>Don&apos;t see yourself in a box?</span><button className="button button-outline" onClick={() => navigate('contact')}>Tell us what you&apos;re building <ArrowRight size={17} /></button></div>
        </div>
      </section>

      <section className="section dark-section process-section" id="process">
        <div className="page-width"><div className="section-heading light-heading"><div><span className="section-number">03 / OUR APPROACH</span><h2>From idea<br /><em>to live website.</em></h2></div><p>PathToWebs takes you all the way. No hand-offs, no hunting for five different people to get your product live.</p></div>
          <div className="process-grid">{process.map(({ number, title, text }, index) => <article className="process-step" key={number}><div className="process-top"><span>{number}</span>{index < process.length - 1 && <div className="process-line" />}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section why-section"><div className="page-width why-layout"><div className="why-intro"><span className="section-number">04 / WHY PATHToWEBS</span><h2>Technology is<br /><em>better with humans.</em></h2><p>We know the technical side. We also know that a great project starts with listening, honest communication, and finding the simplest path forward.</p></div><div className="why-list">{['End-to-end', 'Reasonable approach', 'Built for your requirement', 'Human communication', 'Support beyond launch'].map((item, i) => <div className="why-item" key={item}><span>0{i + 1}</span><strong>{item}</strong><ArrowUpRight size={19} /></div>)}</div></div></section>

      <section className="section work-section" id="work"><div className="page-width"><div className="section-heading"><div><span className="section-number">05 / SELECTED WORK</span><h2>Work we&apos;ve<br /><em>built together.</em></h2></div><p>A look at the digital experiences and products we&apos;re building at PathToWebs. New work is on the way.</p></div><div className="work-grid"><article className="work-card work-placeholder large"><div className="work-card-meta"><span>01 / COMING SOON</span><ExternalLink size={18} /></div><div className="placeholder-art"><div className="placeholder-window"><span /><span /><span /><div /></div></div><div><h3>Your next project</h3><p>Website / Web application</p></div></article><article className="work-card work-placeholder"><div className="work-card-meta"><span>02 / AVAILABLE SPACE</span><ExternalLink size={18} /></div><div className="placeholder-art light-art"><div className="grid-lines" /><Sparkles size={25} /></div><div><h3>Project name</h3><p>Case study coming soon</p></div></article><article className="work-card work-placeholder"><div className="work-card-meta"><span>03 / AVAILABLE SPACE</span><ExternalLink size={18} /></div><div className="placeholder-art accent-art"><div className="accent-circle" /></div><div><h3>Project name</h3><p>Case study coming soon</p></div></article></div></div></section>

      <section className="section tech-section"><div className="page-width tech-layout"><div><span className="section-number">06 / THE TOOLBOX</span><h2>Built with the<br /><em>right technology.</em></h2><p>We choose the technology based on what your project actually needs — not the other way around.</p></div><div className="tech-cloud">{tech.map((item, i) => <span key={item} className={i === 3 || i === 7 || i === 11 ? 'tech-tag featured' : 'tech-tag'}>{item}</span>)}</div></div></section>

      <section className="section about-section" id="about"><div className="page-width"><div className="about-layout"><div><span className="section-number">07 / BEHIND THE BRAND</span><h2>Four people.<br /><em>One technology team.</em></h2></div><div className="about-copy"><p>PathToWebs was created to help people and businesses move their ideas into the digital world through practical, modern technology.</p><p>We&apos;re a small team that cares about doing the work properly, explaining things clearly, and staying useful after launch.</p></div></div><div className="team-grid">{team.map((person, i) => <div className="team-member" key={person.name}><div className={'avatar avatar-' + i}><span>{person.name.slice(0, 1)}</span></div><strong>{person.name}</strong><small>{person.role}</small></div>)}</div></div></section>

      <section className="section contact-section" id="contact"><div className="page-width contact-layout"><div className="contact-intro"><span className="section-number">08 / START A CONVERSATION</span><h2>Have an idea?<br /><em>Let&apos;s build it.</em></h2><p>Tell us what you&apos;re trying to build. We&apos;ll help you figure out the right approach and the next step.</p><div className="contact-links"><a href="mailto:hello@pathtowebs.com">hello@pathtowebs.com <ArrowUpRight size={16} /></a><span>Hyderabad, India · Serving everywhere</span></div></div><form className="contact-form" onSubmit={submitForm}>{submitted ? <div className="success-message"><div><Check size={25} /></div><h3>Thanks — we&apos;ve got it.</h3><p>Your project details are with us. We&apos;ll get back to you shortly.</p><button type="button" className="text-button" onClick={() => setSubmitted(false)}>Send another enquiry <ArrowRight size={16} /></button></div> : <><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label></div><label>What do you need?<select required name="need" defaultValue=""><option value="" disabled>Choose an option</option><option>Website design & development</option><option>Web application</option><option>Deployment & hosting</option><option>Something else</option></select></label><label>Tell us about it<textarea required name="message" placeholder="A few words about your idea, business, or challenge..." rows={5} /></label><div className="form-bottom"><small>We&apos;ll reply with a thoughtful next step — not a sales pitch.</small><button className="button button-dark" type="submit">Send enquiry <ArrowRight size={17} /></button></div></>}</form></div></section>

      <footer className="site-footer"><div className="page-width footer-grid"><div className="footer-brand"><img src="/image.png" alt="PathToWebs" /><p>End-to-end web development and IT solutions for businesses, founders, and ideas.</p><span>We Build. You Grow.</span></div><div className="footer-column"><strong>Explore</strong><button onClick={() => navigate('services')}>Services</button><button onClick={() => navigate('work')}>Work</button><button onClick={() => navigate('process')}>Process</button><button onClick={() => navigate('about')}>About</button></div><div className="footer-column"><strong>Connect</strong><a href="mailto:hello@pathtowebs.com">Email us</a><a href="#contact">WhatsApp</a><a href="#contact">LinkedIn</a><a href="#contact">Instagram</a></div><div className="footer-mark"><Compass size={42} strokeWidth={1} /><span>IDEA<br />TO<br />LIVE</span></div></div><div className="page-width footer-bottom"><span>© 2026 PathToWebs. All rights reserved.</span><span>Made for the next idea.</span></div></footer>
    </main>
  );
}
