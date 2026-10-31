import { AnimatedText } from './AnimatedText'
import { useState } from 'react'
import { profile } from '../data/profile'

const jumpLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Hero() {
  const [hasPortrait, setHasPortrait] = useState(Boolean(profile.portraitSrc))
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="hero-meta type-label"><span>Hey there, I’m</span><span>Creative / professional</span><span>{profile.location}</span></div>
    <AnimatedText as="h1" id="hero-title" className="hero-name">Shruti <em>Khisa</em></AnimatedText>
    <nav className="hero-jump-nav" aria-label="Jump to a page section">
      <span className="eyebrow">Explore</span>
      {jumpLinks.map((item, index) => <a key={item.href} href={item.href}><span>0{index + 1}</span>{item.label}<b aria-hidden="true">↗</b></a>)}
    </nav>
    <div className="hero-portrait-wrap motion-fade-up">
      <div className="hero-portrait-glow" aria-hidden="true" />
      <div className="hero-portrait surface-glass surface-glass--raised">
        {hasPortrait && profile.portraitSrc ? <img src={profile.portraitSrc} alt={profile.portraitAlt} width="800" height="1000" decoding="async" onError={() => setHasPortrait(false)} /> : <div className="portrait-empty" aria-label="Portrait placeholder"><span>Portrait<br />coming soon</span></div>}
        <span className="portrait-stamp">SK<br /><b>✦</b></span>
      </div>
      <span className="portrait-tag tag-top">Currently making<br />meaningful work</span>
      <span className="portrait-tag tag-bottom">Scroll to meet<br />the person behind it</span>
    </div>
    <div className="hero-scroll" aria-hidden="true"><span /> Scroll to explore</div>
  </section>
}