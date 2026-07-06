// App shell with hash routing

const { useState, useEffect } = React;

const ROUTES = {
  '': { comp: 'HomePage', label: 'Home' },
  'services': { comp: 'ServicesPage', label: 'Services' },
  'scanning': { comp: 'ScanningPage', label: 'Scanning' },
  'imports': { comp: 'ImportsPage', label: 'Imports' },
  'shop': { comp: 'ShopPage', label: 'Shop' },
  'about': { comp: 'AboutPage', label: 'About' },
  'contact': { comp: 'ContactPage', label: 'Contact' },
  '3d-printing': { comp: 'PrintingPagePublic', label: '3D Printing' },
  'cut-engrave': { comp: 'LaserPagePublic', label: 'Cut & Engrave', soon: true },
};

const Topbar = ({ route, go }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="topbar">
        <a href="#/" onClick={e=>{e.preventDefault(); go(''); setMenuOpen(false);}} className="brand">
          <img src="assets/mk-logo-trans.png" alt="MK 3D Printing"/>
          <div className="loc">Windhoek · Namibia</div>
        </a>
        <nav className="nav">
          {['services','3d-printing','scanning','cut-engrave','imports','shop','about'].map(k => (
            <a key={k} href={`#/${k}`} onClick={e=>{e.preventDefault(); go(k);}}
               className={(route===k ? 'active' : '') + (ROUTES[k].soon ? ' nav--soon' : '')}
               style={route===k ? {background:'var(--paper-2)'} : {}}>
              {ROUTES[k].label}
              {ROUTES[k].soon && <span className="nav-soon-badge">Coming Soon</span>}
            </a>
          ))}
          <a href="#/contact" onClick={e=>{e.preventDefault(); go('contact');}} className="cta">Request a quote →</a>
        </nav>
        {/* Hamburger — only visible on mobile */}
        <button className="hamburger" onClick={()=>setMenuOpen(o=>!o)} aria-label="Menu" style={{display:'none', flexDirection:'column', gap:5, padding:8, borderRadius:8, border:'1px solid var(--line-strong)', background:'transparent', cursor:'pointer'}}>
          <span style={{display:'block', width:22, height:2, background:'var(--ink)', borderRadius:2, transition:'all .2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}}></span>
          <span style={{display:'block', width:22, height:2, background:'var(--ink)', borderRadius:2, transition:'all .2s', opacity: menuOpen ? 0 : 1}}></span>
          <span style={{display:'block', width:22, height:2, background:'var(--ink)', borderRadius:2, transition:'all .2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'}}></span>
        </button>
      </header>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div style={{position:'fixed', top:73, left:0, right:0, background:'rgba(246,242,234,0.97)', backdropFilter:'blur(16px)', borderBottom:'1px solid var(--line)', zIndex:49, padding:'16px 20px 24px', display:'flex', flexDirection:'column', gap:4}}>
          {['services','3d-printing','scanning','cut-engrave','imports','shop','about','contact'].map(k => (
            <a key={k} href={`#/${k}`} onClick={e=>{e.preventDefault(); go(k); setMenuOpen(false);}}
               style={{padding:'14px 16px', fontSize:16, fontWeight:500, borderRadius:10, background: route===k ? 'var(--paper-2)' : 'transparent', color:'var(--ink)', display:'flex', alignItems:'center', justifyContent:'space-between', textTransform:'capitalize'}}>
              <span>{ROUTES[k].label}</span>
              {ROUTES[k].soon && <span style={{fontFamily:'var(--f-mono)', fontSize:9, letterSpacing:'0.12em', padding:'3px 8px', borderRadius:6, background:'var(--ochre)', color:'#fff', textTransform:'uppercase', fontWeight:600}}>Coming Soon</span>}
            </a>
          ))}
          <a href="#/contact" onClick={e=>{e.preventDefault(); go('contact'); setMenuOpen(false);}} style={{marginTop:8, padding:'14px 20px', background:'var(--ink)', color:'var(--bone)', borderRadius:999, textAlign:'center', fontWeight:600, fontSize:14}}>Request a quote →</a>
        </div>
      )}
    </>
  );
};

