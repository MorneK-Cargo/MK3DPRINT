// 3D Printing — dedicated page with same energy as Cut & Engrave
// Materials, machine spotlight, capabilities, process, CTA

const PRINTING_MATERIALS = [
  { kind: 'pla',  name: 'PLA',       use: 'Prototypes, decor, miniatures',      strength: 'Medium',  detail: 'High' },
  { kind: 'petg', name: 'PETG',      use: 'Functional parts, outdoor use',     strength: 'High',    detail: 'High' },
  { kind: 'abs',  name: 'ABS',       use: 'Automotive, replacement parts',     strength: 'Very high', detail: 'Medium' },
  { kind: 'tpu',  name: 'TPU (Flex)', use: 'Flexible parts, gaskets, grips',    strength: 'Flexible', detail: 'Medium' },
  { kind: 'wood', name: 'Wood-filled', use: 'Décor, signage, art pieces',       strength: 'Medium',  detail: 'High' },
  { kind: 'silk', name: 'Silk PLA',  use: 'Premium gifts, display models',     strength: 'Medium',  detail: 'High' },
];

const PRINTING_USES = [
  { id:'replace', cat:'Most popular', title:'Replacement & spare parts',
    img:'assets/printing/gear-replacement.png',
    body:'Broken plastic gear, clip, knob, bracket, cover? Send a photo on WhatsApp — we scan or model it, then 3D print a replacement.',
    items:['Appliance gears', 'Car interior clips', 'Cabinet brackets', 'Custom mounts'] },
  { id:'proto', cat:'Engineering', title:'Prototypes & R&D',
    img:'assets/printing/prototype-iterations.png',
    body:'From rapid concept models to functional prototypes — iterate fast without industrial tooling costs.',
    items:['Functional prototypes', 'Form-fit testing', 'Concept models', 'Engineering proofs'] },
  { id:'custom', cat:'Personalised', title:'Custom designs & gifts',
    img:'assets/printing/sheep-holders.png',
    body:'Photo-to-print trophies, custom figurines, personalised desk pieces, novelty homeware. Send the idea — we design and print it.',
    items:['Photo trophies', 'Name plaques', 'Custom figurines', 'Novelty homeware'] },
  { id:'hobby', cat:'Maker & Hobby', title:'Models, miniatures & cosplay',
    img:'assets/printing/warhammer-mini.png',
    body:'Tabletop minis, scale models, cosplay armour pieces, scenery — printed to display-grade detail.',
    items:['Tabletop minis', 'Scale models', 'Cosplay props', 'Display pieces'] },
];

