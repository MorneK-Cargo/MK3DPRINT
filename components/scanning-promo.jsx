// Scanning-focused components — the star of the site

// Full-width scanning promo banner for homepage (between hero and services)
const ScanPromo = () => (
  <section style={{background:'var(--ink)', color:'var(--bone)', padding:'64px 40px', position:'relative', overflow:'hidden'}}>
    <TopoLines className="topo" seed={18} style={{opacity:'calc(0.2 * var(--pattern))'}}/>
    <div style={{maxWidth:1440, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:40, position:'relative', zIndex:2}} className="scan-promo-grid">
      <div style={{gridColumn:'span 2'}}>
        <div className="mono" style={{color:'var(--teal-bright)', marginBottom:12}}>FIRST IN NAMIBIA</div>
        <h2 style={{fontFamily:'var(--f-display)', fontSize:'clamp(36px, 4.5vw, 56px)', fontWeight:500, letterSpacing:'-0.03em', lineHeight:1, marginBottom:20}}>
          Professional 3D scanning<br/>now available locally.
        </h2>
        <p style={{fontSize:17, color:'rgba(244,237,222,0.75)', maxWidth:600, lineHeight:1.6, marginBottom:28}}>
          No more shipping parts overseas for digitisation. Our Creality CR-Scan Raptor captures sub-millimetre detail
          right here in Windhoek — from tiny bolts to full automotive panels. Walk in with an object, walk out with a production-ready 3D file.
        </p>
        <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          <a href="#/scanning" style={{display:'inline-flex', alignItems:'center', gap:8, background:'var(--teal)', color:'var(--ink)', padding:'14px 24px', borderRadius:999, fontWeight:600, fontSize:14, textDecoration:'none'}}>
            See scanning capabilities →
          </a>
          <a href="#/contact" style={{display:'inline-flex', alignItems:'center', gap:8, border:'1px solid rgba(244,237,222,0.3)', color:'var(--bone)', padding:'14px 24px', borderRadius:999, fontSize:14, textDecoration:'none'}}>
            Get a scan quote
          </a>
        </div>
      </div>
      <div style={{display:'grid', gap:12}}>
        {[
          ['±0.02 mm','Accuracy','Metrology-grade precision'],
          ['60 fps','Scan speed','Blue-light rapid capture'],
          ['5 – 2000 mm³','Object range','Bolts to body panels'],
          ['Marker-less','Technology','IR structured-light + speckle'],
        ].map(([val, label, desc]) => (
          <div key={label} style={{background:'rgba(244,237,222,0.04)', border:'1px solid rgba(244,237,222,0.1)', borderRadius:14, padding:'16px 20px'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:4}}>
              <span style={{fontFamily:'var(--f-display)', fontSize:22, fontWeight:500}}>{val}</span>
              <span className="mono" style={{fontSize:9, color:'rgba(244,237,222,0.45)', letterSpacing:'0.14em'}}>{label}</span>
            </div>
            <div style={{fontSize:12, color:'rgba(244,237,222,0.55)'}}>{desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Extended scanning section for the dedicated scanning page
const ScanningFull = () => {
  const specs = [
    {label:'Accuracy', value:'±0.02 mm', desc:'Metrology-grade precision for manufacturing-ready models'},
    {label:'Resolution', value:'0.02 – 2 mm', desc:'Adjustable point-cloud density for any application'},
    {label:'Scan Speed', value:'Up to 60 fps', desc:'Fast capture in blue-light mode for efficient workflows'},
    {label:'Working Range', value:'150 – 1000 mm', desc:'Flexible distance modes for objects of any size'},
    {label:'Object Size', value:'5 mm – 2000 mm³', desc:'From small components to large assemblies'},
    {label:'Output Formats', value:'STL · OBJ · PLY', desc:'Compatible with all major CAD and 3D printing software'},
  ];

  const applications = [
    {
      id:'auto', title:'Automotive 3D Scanning',
      desc:'Capture precise 3D scans of engine blocks, brake calipers, body panels, and custom parts. Ideal for restoration projects, aftermarket part development, and quality inspection.',
      img:'assets/scanning-automotive-crop.png',
      benefits:['Engine & drivetrain scanning','Custom part reproduction','Damage assessment & repair','Aftermarket fitment verification'],
    },
    {
      id:'reverse', title:'Reverse Engineering',
      desc:'Turn any physical object into a precise digital 3D model. Perfect for reproducing legacy parts with no existing drawings, improving designs, or creating CAD from hand-made prototypes.',
      img:'assets/scanning-reverse-eng.png',
      benefits:['Legacy part reproduction','CAD model generation','Design improvement & iteration','Replacement part manufacturing'],
    },
    {
      id:'art', title:'Art & Collectibles Scanning',
      desc:'Digitise sculptures, figurines, trophies, and collectible items with sub-millimetre accuracy. Perfect for archiving, reproducing, or scaling art pieces and custom designs.',
      img:'assets/scanning-art.png',
      benefits:['Sculpture & figurine digitisation','Trophy & award reproduction','Scale model creation','Digital archiving & preservation'],
    },
  ];

  const scanExamples = [
    {title:'Auto Parts', cat:'Automotive', desc:'Precision scanning of automotive components for reverse engineering, manufacturing, and quality assurance.', caps:['OEM specifications','Manufacturing ready','CAD integration']},
    {title:'Art & Collectibles', cat:'Creative', desc:'Digitise trophies, sculptures, figurines, and decorative items for reproduction, scaling, or digital archiving.', caps:['Sub-mm detail','Scale reproduction','Digital preservation']},
    {title:'Reverse Engineering', cat:'Manufacturing', desc:'Complex mechanical assemblies scanned to exact specifications for replication, improvement, and CAD documentation.', caps:['Full assembly capture','Tolerance analysis','Production CAD']},
    {title:'Art & Heritage', cat:'Cultural', desc:'Preserve sculptures, artefacts, and architectural elements as accurate digital models for restoration and archiving.', caps:['Non-contact capture','Sub-mm fidelity','Digital preservation']},
    {title:'Consumer Products', cat:'Product design', desc:'Scan packaging, moulds, housings and consumer goods for rapid iteration and quality comparison against original CAD.', caps:['Surface comparison','Mould checking','Rapid iteration']},
    {title:'Jewellery & Small Parts', cat:'Precision', desc:'The Raptor captures intricate detail at 5×5×5 mm³ minimum — rings, clasps, watch components, dental crowns.', caps:['Micro-detail capture','Wax model scanning','Casting-ready output']},
  ];

  const howItWorks = [
    {n:'01', title:'Submit request', desc:'Fill out the form or WhatsApp us with your scanning needs — photos of the object help us quote accurately.'},
    {n:'02', title:'Consultation & quote', desc:'We confirm details (size, accuracy, output format) and provide a fixed-price quote — no surprises.'},
    {n:'03', title:'Scanning session', desc:'Bring the object to the workshop or we come to you. Scanning takes 15 minutes to 2 hours depending on complexity.'},
    {n:'04', title:'Processing & delivery', desc:'We clean, align, and export your 3D model in STL, OBJ, PLY or STEP — delivered digitally, often same day.'},
  ];

  const caps = [
    'Small to medium objects: jewellery, mechanical parts, household items, sculptures',
    'Complex geometries: intricate details, curved surfaces, hard-to-measure components',
    'Reverse engineering: create CAD models from existing parts for reproduction or modification',
    'Quality control: compare manufactured parts against original designs',
    'Digital archiving: preserve physical objects as accurate digital models',
    'Works with various materials: plastic, metal, wood, ceramic, stone',
  ];

  return (
    <>
      {/* Hero-level intro */}
      <section style={{background:'var(--ink)', color:'var(--bone)', padding:'80px 40px 60px', position:'relative', overflow:'hidden'}}>
        <TopoLines className="topo" seed={19} style={{opacity:'calc(0.2 * var(--pattern))'}}/>
        <div style={{maxWidth:1440, margin:'0 auto', position:'relative', zIndex:2}}>
          <div className="mono" style={{color:'var(--teal-bright)', marginBottom:16}}>NAMIBIA'S ONLY DEDICATED 3D SCANNING SERVICE</div>
          <p style={{fontSize:20, color:'rgba(244,237,222,0.8)', maxWidth:700, lineHeight:1.6, marginBottom:40}}>
            Convert your physical objects into precise digital 3D models. Perfect for manufacturing, reverse engineering,
            quality control, and rapid prototyping — all done locally in Windhoek.
          </p>

          {/* Quick feature cards */}
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}} className="scan-feat-grid">
            {[
              ['Precision','High-accuracy 3D models suitable for manufacturing and CAD workflows'],
              ['Quick turnaround','Fast processing with standard, express, and high-resolution scan options'],
              ['Multiple formats','Output in STL, OBJ, PLY, and CAD-ready formats for any application'],
            ].map(([t,d]) => (
              <div key={t} style={{background:'rgba(244,237,222,0.04)', border:'1px solid rgba(244,237,222,0.1)', borderRadius:18, padding:28}}>
                <div style={{width:48, height:48, borderRadius:14, background:'rgba(43,207,199,0.12)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16}}>
                  <span style={{color:'var(--teal-bright)', fontSize:24}}>◎</span>
                </div>
                <h3 style={{fontFamily:'var(--f-display)', fontSize:22, fontWeight:500, marginBottom:8}}>{t}</h3>
                <p style={{fontSize:14, color:'rgba(244,237,222,0.65)', lineHeight:1.5}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs grid */}
      <section style={{padding:'80px 40px', background:'var(--paper-2)', position:'relative', overflow:'hidden'}}>
        <TopoLines className="topo" seed={20}/>
        <div style={{maxWidth:1440, margin:'0 auto'}}>
          <div className="section-head">
            <div>
              <div className="label">Scanner specifications</div>
              <h2>CR-Scan Raptor<br/>tech specs.</h2>
            </div>
            <div className="desc">Professional-grade specifications for precision scanning. Adjustable modes handle everything from 5 mm jewellery to 2-metre assemblies.</div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}} className="spec-grid-full">
            {specs.map((s, i) => (
              <div key={i} style={{background:'var(--paper)', border:'1px solid var(--line)', borderRadius:18, padding:28}}>
                <div className="mono" style={{fontSize:10, color:'var(--char-2)', opacity:0.6, letterSpacing:'0.14em', marginBottom:8}}>{s.label}</div>
                <div style={{fontFamily:'var(--f-display)', fontSize:36, fontWeight:500, letterSpacing:'-0.02em', color:'var(--ink)', marginBottom:10}}>{s.value}</div>
                <p style={{fontSize:14, color:'var(--char-2)', lineHeight:1.5}}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Formats + uses */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:16}} className="format-grid">
            <div style={{background:'var(--paper)', border:'1px solid var(--line)', borderRadius:18, padding:28}}>
              <div className="label" style={{marginBottom:16}}>Export formats</div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
                {[['STL','3D Printing'],['OBJ','CAD / Modelling'],['PLY','Point Cloud'],['STEP','Engineering']].map(([f,u]) => (
                  <div key={f} style={{display:'flex', alignItems:'center', gap:12, padding:'10px 0'}}>
                    <span style={{fontFamily:'var(--f-mono)', fontSize:14, fontWeight:600, color:'var(--teal-deep)', width:48}}>{f}</span>
                    <span style={{fontSize:14, color:'var(--char-2)'}}>{u}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{background:'var(--paper)', border:'1px solid var(--line)', borderRadius:18, padding:28}}>
              <div className="label" style={{marginBottom:16}}>What we can scan</div>
              <ul style={{listStyle:'none'}}>
                {caps.map((c,i) => (
                  <li key={i} style={{display:'flex', gap:10, padding:'8px 0', fontSize:14, color:'var(--char-2)', lineHeight:1.5}}>
                    <span style={{color:'var(--teal-deep)', flexShrink:0}}>◆</span><span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{padding:'80px 40px', position:'relative', overflow:'hidden'}}>
        <TopoLines className="topo" seed={21}/>
        <div style={{maxWidth:1440, margin:'0 auto'}}>
          <div className="section-head">
            <div>
              <div className="label">Process</div>
              <h2>From object to<br/>digital model.</h2>
            </div>
            <div className="desc">Simple four-step process. Most scans are completed and delivered within 24 hours.</div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:1, background:'var(--line)', border:'1px solid var(--line)'}} className="how-grid">
            {howItWorks.map((s) => (
              <div key={s.n} style={{background:'var(--paper)', padding:'40px 28px 56px', position:'relative', minHeight:260}}>
                <div style={{fontFamily:'var(--f-display)', fontSize:52, fontWeight:500, letterSpacing:'-0.03em', color:'var(--teal-deep)', lineHeight:1}}>{s.n}</div>
                <h4 style={{fontFamily:'var(--f-display)', fontSize:22, fontWeight:500, marginTop:16, letterSpacing:'-0.01em'}}>{s.title}</h4>
                <p style={{fontSize:14, color:'var(--char-2)', marginTop:10, lineHeight:1.5}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional applications */}
      <section style={{padding:'80px 40px', background:'var(--ink)', color:'var(--bone)', position:'relative', overflow:'hidden'}}>
        <TopoLines className="topo" seed={23} style={{opacity:'calc(0.2 * var(--pattern))'}}/>
        <div style={{maxWidth:1440, margin:'0 auto'}}>
          <div className="section-head" style={{borderBottomColor:'rgba(244,237,222,0.12)'}}>
            <div>
              <div className="label" style={{color:'var(--teal-bright)'}}>Industry applications</div>
              <h2 style={{color:'var(--bone)'}}>Who uses<br/>3D scanning?</h2>
            </div>
            <div className="desc" style={{color:'rgba(244,237,222,0.7)'}}>From garages to hospitals — precision scanning solves problems across every industry. Here's how Namibian businesses are already using it.</div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}} className="app-grid">
            {applications.map((a) => (
              <div key={a.id} style={{background:'var(--char-2)', borderRadius:16, overflow:'hidden', border:'1px solid rgba(244,237,222,0.08)'}}>
                <div style={{height:200, overflow:'hidden'}}>
                  <img src={a.img} alt={a.title} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
                </div>
                <div style={{padding:24}}>
                  <h3 style={{fontFamily:'var(--f-display)', fontSize:22, fontWeight:500, marginBottom:8}}>{a.title}</h3>
                  <p style={{fontSize:13.5, color:'rgba(244,237,222,0.65)', lineHeight:1.5, marginBottom:16}}>{a.desc}</p>
                  <div style={{paddingTop:14, borderTop:'1px solid rgba(244,237,222,0.1)'}}>
                    {a.benefits.map((b, j) => (
                      <div key={j} style={{display:'flex', gap:10, padding:'6px 0', fontSize:13, color:'rgba(244,237,222,0.8)'}}>
                        <span style={{color:'var(--teal-bright)'}}>✓</span><span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scanning examples grid */}
      <section style={{padding:'80px 40px', background:'var(--paper-2)', position:'relative', overflow:'hidden'}}>
        <TopoLines className="topo" seed={22}/>
        <div style={{maxWidth:1440, margin:'0 auto'}}>
          <div className="section-head">
            <div>
              <div className="label">Use cases</div>
              <h2>Scanning capabilities<br/>& examples.</h2>
            </div>
            <div className="desc">See what we can scan and digitise. From precision industrial parts to delicate artefacts, our scanner handles it all.</div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}} className="example-grid">
            {scanExamples.map((ex, i) => (
              <div key={i} style={{background:'var(--paper)', border:'1px solid var(--line)', borderRadius:16, padding:28}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'start', marginBottom:16}}>
                  <span style={{fontFamily:'var(--f-display)', fontSize:20, fontWeight:500}}>{ex.title}</span>
                  <span style={{padding:'4px 12px', borderRadius:999, background:'var(--teal)', color:'white', fontFamily:'var(--f-mono)', fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase'}}>{ex.cat}</span>
                </div>
                <p style={{fontSize:14, color:'var(--char-2)', lineHeight:1.5, marginBottom:18}}>{ex.desc}</p>
                <div style={{paddingTop:14, borderTop:'1px solid var(--line)'}}>
                  {ex.caps.map((c, j) => (
                    <div key={j} style={{display:'flex', gap:10, padding:'5px 0', fontSize:13, color:'var(--char-2)'}}>
                      <span style={{color:'var(--teal-deep)', fontWeight:600}}>✓</span><span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'var(--teal-deep)', color:'white', padding:'64px 40px', textAlign:'center', position:'relative', overflow:'hidden'}}>
        <TopoLines className="topo" seed={24} style={{opacity:'calc(0.15 * var(--pattern))'}}/>
        <div style={{maxWidth:700, margin:'0 auto'}}>
          <h2 style={{fontFamily:'var(--f-display)', fontSize:'clamp(36px, 5vw, 56px)', fontWeight:500, letterSpacing:'-0.03em', lineHeight:1, marginBottom:20}}>Ready to digitise?</h2>
          <p style={{fontSize:17, opacity:0.85, lineHeight:1.6, marginBottom:32}}>
            Send us a photo or description of what you need scanned. We'll reply with a fixed-price quote — usually within hours.
          </p>
          <div style={{display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap'}}>
            <a href="#/contact" style={{display:'inline-flex', alignItems:'center', gap:8, background:'white', color:'var(--teal-deep)', padding:'16px 28px', borderRadius:999, fontWeight:600, fontSize:15, textDecoration:'none'}}>
              Request a scan quote →
            </a>
            <a href="https://wa.me/264836750117?text=Hi%2C%20I%20need%20a%203D%20scan%20quote" target="_blank" rel="noopener" style={{display:'inline-flex', alignItems:'center', gap:8, border:'1px solid rgba(255,255,255,0.5)', color:'white', padding:'16px 28px', borderRadius:999, fontSize:15, textDecoration:'none'}}>
              WhatsApp us directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { ScanPromo, ScanningFull });
