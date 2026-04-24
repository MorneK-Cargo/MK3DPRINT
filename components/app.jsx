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
};

const Topbar = ({ route, go }) => (
  <header className="topbar">
    <a href="#/" onClick={e=>{e.preventDefault(); go('');}} className="brand">
      <img src="assets/mk-logo-trans.png" alt="MK 3D Printing"/>
      <div className="loc">Windhoek · Namibia</div>
    </a>
    <nav className="nav">
      {['services','scanning','imports','shop','about'].map(k => (
        <a key={k} href={`#/${k}`} onClick={e=>{e.preventDefault(); go(k);}} className={route===k ? 'active' : ''} style={route===k ? {background:'var(--paper-2)'} : {}}>{ROUTES[k].label}</a>
      ))}
      <a href="#/contact" onClick={e=>{e.preventDefault(); go('contact');}} className="cta">Request a quote →</a>
    </nav>
  </header>
);

const Ticker = () => {
  const items = ['Scan · Print · Build', 'Creality CR-Scan Raptor — IR structured-light', 'Imports from 23 countries · USA · EU · Asia', '2 – 3 week import delivery', 'WhatsApp +264 83 675 0117', 'MK 3D Printing and Investments CC · Windhoek'];
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

const FloatWA = () => (
  <a href="https://wa.me/264836750117?text=Hi%2C%20I%27m%20interested%20in%20your%203D%20printing%20services" target="_blank" rel="noopener"
     style={{position:'fixed', bottom: 24, left: 24, width: 56, height: 56, borderRadius: '50%', background: '#25D366', display:'flex', alignItems:'center', justifyContent:'center', boxShadow: '0 10px 30px rgba(0,0,0,0.25)', zIndex: 90, transition: 'transform .2s'}}>
    <svg viewBox="0 0 32 32" fill="white" width="26" height="26">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.483 2.031 7.788L0 32l8.463-2.031A15.921 15.921 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.381 19.419c-.406-.206-2.4-1.188-2.775-1.325-.375-.137-.65-.206-.925.206-.275.406-1.063 1.325-1.306 1.594-.238.275-.481.306-.887.1-.406-.206-1.719-.631-3.269-2.019-1.206-1.075-2.019-2.406-2.256-2.813-.238-.406-.025-.625.175-.825.181-.181.406-.481.606-.719.206-.238.275-.406.413-.681.137-.275.069-.512-.031-.719-.1-.206-.925-2.212-1.263-3.031-.331-.8-.669-.688-.925-.7-.238-.013-.512-.013-.787-.013s-.719.1-1.094.512c-.375.413-1.438 1.4-1.438 3.419s1.475 3.969 1.681 4.244c.206.275 2.906 4.431 7.031 6.213.981.425 1.75.681 2.344.875.987.319 1.881.275 2.588.169.787-.119 2.4-.975 2.738-1.919.337-.944.337-1.75.238-1.919-.1-.169-.375-.275-.781-.481z"/>
    </svg>
  </a>
);

const SiteFooter = ({ go }) => (
  <footer style={{background:'var(--ink)', color:'var(--bone)', padding:'48px 40px 32px'}}>
    <div style={{maxWidth:1440, margin:'0 auto', display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:40, marginBottom:40}}>
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
        {['services','scanning','imports','shop','about','contact'].map(k => <a key={k} href={`#/${k}`} onClick={e=>{e.preventDefault(); go(k);}} style={{display:'block', fontSize:13, color:'rgba(244,237,222,0.7)', padding:'4px 0', textTransform:'capitalize'}}>{k}</a>)}
      </div>
      <div>
        <div className="mono" style={{color:'var(--teal-bright)', marginBottom:12}}>Contact</div>
        <a href="mailto:info@mk3dprint.org" style={{display:'block', fontSize:13, color:'rgba(244,237,222,0.7)', padding:'4px 0'}}>info@mk3dprint.org</a>
        <a href="https://wa.me/264836750117" target="_blank" rel="noopener" style={{display:'block', fontSize:13, color:'rgba(244,237,222,0.7)', padding:'4px 0'}}>+264 83 675 0117</a>
        <div style={{fontSize:13, color:'rgba(244,237,222,0.5)', padding:'4px 0'}}>Windhoek, Namibia</div>
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
      <FloatWA/>
      <Tweaks/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
