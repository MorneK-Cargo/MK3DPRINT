// Cut & Engrave promo — hero, materials, stickers spotlight
// UNPUBLISHED service: live with Coming Soon badge until xTool M2 arrives

const { MatIcon } = window;

const LASER_MATERIALS = [
  { kind: 'wood',     name: 'Wood',           cuts: '6mm',  engraves: 'Pyrography-grade detail' },
  { kind: 'leather',  name: 'Leather',        cuts: '4mm',  engraves: 'Wallets, bags, journals' },
  { kind: 'acrylic',  name: 'Acrylic',        cuts: '5mm',  engraves: 'Signage, awards, displays' },
  { kind: 'paper',    name: 'Paper / Card',   cuts: 'Yes',  engraves: 'Invitations, packaging' },
  { kind: 'vinyl',    name: 'Vinyl Stickers', cuts: 'Yes',  engraves: 'Custom labels, decals, brand stickers' },
  { kind: 'fabric',   name: 'Fabric',         cuts: 'Yes',  engraves: 'Cotton, denim, felt, canvas' },
  { kind: 'glass',    name: 'Glass',          cuts: '\u2014', engraves: 'Bottles, mugs, panels' },
  { kind: 'slate',    name: 'Slate / Stone',  cuts: '\u2014', engraves: 'Coasters, plaques, signs' },
  { kind: 'metal',    name: 'Anodised Metal', cuts: '\u2014', engraves: 'Tags, plates, jewellery' },
  { kind: 'ceramic',  name: 'Ceramic Tile',   cuts: '\u2014', engraves: 'Personalised, photo-grade' },
  { kind: 'cork',     name: 'Cork',           cuts: 'Yes',  engraves: 'Boards, coasters' },
];

// CSS-only animated "video background" — laser beam scanning across material
const LaserBgBeam = ({ variant = 'engrave' }) => (
  <div className={`laser-bg laser-bg--${variant}`}>
    <div className="laser-bg__surface"></div>
    <svg className="laser-bg__path" viewBox="0 0 1200 600" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`burnGrad-${variant}`} x1="0" x2="1">
          <stop offset="0" stopColor="#C5772A" stopOpacity="0"/>
          <stop offset="0.5" stopColor="#9B3B1E" stopOpacity="0.9"/>
          <stop offset="1" stopColor="#C5772A" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d="M 100 300 Q 300 100 600 300 T 1100 300" stroke={`url(#burnGrad-${variant})`} strokeWidth="2.5" fill="none" className="laser-bg__draw"/>
      <path d="M 100 380 Q 400 200 800 400 T 1100 380" stroke={`url(#burnGrad-${variant})`} strokeWidth="1.5" fill="none" className="laser-bg__draw" style={{animationDelay:'1s'}}/>
    </svg>
    <div className="laser-bg__beam"></div>
    <div className="laser-bg__spark"></div>
    <div className="laser-bg__spark" style={{animationDelay:'0.4s', left:'62%'}}></div>
    <div className="laser-bg__spark" style={{animationDelay:'0.8s', left:'78%'}}></div>
    <div className="laser-bg__haze"></div>
  </div>
);

