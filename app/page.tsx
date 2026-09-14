'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, LockKeyhole, Menu, Search, ShieldCheck, Sparkles, UserRound, X } from 'lucide-react'
import './showroom.css'

const cars = [
  { name: 'Aurelia GT', type: 'Grand Tourer', price: '$248,500', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=88' },
  { name: 'Corsa R', type: 'Track Edition', price: '$319,900', image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=88' },
  { name: 'Nocturne', type: 'Electric Coupe', price: '$185,000', image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=88' },
]

export default function Home() {
  const [activeCar, setActiveCar] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [inquiryOpen, setInquiryOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'customer' | 'admin'>('customer')
  const car = cars[activeCar]
  const next = () => setActiveCar((activeCar + 1) % cars.length)
  const previous = () => setActiveCar((activeCar + cars.length - 1) % cars.length)
  const openAuth = (mode: 'customer' | 'admin') => { setAuthMode(mode); setAuthOpen(true) }

  return (
    <main className="site-shell">
      <section className="hero" style={{ backgroundImage: `url(${car.image})` }}>
        <div className="hero-overlay" />
        <header className="nav">
          <a className="brand" href="#top" aria-label="Veloura Motors home"><span>V</span> VELOURA <small>MOTORS</small></a>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a><a href="#experience" onClick={() => setMenuOpen(false)}>The Experience</a><a href="#security" onClick={() => setMenuOpen(false)}>Security</a>
          </nav>
          <div className="nav-actions"><button className="icon-button" aria-label="Search"><Search /></button><button className="login-button" onClick={() => openAuth('customer')}><UserRound /> Sign in</button><button className="outline-button" onClick={() => setInquiryOpen(true)}>Book a viewing <ArrowUpRight /></button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button></div>
        </header>
        <div className="hero-content" id="top"><p className="eyebrow"><span /> The art of the drive</p><h1>Drive<br /><em>different.</em></h1><p className="hero-copy">A curated collection of extraordinary automobiles for those who see the road as a canvas.</p><div className="hero-cta"><button className="solid-button" onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}>Explore the collection <ArrowUpRight /></button></div></div>
        <div className="hero-footer"><span>0{activeCar + 1} — 03</span><div className="progress"><i style={{ width: `${((activeCar + 1) / cars.length) * 100}%` }} /></div><div className="hero-controls"><button onClick={previous} aria-label="Previous car"><ChevronLeft /></button><button onClick={next} aria-label="Next car"><ChevronRight /></button></div></div>
      </section>

      <section className="intro" id="experience"><div className="section-kicker">01 <span /> Our philosophy</div><div className="intro-grid"><h2>Not just a car.<br /><em>A point of view.</em></h2><div><p className="lead">We believe the right automobile does more than move you. It reveals something about you.</p><p>Veloura Motors is a private showroom for the rare, the remarkable, and the beautifully engineered. Every vehicle is hand-selected, meticulously prepared, and ready for its next chapter.</p><a className="text-link" href="#security">Our security promise <ArrowUpRight /></a></div></div></section>

      <section className="collection" id="collection"><div className="collection-heading"><div><div className="section-kicker">02 <span /> The collection</div><h2>Chosen <em>without</em><br /> compromise.</h2></div><div className="collection-note">A considered selection of modern icons and future classics.<br />Available for private viewing by appointment.</div></div><div className="car-grid">{cars.map((item, index) => <article className={`car-card ${index === activeCar ? 'featured' : ''}`} key={item.name} onClick={() => setActiveCar(index)}><div className="car-image" style={{ backgroundImage: `url(${item.image})` }}><span className="car-index">0{index + 1}</span><span className="arrow-circle"><ArrowUpRight /></span></div><div className="car-meta"><div><h3>{item.name}</h3><p>{item.type}</p></div><strong>{item.price}</strong></div></article>)}</div><div className="collection-bottom"><span>Scroll to explore</span><div className="line" /><a className="text-link" href="#collection">View all vehicles <ArrowUpRight /></a></div></section>

      <section className="promise" id="security"><div className="promise-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=88)' }} /><div className="promise-copy"><div className="section-kicker">03 <span /> The Veloura standard</div><h2>Exceptional,<br /><em>by design.</em></h2><p>From the first conversation to the moment you take the wheel, every detail is considered.</p><div className="standards"><div><ShieldCheck /><span><b>Curated quality</b><small>Every vehicle inspected by our specialists.</small></span></div><div><Sparkles /><span><b>Personal service</b><small>A tailored experience, from start to finish.</small></span></div></div><button className="solid-button dark" onClick={() => setInquiryOpen(true)}>Begin a conversation <ArrowUpRight /></button></div></section>

      <section className="security-panel"><div><div className="section-kicker">04 <span /> Protected by design</div><h2>Private access.<br /><em>Clear boundaries.</em></h2><p>This showroom includes a polished security experience for customer and staff flows. Sign-in screens, role-aware entry points, and security guidance are demonstrated here.</p></div><div className="security-grid"><button onClick={() => openAuth('customer')}><UserRound /><span><b>Customer sign in</b><small>Demo email, password, and Google entry point</small></span><ArrowUpRight /></button><button onClick={() => openAuth('admin')}><LockKeyhole /><span><b>Admin portal</b><small>Role-gated interface preview for staff</small></span><ArrowUpRight /></button></div></section>

      <footer className="footer"><a className="brand" href="#top"><span>V</span> VELOURA <small>MOTORS</small></a><p>Extraordinary cars.<br />Considered differently.</p><div className="footer-links"><a href="#collection">Collection</a><a href="#experience">About Veloura</a><a href="#security">Security</a><button onClick={() => openAuth('admin')}>Staff access</button></div><small>© 2026 Veloura Motors</small></footer>

      {inquiryOpen && <div className="modal-backdrop" role="presentation" onClick={() => setInquiryOpen(false)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="inquiry-title" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setInquiryOpen(false)} aria-label="Close"><X /></button><div className="section-kicker">Private appointments <span /></div><h2 id="inquiry-title">Make it <em>yours.</em></h2><p>Tell us a little about yourself and our concierge will be in touch.</p><form onSubmit={(e) => { e.preventDefault(); setInquiryOpen(false) }}><input required placeholder="Your name" aria-label="Your name" /><input required type="email" placeholder="Email address" aria-label="Email address" /><select defaultValue={car.name} aria-label="Vehicle of interest">{cars.map((item) => <option key={item.name}>{item.name}</option>)}</select><button className="solid-button" type="submit">Request an appointment <ArrowUpRight /></button></form></div></div>}
      {authOpen && <div className="modal-backdrop" role="presentation" onClick={() => setAuthOpen(false)}><div className="modal auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setAuthOpen(false)} aria-label="Close"><X /></button><div className="auth-mark"><LockKeyhole /></div><div className="section-kicker">{authMode === 'admin' ? 'Restricted staff area' : 'Private member access'} <span /></div><h2 id="auth-title">{authMode === 'admin' ? <>Staff <em>portal.</em></> : <>Welcome <em>back.</em></>}</h2><p>Secure access is shown for demonstration. No credentials are collected or transmitted in this showcase.</p><form onSubmit={(e) => { e.preventDefault(); setAuthOpen(false) }}><input type="email" required placeholder="Email address" aria-label="Email address" /><input type="password" required placeholder="Password" aria-label="Password" /><button className="solid-button" type="submit">Continue securely <ArrowUpRight /></button></form><div className="auth-divider"><span /> or <span /></div><button className="google-button" onClick={() => setAuthOpen(false)}>Continue with Google</button><small className="demo-note">Demo only — production authentication requires a configured identity provider, database, rate limiting, MFA, and server-side authorization.</small></div></div>}
    </main>
  )
}