// ════════════════════════════════════════════════════════════════
// HERO
// ════════════════════════════════════════════════════════════════
const PrintingHero = () => {
  const { LaserBgBeam } = window;
  return (
    <section className="laser-hero">
      <LaserBgBeam variant="hero"/>
      <div className="laser-hero__grid">
        <div className="laser-hero__copy">
          <div className="laser-eyebrow">
            <span className="laser-dot"></span>
            Service · Live since 2025 · Bambu Lab P1S
          </div>
          <h1 className="laser-hero__h1">
            <span className="laser-word laser-word--burn">Print.</span>{' '}
            <span className="laser-word laser-word--burn">Prototype.</span>{' '}
            <em className="laser-italic">Replace.</em>
            <br/>
            <span className="laser-hero__sub">
              From idea to part — in days.
            </span>
          </h1>
          <p className="laser-hero__lede">
            Precision 3D printing from one Windhoek workshop. Replacement parts, functional prototypes,
            custom designs, scale models — six filament types, layer-by-layer accuracy, honest pricing.
          </p>
          <div className="laser-hero__stats">
            <div className="laser-stat"><b>0.1mm</b><span>Layer resolution</span></div>
            <div className="laser-stat"><b>256mm³</b><span>Max build volume</span></div>
            <div className="laser-stat"><b>6 types</b><span>Filament materials</span></div>
            <div className="laser-stat"><b>1–5 days</b><span>Typical lead time</span></div>
          </div>
        </div>

        {/* Visual */}
        <div className="laser-hero__visual">
          <div className="laser-machine-card">
            <div className="laser-machine-card__chrome">
              <span className="laser-machine-card__dot"></span>
              <span className="laser-machine-card__dot"></span>
              <span className="laser-machine-card__dot"></span>
              <span className="laser-machine-card__title">Bambu Lab · Live</span>
            </div>
            <div className="laser-machine-card__stage print-stage print-stage--video">
              <video
                src="assets/printing/product-video.mp4"
                autoPlay muted loop playsInline
                style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}
              ></video>
            </div>
            <div className="laser-machine-card__readout">
              <div><span>Material</span><b>PLA · Grey</b></div>
              <div><span>Layer</span><b>0.16mm</b></div>
              <div><span>Speed</span><b>500 mm/s</b></div>
              <div><span>Status</span><b className="laser-pulse">● Printing</b></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ════════════════════════════════════════════════════════════════
// MATERIALS
// ════════════════════════════════════════════════════════════════
const PrintingMaterials = () => (
  <section className="laser-materials">
    <div className="laser-materials__head">
      <div className="laser-eyebrow"><span className="laser-dot"></span>Six filaments. One workshop.</div>
      <h2 className="laser-h2">The right <em className="laser-italic">material</em> for the job.</h2>
      <p className="laser-h2__sub">
        We stock the most useful filaments for everyday Namibian conditions — heat tolerance, UV resistance, flexibility,
        and finish. Choose based on what your part has to do.
      </p>
    </div>

    <div className="laser-materials__grid">
      {PRINTING_MATERIALS.map((m, i) => (
        <div key={i} className="laser-matcard print-matcard">
          <div className="laser-matcard__top">
            <div className={`print-mat-icon print-mat-icon--${m.kind}`}>
              <div className="print-mat-icon__spool"></div>
            </div>
            <span className="laser-matcard__name">{m.name}</span>
          </div>
          <div className="laser-matcard__row">
            <span>Strength</span><b className="laser-active">{m.strength}</b>
          </div>
          <div className="laser-matcard__row">
            <span>Detail</span><b className="laser-active">{m.detail}</b>
          </div>
          <div className="laser-matcard__desc">{m.use}</div>
        </div>
      ))}
    </div>
  </section>
);

// ════════════════════════════════════════════════════════════════
// MACHINE
// ════════════════════════════════════════════════════════════════
const PrintingMachine = () => (
  <section className="laser-machine" id="printing-machine">
    <div className="laser-machine__bg">
      <div className="laser-machine__bg-glow laser-machine__bg-glow--1"></div>
      <div className="laser-machine__bg-glow laser-machine__bg-glow--2"></div>
      <div className="laser-machine__bg-grid"></div>
    </div>

    <div className="laser-machine__head">
      <div className="laser-eyebrow"><span className="laser-dot"></span>The Machine</div>
      <h2 className="laser-h2">Bambu Lab <em className="laser-italic">P1S</em></h2>
      <p className="laser-h2__sub">
        One well-maintained machine that does everything from production to detailed work —
        chosen for reliability, repeatability, and clean prints job after job.
      </p>
    </div>

    <div className="laser-machine__layout">
      <div className="laser-machine__viewer">
        <div className="laser-machine__photo-frame">
          <img
            src="assets/printing/bambu-p1s.png"
            alt="Bambu Lab P1S 3D printer"
            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'contain', background: '#fff', display: 'block', borderRadius: 16 }}
          />
          <div className="laser-machine__viewer-corners">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="laser-machine__viewer-readout">
          <span>Bambu Lab P1S · 256×256×256mm · Multi-material (AMS) · Enclosed · Auto-calibration</span>
        </div>
      </div>

      <div className="laser-machine__specs">
        <div className="laser-machine__spec-group">
          <h4>Print Quality</h4>
          <div className="laser-machine__spec"><span>Layer resolution</span><b>0.08 – 0.32 mm</b></div>
          <div className="laser-machine__spec"><span>XY accuracy</span><b>± 0.1 mm (± 0.05 mm typical)</b></div>
          <div className="laser-machine__spec"><span>Nozzle</span><b>0.2 / 0.4 / 0.6 / 0.8 mm</b></div>
          <div className="laser-machine__spec"><span>Build volume</span><b>256 × 256 × 256 mm</b></div>
        </div>
        <div className="laser-machine__spec-group">
          <h4>Production Speed</h4>
          <div className="laser-machine__spec"><span>Max print speed</span><b>500 mm/s</b></div>
          <div className="laser-machine__spec"><span>Max acceleration</span><b>20,000 mm/s²</b></div>
          <div className="laser-machine__spec"><span>Hotend temp</span><b>Up to 300 °C</b></div>
          <div className="laser-machine__spec"><span>Heated bed</span><b>Up to 100 °C</b></div>
        </div>
        <div className="laser-machine__spec-group">
          <h4>Capabilities</h4>
          <div className="laser-machine__feat">◇ AMS multi-material — up to 4 colours / materials in one print</div>
          <div className="laser-machine__feat">◇ Fully enclosed chamber — clean ABS / ASA / PA prints</div>
          <div className="laser-machine__feat">◇ Auto bed-levelling — consistent first layer every time</div>
          <div className="laser-machine__feat">◇ Filament runout detection — no failed prints</div>
          <div className="laser-machine__feat">◇ Active carbon &amp; HEPA filtration — workshop-safe</div>
          <div className="laser-machine__feat">◇ Wi-Fi remote monitoring — every print supervised end-to-end</div>
        </div>
      </div>
    </div>
  </section>
);