// ════════════════════════════════════════════════════════════════
// Section 1 — HERO
// ════════════════════════════════════════════════════════════════
const LaserHero = () => (
  <section className="laser-hero">
    <LaserBgBeam variant="hero"/>
    <div className="laser-hero__grid">
      <div className="laser-hero__copy">
        <div className="laser-eyebrow">
          <span className="laser-dot"></span>
          Arriving July 2026 · xTool M2 Deluxe
        </div>
        <h1 className="laser-hero__h1">
          <span className="laser-word laser-word--burn">Cut.</span>{' '}
          <span className="laser-word laser-word--burn">Engrave.</span>{' '}
          <em className="laser-italic">Sticker.</em>
          <br/>
          <span className="laser-hero__sub">
            The new MK workshop.
          </span>
        </h1>
        <p className="laser-hero__lede">
          Precision laser cutting, photo-grade engraving, custom stickers, and personalised pieces —
          joining MK's scanning, reverse engineering, and 3D printing service in Windhoek.
          Ten materials. One workshop. Zero importing.
        </p>
        <div className="laser-hero__stats">
          <div className="laser-stat"><b>10W</b><span>Diode laser power</span></div>
          <div className="laser-stat"><b>0.08mm</b><span>Engraving precision</span></div>
          <div className="laser-stat"><b>4000mm/s</b><span>Max engraving speed</span></div>
          <div className="laser-stat"><b>385×300mm</b><span>Work area</span></div>
        </div>
      </div>

      <div className="laser-hero__visual">
        <div className="laser-machine-card">
          <div className="laser-machine-card__chrome">
            <span className="laser-machine-card__dot"></span>
            <span className="laser-machine-card__dot"></span>
            <span className="laser-machine-card__dot"></span>
            <span className="laser-machine-card__title">xTool M2 Deluxe · Live</span>
          </div>
          <div className="laser-machine-card__stage">
            <div className="laser-machine-card__grid"></div>
            <div className="laser-machine-card__crosshair">
              <div className="laser-machine-card__crosshair-h"></div>
              <div className="laser-machine-card__crosshair-v"></div>
              <div className="laser-machine-card__crosshair-dot"></div>
            </div>
            <svg className="laser-machine-card__svg" viewBox="0 0 300 220">
              <defs>
                <radialGradient id="burnDot" cx="50%" cy="50%">
                  <stop offset="0" stopColor="#FFD89A"/>
                  <stop offset="0.3" stopColor="#C5772A"/>
                  <stop offset="1" stopColor="#9B3B1E" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <text x="150" y="120" textAnchor="middle"
                    fontFamily="Space Grotesk, sans-serif"
                    fontSize="68" fontWeight="600"
                    fill="none" stroke="#C5772A" strokeWidth="1.2"
                    className="laser-machine-card__text">
                MK
              </text>
              <text x="150" y="155" textAnchor="middle"
                    fontFamily="JetBrains Mono, monospace"
                    fontSize="11" letterSpacing="6"
                    fill="none" stroke="#C5772A" strokeWidth="0.6"
                    className="laser-machine-card__text" style={{animationDelay:'2s'}}>
                CUT · ENGRAVE · STICKER
              </text>
              <circle r="6" fill="url(#burnDot)" className="laser-machine-card__head">
                <animateMotion dur="6s" repeatCount="indefinite"
                               path="M 70 95 L 230 95 L 230 145 L 70 145 L 70 95"/>
              </circle>
            </svg>
            <div className="laser-machine-card__scanline"></div>
          </div>
          <div className="laser-machine-card__readout">
            <div><span>Material</span><b>Walnut, 3mm</b></div>
            <div><span>Mode</span><b>Engrave 80%</b></div>
            <div><span>Speed</span><b>200 mm/s</b></div>
            <div><span>Status</span><b className="laser-pulse">● Cutting</b></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ════════════════════════════════════════════════════════════════
// Section 2 — MATERIALS (with animated SVG icons)
// ════════════════════════════════════════════════════════════════
const LaserMaterials = () => (
  <section className="laser-materials">
    <div className="laser-materials__head">
      <div className="laser-eyebrow"><span className="laser-dot"></span>Eleven materials. One workshop.</div>
      <h2 className="laser-h2">Anything you can <em className="laser-italic">imagine</em>, we can <em className="laser-italic">make</em>.</h2>
      <p className="laser-h2__sub">
        Cut, engrave, and finish across wood, leather, acrylic, fabric, glass, slate, ceramic, metal tags,
        cork — and produce custom vinyl stickers, labels and decals.
      </p>
    </div>

    {/* Scrolling marquee */}
    <div className="laser-marquee">
      <div className="laser-marquee__track">
        {[...LASER_MATERIALS, ...LASER_MATERIALS].map((m, i) => (
          <div key={i} className="laser-mat">
            <MatIcon kind={m.kind} size={36}/>
            <div className="laser-mat__name">{m.name}</div>
            <div className="laser-mat__detail">{m.cuts !== '\u2014' ? `Cuts ${m.cuts}` : 'Engrave only'}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Detail grid */}
    <div className="laser-materials__grid">
      {LASER_MATERIALS.map((m, i) => (
        <div key={i} className="laser-matcard">
          <div className="laser-matcard__top">
            <MatIcon kind={m.kind} size={32}/>
            <span className="laser-matcard__name">{m.name}</span>
            {m.kind === 'vinyl' && <span className="laser-matcard__badge">New</span>}
          </div>
          <div className="laser-matcard__row">
            <span>Cut</span><b className={m.cuts === '\u2014' ? 'laser-muted' : 'laser-active'}>{m.cuts}</b>
          </div>
          <div className="laser-matcard__row">
            <span>Engrave</span><b className="laser-active">●</b>
          </div>
          <div className="laser-matcard__desc">{m.engraves}</div>
        </div>
      ))}
    </div>
  </section>
);

// ════════════════════════════════════════════════════════════════
// Section — STICKERS SPOTLIGHT (Section 3)
// ════════════════════════════════════════════════════════════════
const LaserStickers = () => (
  <section className="laser-stickers">
    <div className="laser-stickers__bg">
      <div className="laser-stickers__dots"></div>
    </div>
    <div className="laser-stickers__inner">
      <div className="laser-stickers__copy">
        <div className="laser-eyebrow"><span className="laser-dot"></span>New service · 2026</div>
        <h2 className="laser-h2">Custom <em className="laser-italic">stickers</em>,<br/>made on site.</h2>
        <p className="laser-stickers__lede">
          Brand stickers. Product labels. Vehicle decals. Laptop badges. Event packs.
          Designed in-house, printed in colour, blade-cut around your shape — all under one roof.
        </p>
        <div className="laser-stickers__pills">
          <div className="laser-pill"><span>◆</span> Die-cut shapes</div>
          <div className="laser-pill"><span>◆</span> Kiss-cut sheets</div>
          <div className="laser-pill"><span>◆</span> Vinyl &amp; paper</div>
          <div className="laser-pill"><span>◆</span> Holographic finish</div>
          <div className="laser-pill"><span>◆</span> Waterproof options</div>
          <div className="laser-pill"><span>◆</span> Outdoor-rated</div>
        </div>
        <a href="https://wa.me/264836750117?text=Hi%2C%20I%27m%20interested%20in%20custom%20stickers%20when%20the%20laser%20service%20launches"
           target="_blank" rel="noopener"
           className="laser-btn laser-btn--primary" style={{marginTop: 32}}>
          Plan your sticker run <span className="arrow">→</span>
        </a>
      </div>

      {/* Real sticker designs — 6 client samples */}
      <div className="laser-stickers__visual">
        <div className="laser-sticker-sheet laser-sticker-sheet--photos">

          {[
            { cls: 'sticker3d--p1', src: 'assets/stickers/badger.png',        alt: 'I hate study days badger sticker' },
            { cls: 'sticker3d--p2', src: 'assets/stickers/be-happy.png',      alt: 'Be Happy rose typography sticker' },
            { cls: 'sticker3d--p3', src: 'assets/stickers/still-working.png', alt: 'Still Working lamp character sticker' },
            { cls: 'sticker3d--p4', src: 'assets/stickers/best-dad.png',      alt: 'Best Dad Ever silhouette sticker' },
            { cls: 'sticker3d--p5', src: 'assets/stickers/kapow.png',         alt: 'Ka-Pow comic gun sticker' },
            { cls: 'sticker3d--p6', src: 'assets/stickers/dog-treats.png',    alt: 'Caution approach with treats dog sticker' },
          ].map((s, i) => (
            <div key={i} className={`sticker3d sticker3d--photo ${s.cls}`}>
              <div className="sticker3d__body sticker3d__body--photo">
                <img src={s.src} alt={s.alt}/>
              </div>
            </div>
          ))}

        </div>
        <div className="laser-sticker-caption">6 real client designs · die-cut, peel-and-stick</div>
      </div>
    </div>
  </section>
);

Object.assign(window, { LaserHero, LaserMaterials, LaserStickers, LaserBgBeam });
