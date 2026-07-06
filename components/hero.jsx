// Hero only — topbar/ticker moved to app.jsx

const { useState, useEffect, useRef } = React;

const Hero = () => {
  return (
    <section className="hero">
      <TopoLines className="topo"/>
      <div className="grid">
        <div>
          <div className="laser-eyebrow">
            <span className="laser-dot"></span>
            Namibia's first 3D mobile scanning service · Est. 2025 · Now expanding 2026
          </div>
          <h1 className="display home-hero-h1" style={{marginTop: 20}}>
            <span className="laser-word laser-word--burn">Scan.</span>{' '}
            <span className="laser-word laser-word--burn">Print.</span>{' '}
            <em className="laser-italic">Cut.</em><br/>
            <em className="laser-italic">Engrave.</em>{' '}
            <span className="laser-word laser-word--burn">Source.</span>
          </h1>
          <p className="lede">
            The full fabrication cycle from one Windhoek workshop — 3D scan, reverse-engineer, 3D print,
            laser cut, engrave, custom stickers, and direct imports from 23 countries. Sub-millimetre accuracy throughout.
          </p>
          <p className="lede" style={{marginTop: 16, fontSize: 16, opacity: 0.85}}>
            <strong style={{color:'var(--ochre)'}}>New for 2026:</strong> Laser cutting &amp; engraving — plus custom sticker printing.
          </p>
          <div className="hero-actions" style={{marginTop: 36}}>
            <a href="#/scanning" className="btn primary">Explore 3D scanning <span className="arrow">→</span></a>
            <a href="#/cut-engrave" className="btn ghost">Cut &amp; Engrave (Soon)</a>
          </div>
          <div className="meta-row">
            <div className="stat">
              <span className="mono" style={{opacity:0.6}}>Value</span>
              <b style={{fontSize: 22}}>Honest</b>
            </div>
            <div className="stat">
              <span className="mono" style={{opacity:0.6}}>Value</span>
              <b style={{fontSize: 22}}>Transparent</b>
            </div>
            <div className="stat">
              <span className="mono" style={{opacity:0.6}}>Value</span>
              <b style={{fontSize: 22}}>Open</b>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="spec-card">
            <div className="coords">
              -22.5609° S<br/>17.0658° E<br/>WDH · 1655m
            </div>
            <div className="tag">Recent scan · Creality CR-Scan Raptor</div>
            <h3>Car panel cover · Scanned & reprinted</h3>
            <div className="viewer" style={{display:'flex', alignItems:'center', justifyContent:'center', background:'transparent'}}>
              <img src="assets/scan-part.png" alt="Scanned car part — original and 3D printed replica" style={{width:'80%', height:'auto', maxHeight:'100%', objectFit:'contain', position:'relative', zIndex:1, borderRadius:8}}/>
              <div className="scan-line" style={{zIndex:3}}/>
            </div>
            <div className="specs">
              <div><span>Original</span><b>Car panel cover</b></div>
              <div><span>Accuracy</span><b>± 0.02 mm</b></div>
              <div><span>Method</span><b>Scan → print</b></div>
              <div><span>Scan time</span><b>15 min</b></div>
              <div><span>Material</span><b>ABS · Yellow</b></div>
              <div><span>Status</span><b style={{color:'var(--teal-bright)'}}>● Delivered</b></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