// ════════════════════════════════════════════════════════════════
// USE CASES GALLERY
// ════════════════════════════════════════════════════════════════
const PrintingGallery = () => {
  const { LaserBgBeam } = window;
  return (
    <section className="laser-gallery">
      <div className="laser-gallery__head">
        <div className="laser-eyebrow"><span className="laser-dot"></span>Use cases</div>
        <h2 className="laser-h2">From <em className="laser-italic">broken</em> to <em className="laser-italic">brand new</em>.</h2>
        <p className="laser-h2__sub">
          Four categories that cover most of what comes through the workshop. Send your idea — we'll quote it honestly.
        </p>
      </div>
      <div className="laser-gallery__grid print-gallery__grid">
        {PRINTING_USES.map((c, i) => (
          <article key={c.id} className="laser-case laser-case--photo">
            <div className="laser-case__bg">
              <img src={c.img} alt={c.title} style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
            <div className="laser-case__content">
              <div className="laser-case__num">0{i + 1} / 0{PRINTING_USES.length}</div>
              <div className="laser-case__cat">{c.cat}</div>
              <h3 className="laser-case__title">{c.title}</h3>
              <p className="laser-case__body">{c.body}</p>
              <ul className="laser-case__list">
                {c.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

// ════════════════════════════════════════════════════════════════
// PROCESS
// ════════════════════════════════════════════════════════════════
const PrintingProcess = () => {
  const steps = [
    { n:'01', t:'Send your design', d:'WhatsApp us a sketch, photo, STL/STEP file, or describe what you need. We accept any common format — or design it for you.' },
    { n:'02', t:'Pick material & finish', d:'PLA, PETG, ABS, TPU, wood-filled or silk — we recommend based on what the part has to do.' },
    { n:'03', t:'Approve the quote', d:'Fixed price, fixed timeline, no surprises. We show you a virtual preview before any printer starts.' },
    { n:'04', t:'Printed & delivered', d:'Same-day for small parts, 1–5 days for larger jobs. Walk in, walk out — or we ship.' },
  ];
  return (
    <section className="laser-process">
      <div className="laser-process__head">
        <div className="laser-eyebrow"><span className="laser-dot"></span>How it works</div>
        <h2 className="laser-h2">Four steps. <em className="laser-italic">No middle-man.</em></h2>
      </div>
      <div className="laser-process__steps">
        {steps.map((s) => (
          <div key={s.n} className="laser-step">
            <div className="laser-step__n">{s.n}</div>
            <div className="laser-step__line"></div>
            <h4 className="laser-step__t">{s.t}</h4>
            <p className="laser-step__d">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ════════════════════════════════════════════════════════════════
// CTA
// ════════════════════════════════════════════════════════════════
const PrintingCTA = () => {
  const { LaserBgBeam } = window;
  return (
    <section className="laser-cta">
      <LaserBgBeam variant="cta"/>
      <div className="laser-cta__inner">
        <div className="laser-eyebrow laser-eyebrow--bone">
          <span className="laser-dot"></span> Service active · 2025
        </div>
        <h2 className="laser-cta__h2">
          Got a <em className="laser-italic">part</em>?<br/>
          We can <em className="laser-italic">print</em> it.
        </h2>
        <p className="laser-cta__lede">
          Send a photo or file on WhatsApp. We'll quote it, design it, print it, and deliver — all from Windhoek.
        </p>
        <div className="laser-cta__actions">
          <a href="https://wa.me/264836750117?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%203D%20print." target="_blank" rel="noopener" className="laser-btn laser-btn--primary laser-btn--lg">
            WhatsApp a brief <span className="arrow">→</span>
          </a>
          <a href="#/shop" className="laser-btn laser-btn--ghost laser-btn--lg">Browse the shop</a>
        </div>
        <div className="laser-cta__pillars">
          <span className="laser-cta__highlight">Scan</span><span className="laser-cta__bullet">·</span>
          <span className="laser-cta__highlight">Print</span><span className="laser-cta__bullet">·</span>
          <span>Cut</span><span className="laser-cta__bullet">·</span>
          <span>Engrave</span><span className="laser-cta__bullet">·</span>
          <span>Source</span>
        </div>
      </div>
    </section>
  );
};

// ════════════════════════════════════════════════════════════════
// Full page
// ════════════════════════════════════════════════════════════════
const PrintingPage = () => (
  <div className="laser-root">
    <PrintingHero/>
    <PrintingMaterials/>
    <PrintingMachine/>
    <PrintingGallery/>
    <PrintingProcess/>
    <PrintingCTA/>
  </div>
);

Object.assign(window, { PrintingHero, PrintingMaterials, PrintingMachine, PrintingGallery, PrintingProcess, PrintingCTA, PrintingPage });