const Ticker = () => {
  const items = ['Scan · Print · Cut · Engrave · Source', 'Est. 2025 · Namibia’s first 3D scanning workshop', 'New July 2026 — Laser cutting, engraving & custom stickers', 'Creality CR-Scan Raptor · IR structured-light', 'xTool M2 Deluxe — arriving July 2026', 'Imports from 23 countries · USA · EU · Asia', 'WhatsApp +264 83 675 0117', 'MK 3D Printing and Investments CC · Windhoek'];
  return (
    <div className="ticker">
      <div className="track">{items.concat(items).map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  );
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "desert",
  "density": 1.0,
  "pattern": 1.0
}/*EDITMODE-END*/;

const PALETTES = {
  desert: { '--ochre':'#C5772A', '--rust':'#9B3B1E', '--teal':'#1BA7A0', '--teal-deep':'#0E7A76', '--teal-bright':'#2FCFC7', '--paper':'#F6F2EA', '--paper-2':'#EBE4D4', '--ink':'#0C1E2C' },
  savanna:{ '--ochre':'#B8631E', '--rust':'#7A2E12', '--teal':'#2A7F78', '--teal-deep':'#1A5C56', '--teal-bright':'#47B8B1', '--paper':'#F2EADB', '--paper-2':'#E5D7BE', '--ink':'#1B2418' },
  coast:  { '--ochre':'#D4935A', '--rust':'#6E3A2A', '--teal':'#2487A3', '--teal-deep':'#0D6B87', '--teal-bright':'#5CC7DD', '--paper':'#EEF1F0', '--paper-2':'#DAE0DD', '--ink':'#0A1A24' },
  dusk:   { '--ochre':'#E88B3A', '--rust':'#B94526', '--teal':'#2FCFC7', '--teal-deep':'#18928C', '--teal-bright':'#5FE8E1', '--paper':'#17120E', '--paper-2':'#221A14', '--ink':'#F4EDDE' },
};

const Tweaks = () => {
  const [on, setOn] = useState(false);
  const [state, setState] = useState(TWEAK_DEFAULTS);
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setOn(true);
      if (e.data?.type === '__deactivate_edit_mode') setOn(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);
  useEffect(() => {
    const pal = PALETTES[state.palette] || PALETTES.desert;
    const root = document.documentElement;
    Object.entries(pal).forEach(([k,v]) => root.style.setProperty(k, v));
    if (state.palette === 'dusk') {
      root.style.setProperty('--char', '#F4EDDE');
      root.style.setProperty('--char-2', '#D8CDB8');
      root.style.setProperty('--bone', '#0C1E2C');
      root.style.setProperty('--line', 'rgba(244,237,222,0.15)');
      root.style.setProperty('--line-strong', 'rgba(244,237,222,0.3)');
    } else {
      root.style.setProperty('--char', '#161D23');
      root.style.setProperty('--char-2', '#232B33');
      root.style.setProperty('--bone', '#F4EDDE');
      root.style.setProperty('--line', 'rgba(12, 30, 44, 0.12)');
      root.style.setProperty('--line-strong', 'rgba(12, 30, 44, 0.25)');
    }
    root.style.setProperty('--density', state.density);
    root.style.setProperty('--pattern', state.pattern);
  }, [state]);
  const update = (patch) => {
    const next = {...state, ...patch};
    setState(next);
    window.parent.postMessage({type:'__edit_mode_set_keys', edits: patch}, '*');
  };
  return (
    <div className={'tw' + (on ? ' on' : '')}>
      <h5>◆ Tweaks</h5>
      <div className="field">
        <label>Palette</label>
        <div className="sw-row">
          {Object.keys(PALETTES).map(p => (
            <button key={p} className={state.palette === p ? 'on' : ''} onClick={() => update({palette: p})}>{p}</button>
          ))}
        </div>
      </div>
      <div className="field">
        <label>Density · {Number(state.density).toFixed(2)}</label>
        <input type="range" min="0.7" max="1.3" step="0.05" value={state.density} onChange={e=>update({density: +e.target.value})}/>
      </div>
      <div className="field">
        <label>Pattern intensity · {Number(state.pattern).toFixed(2)}</label>
        <input type="range" min="0" max="1.5" step="0.05" value={state.pattern} onChange={e=>update({pattern: +e.target.value})}/>
      </div>
    </div>
  );
};

const SiteFooter = ({ go }) => (
  <footer style={{background:'var(--ink)', color:'var(--bone)', padding:'48px 40px 32px'}}>
    <div style={{maxWidth:1440, margin:'0 auto', display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:40, marginBottom:40}} className="footer-grid">
      <div>
        <div style={{fontFamily:'var(--f-display)', fontSize:18, fontWeight:500, color:'var(--teal-bright)'}}>MK 3D Printing</div>
        <div style={{fontSize:13, color:'rgba(244,237,222,0.6)', marginTop:6}}>Scan · Print · Build</div>
        <div style={{fontSize:13, color:'rgba(244,237,222,0.5)', marginTop:10, maxWidth:280}}>Precision 3D Printing &amp; Manufacturing Solutions in Windhoek, Namibia.</div>
      </div>
      <div>
        <div className="mono" style={{color:'var(--teal-bright)', marginBottom:12}}>Browse models</div>
        {[['Yeggi','https://www.yeggi.com'],['Printables','https://www.printables.com'],['MakerWorld','https://makerworld.com']].map(([n,u]) => <a key={n} href={u} target="_blank" rel="noopener" style={{display:'block', fontSize:13, color:'rgba(244,237,222,0.7)', padding:'4px 0'}}>{n} ↗</a>)}
      </div>
      <div>
        <div className="mono" style={{color:'var(--teal-bright)', marginBottom:12}}>Quick links</div>
        {['services','3d-printing','scanning','cut-engrave','imports','shop','about','contact'].map(k => (
          <a key={k} href={`#/${k}`} onClick={e=>{e.preventDefault(); go(k);}} style={{display:'flex', alignItems:'center', gap:8, fontSize:13, color:'rgba(244,237,222,0.7)', padding:'4px 0', textTransform:'capitalize'}}>
            <span>{ROUTES[k].label}</span>
            {ROUTES[k].soon && <span style={{fontFamily:'var(--f-mono)', fontSize:8, letterSpacing:'0.12em', padding:'2px 6px', borderRadius:4, background:'var(--ochre)', color:'#fff', textTransform:'uppercase', fontWeight:600}}>Soon</span>}
          </a>
        ))}
      </div>
      <div>
        <div className="mono" style={{color:'var(--teal-bright)', marginBottom:12}}>Contact</div>
        <a href="mailto:info@mk3dprint.org" style={{display:'block', fontSize:13, color:'rgba(244,237,222,0.7)', padding:'4px 0'}}>info@mk3dprint.org</a>
        <a href="https://wa.me/264836750117" target="_blank" rel="noopener" style={{display:'block', fontSize:13, color:'rgba(244,237,222,0.7)', padding:'4px 0'}}>+264 83 675 0117</a>
        <div style={{fontSize:13, color:'rgba(244,237,222,0.5)', padding:'4px 0'}}>Windhoek, Namibia</div>
        <div style={{display:'flex', gap:10, marginTop:12}}>
          <a href={window.SOCIALS.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="foot-soc">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href={window.SOCIALS.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="foot-soc">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"></rect><circle cx="12" cy="12" r="4.5"></circle><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"></circle></svg>
          </a>
        </div>
      </div>
    </div>
    <div style={{paddingTop:20, borderTop:'1px solid rgba(244,237,222,0.1)', fontFamily:'var(--f-mono)', fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(244,237,222,0.4)', textAlign:'center'}}>© 2026 mk3dprint.org · MK 3D Printing and Investments CC</div>
  </footer>
);

const App = () => {
  const parseHash = () => (window.location.hash.replace(/^#\/?/, '').split('/')[0] || '').toLowerCase();
  const [route, setRoute] = useState(() => localStorage.getItem('mk-route') || parseHash() || '');

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    if (!window.location.hash && route) window.location.hash = '/' + route;
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    localStorage.setItem('mk-route', route);
    if (window.location.hash.replace(/^#\/?/, '').split('/')[0] !== route) {
      window.location.hash = route ? '/' + route : '/';
    }
    window.scrollTo({top:0, behavior:'instant'});
    const t = setTimeout(() => window.__initReveal && window.__initReveal(), 80);
    return () => clearTimeout(t);
  }, [route]);

  const go = (r) => setRoute(r);

  const key = route in ROUTES ? route : '';
  const CompName = ROUTES[key].comp;
  const Comp = window[CompName];

  return (
    <>
      <Topbar route={key} go={go}/>
      <Ticker/>
      <div key={key} style={{animation:'fadeIn .4s ease'}}>
        {Comp ? <Comp/> : null}
      </div>
      <SiteFooter go={go}/>
      <FloatSocial/>
      <BackToTop/>
      <Tweaks/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
