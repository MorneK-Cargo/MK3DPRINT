// UX enhancements: floating social stack, back-to-top, FAQ accordion,
// before/after slider, scroll-reveal init

// ⚠️ Update these to your real page URLs
window.SOCIALS = {
  facebook: 'https://www.facebook.com/share/1Cu5FTntTm/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/mk3dprint_',
};

const WAIconPath = "M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.483 2.031 7.788L0 32l8.463-2.031A15.921 15.921 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.381 19.419c-.406-.206-2.4-1.188-2.775-1.325-.375-.137-.65-.206-.925.206-.275.406-1.063 1.325-1.306 1.594-.238.275-.481.306-.887.1-.406-.206-1.719-.631-3.269-2.019-1.206-1.075-2.019-2.406-2.256-2.813-.238-.406-.025-.625.175-.825.181-.181.406-.481.606-.719.206-.238.275-.406.413-.681.137-.275.069-.512-.031-.719-.1-.206-.925-2.212-1.263-3.031-.331-.8-.669-.688-.925-.7-.238-.013-.512-.013-.787-.013s-.719.1-1.094.512c-.375.413-1.438 1.4-1.438 3.419s1.475 3.969 1.681 4.244c.206.275 2.906 4.431 7.031 6.213.981.425 1.75.681 2.344.875.987.319 1.881.275 2.588.169.787-.119 2.4-.975 2.738-1.919.337-.944.337-1.75.238-1.919-.1-.169-.375-.275-.781-.481z";

const FloatSocial = () => (
  <div className="float-stack">
    <a className="float-btn fb" href={window.SOCIALS.facebook} target="_blank" rel="noopener" aria-label="Facebook">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      <span className="tip">Follow on Facebook</span>
    </a>
    <a className="float-btn ig" href={window.SOCIALS.instagram} target="_blank" rel="noopener" aria-label="Instagram">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5"></rect>
        <circle cx="12" cy="12" r="4.5"></circle>
        <circle cx="17.6" cy="6.4" r="1.1" fill="white" stroke="none"></circle>
      </svg>
      <span className="tip">Follow on Instagram</span>
    </a>
    <a className="float-btn wa" href="https://wa.me/264836750117?text=Hi%2C%20I%27m%20interested%20in%20your%203D%20printing%20services" target="_blank" rel="noopener" aria-label="WhatsApp">
      <svg viewBox="0 0 32 32" fill="white" width="26" height="26"><path d={WAIconPath}></path></svg>
      <span className="tip">Chat on WhatsApp</span>
    </a>
  </div>
);

const BackToTop = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button className={'btt' + (show ? ' show' : '')} aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
  );
};

// Accordion — dark styling for ink sections
const FAQ = ({ items }) => {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{q}</span><span className="ic">+</span>
          </button>
          <div className="faq-a"><div><p>{a}</p></div></div>
        </div>
      ))}
    </div>
  );
};

// Draggable before/after comparison
const BeforeAfter = ({ before, after, labelBefore = 'Before', labelAfter = 'After', ratio = '520/430' }) => {
  const [pos, setPos] = React.useState(50);
  return (
    <div className="ba" style={{ aspectRatio: ratio }}>
      <img src={after} alt={labelAfter} draggable="false"/>
      <div className="ba-clip" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={labelBefore} draggable="false"/>
      </div>
      <div className="ba-bar" style={{ left: pos + '%' }}><div className="ba-knob">⇄</div></div>
      <span className="ba-tag" style={{ left: 14 }}>{labelBefore}</span>
      <span className="ba-tag" style={{ right: 14 }}>{labelAfter}</span>
      <input type="range" min="0" max="100" step="0.5" value={pos} aria-label="Comparison slider"
             onChange={e => setPos(+e.target.value)}/>
    </div>
  );
};

// Scroll-reveal: called by App on every route change
window.__initReveal = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const targets = document.querySelectorAll(
    '.section-head, .service, .shop-item, .feat-grid > a, .orig-grid > a, .imp-cats > a, .step, .mat-row, .faq-item'
  );
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px' });
  targets.forEach(el => {
    if (el.classList.contains('in')) return;
    el.classList.add('reveal');
    io.observe(el);
  });
};

Object.assign(window, { FloatSocial, BackToTop, FAQ, BeforeAfter });
