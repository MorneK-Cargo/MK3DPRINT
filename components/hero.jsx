// Hero only — topbar/ticker moved to app.jsx

const { useState, useEffect, useRef } = React;

const Hero = () => {
  return (
    <section className="hero">
      <TopoLines className="topo"/>
      <div className="grid">
        <div>
          <div className="eyebrow">Namibia's first 3D scanning service — since 2020</div>
          <h1 className="display" style={{marginTop: 20}}>
            <span className="teal">Scan</span> the real.<br/>
            <em>Print</em> the precise.<br/>
            Source the rest.
          </h1>
          <p className="lede">
            The only dedicated 3D scanning workshop in Namibia. We digitise physical objects with sub-millimetre accuracy using
            the Creality CR-Scan Raptor — then print, replicate, or reverse-engineer them right here in Windhoek.
          </p>
          <p className="lede" style={{marginTop: 16, fontSize: 16, opacity: 0.85}}>
            Also: affordable product imports from 23 countries, delivered in 2–3 weeks.
          </p>
          <div className="hero-actions" style={{marginTop: 36}}>
            <a href="#/scanning" className="btn primary">Explore 3D scanning <span className="arrow">→</span></a>
            <a href="#/contact" className="btn ghost">Request a quote</a>
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
