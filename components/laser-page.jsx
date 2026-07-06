// LASER / Cut & Engrave page — full sections (machine, limitations, sketch-to-finish, gallery, process, CTA)

const LASER_USE_CASES = [
  {
    id: 'signage', cat: 'Business',
    title: 'Custom Signage & Awards',
    body: 'Acrylic shop signs, engraved wood plaques, corporate gifts, awards — finished to exhibition standard.',
    img: 'assets/laser/awards-plaque.png',
    items: ['Restaurant menu boards', 'Corporate trophies', 'Acrylic wayfinding', 'Wooden bar signs'],
  },
  {
    id: 'leather', cat: 'Personalised Goods',
    title: 'Leather, Wallets & Journals',
    body: 'Premium engraving on full-grain leather. Names, monograms, logos, intricate patterns — gift-grade detail.',
    img: 'assets/laser/leather-wallet.png',
    items: ['Custom wallets', 'Notebook covers', 'Belt engraving', 'Leather tags'],
  },
  {
    id: 'gifts', cat: 'Celebrations',
    title: 'Photo Engraving & Memorial Pieces',
    body: 'Photo-grade engraving on slate, glass, metal, and ceramic. Memorial gifts, wedding favours, anniversary keepsakes.',
    img: 'assets/laser/dog-slate.png',
    items: ['Slate photo plaques', 'Engraved whisky glasses', 'Memorial coasters', 'Wedding favours'],
  },
  {
    id: 'stickers', cat: 'Brand & Decals',
    title: 'Custom Stickers & Labels',
    body: 'Designed, printed, then blade-cut to any shape. Logo stickers, vehicle decals, product labels, packaging.',
    img: 'assets/laser/holo-stickers.png',
    items: ['Brand sticker packs', 'Vehicle decals', 'Product labels', 'Event badges'],
  },
  {
    id: 'craft', cat: 'Maker',
    title: 'Maker & Hobby Projects',
    body: 'Model kits, cosplay props, miniatures, decor — bring your maker ideas to life with precision cutting and engraving.',
    img: 'assets/laser/wooden-plane.png',
    items: ['Model aircraft kits', 'Cosplay armour', 'D&D miniatures bases', 'Wall art panels'],
  },
];

// ════════════════════════════════════════════════════════════════
// SECTION — M2 IN ACTION (real xTool product imagery)
// ════════════════════════════════════════════════════════════════
const LaserShowcase = () => {
  const tiles = [
    {
      id: 'print-cut',
      img: 'assets/xtool/print-cut.png',
      tag: 'Print + cut',
      title: 'Print & cut in one machine',
      body: 'CMYK inkjet module pairs with the laser to print full-colour designs, then blade-cut around them — stickers, tags, decals, signage, all on one bed.',
      span: 'wide',
    },
    {
      id: 'full-color',
      img: 'assets/xtool/full-color.png',
      tag: 'Full colour',
      title: 'Full-colour printing for every idea',
      body: 'Stickers, fridge magnets, bookmarks, wall art, cake toppers, calendars, temporary tattoos, miniatures, party napkins — photo-grade CMYK output.',
    },
    {
      id: 'precision',
      img: 'assets/xtool/precision-cut.png',
      tag: 'Materials',
      title: 'Precision cutting across materials',
      body: 'Felt with sealed edges. Fabric with no fraying. Paper with skip-the-weeding clean release. Wood with crisp inner detail.',
    },
    {
      id: 'templates',
      img: 'assets/xtool/templates.png',
      tag: 'Templates',
      title: 'Customisable templates, unique designs in minutes',
      body: 'Hundreds of starter templates — personalise the text, font, layout, and material. You get a proof to approve before we run the job.',
    },
    {
      id: 'software',
      img: 'assets/xtool/software.png',
      tag: 'Software',
      title: 'Intuitive design — AI tools, tutorials, 5,000+ community projects',
      body: 'We use xTool Studio with built-in AI design tools, guided beginner tutorials, and a community library of 5,000+ vetted projects. You bring the idea — we bring the rest.',
    },
  ];

  return (
    <section className="laser-showcase">
      <div className="laser-showcase__head">
        <div className="laser-eyebrow"><span className="laser-dot"></span>What the M2 actually does</div>
        <h2 className="laser-h2">The M2 <em className="laser-italic">in action</em>.</h2>
        <p className="laser-h2__sub">
          A glimpse of what's coming — actual product imagery from xTool's M2 Deluxe showcase.
          Every job below is achievable on the same machine landing in our workshop in July 2026.
        </p>
      </div>
      <div className="laser-showcase__grid">
        {tiles.map((t) => (
          <article key={t.id} className={`showcase-tile showcase-tile--${t.span || 'normal'}`}>
            <div className="showcase-tile__image">
              <img src={t.img} alt={t.title} loading="lazy"/>
              <div className="showcase-tile__shine"></div>
            </div>
            <div className="showcase-tile__copy">
              <span className="showcase-tile__tag">{t.tag}</span>
              <h3 className="showcase-tile__title">{t.title}</h3>
              <p className="showcase-tile__body">{t.body}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="laser-showcase__source">
        Imagery credit: <a href="https://www.xtool.com/products/xtool-m2-deluxe-laser-cutter" target="_blank" rel="noopener">xTool M2 Deluxe official product page</a>.
      </div>
    </section>
  );
};

// ════════════════════════════════════════════════════════════════
// SECTION — THE MACHINE (xTool M2 Deluxe spotlight + image slot)
// ════════════════════════════════════════════════════════════════
const LaserMachine = () => (
  <section className="laser-machine" id="laser-machine">
    <div className="laser-machine__bg">
      <div className="laser-machine__bg-glow laser-machine__bg-glow--1"></div>
      <div className="laser-machine__bg-glow laser-machine__bg-glow--2"></div>
      <div className="laser-machine__bg-grid"></div>
    </div>

    <div className="laser-machine__head">
      <div className="laser-eyebrow"><span className="laser-dot"></span>The Machine</div>
      <h2 className="laser-h2">xTool M2 <em className="laser-italic">Deluxe</em></h2>
      <p className="laser-h2__sub">
        The most versatile desktop fabrication machine on the market. 10W diode laser, blade cutter, and
        rotary attachment — three tools in one. Joining MK's workshop in July 2026.
      </p>
    </div>

    <div className="laser-machine__layout">
      <div className="laser-machine__viewer">
        <div className="laser-machine__photo-frame laser-machine__photo-frame--xtool">
          <img
            src="assets/xtool-m2.png"
            alt="xTool M2 Deluxe laser cutter"
            style={{ width: '92%', height: '92%', objectFit: 'contain', display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
          <div className="laser-machine__viewer-corners">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="laser-machine__viewer-readout">
          <span>xTool M2 Deluxe · Diode 10W + Blade Cutter · Working area 385×300mm</span>
        </div>
      </div>

      {/* Spec list */}
      <div className="laser-machine__specs">
        <div className="laser-machine__spec-group">
          <h4>Laser System</h4>
          <div className="laser-machine__spec"><span>Laser Type</span><b>10W Diode (Class 1)</b></div>
          <div className="laser-machine__spec"><span>Wavelength</span><b>455 ± 5nm</b></div>
          <div className="laser-machine__spec"><span>Spot size</span><b>0.08 × 0.06 mm</b></div>
          <div className="laser-machine__spec"><span>Cutting depth</span><b>Wood 6mm · Acrylic 5mm</b></div>
        </div>
        <div className="laser-machine__spec-group">
          <h4>Engraving Performance</h4>
          <div className="laser-machine__spec"><span>Max speed</span><b>4000 mm/s</b></div>
          <div className="laser-machine__spec"><span>Resolution</span><b>0.01 mm positioning</b></div>
          <div className="laser-machine__spec"><span>Work area</span><b>385 × 300 mm</b></div>
          <div className="laser-machine__spec"><span>Extension</span><b>Up to 935mm with conveyor</b></div>
        </div>
        <div className="laser-machine__spec-group">
          <h4>Deluxe Package Adds</h4>
          <div className="laser-machine__feat">◇ Blade cutter — vinyl stickers, leather, fabric, paper</div>
          <div className="laser-machine__feat">◇ Rotary attachment — cylindrical engraving (mugs, bottles, glasses)</div>
          <div className="laser-machine__feat">◇ Air assist — cleaner cuts, better edge finish</div>
          <div className="laser-machine__feat">◇ Honeycomb panel — flatter material support</div>
          <div className="laser-machine__feat">◇ Smoke purifier — workshop-safe operation</div>
          <div className="laser-machine__feat">◇ Risers — taller objects up to 50mm</div>
        </div>
      </div>
    </div>
  </section>
);

// ════════════════════════════════════════════════════════════════
// SECTION — LIMITATIONS (honest "what we CAN'T do")
// ════════════════════════════════════════════════════════════════
const LaserLimits = () => {
  const limits = [
    { icon: '🚫', title: 'No metal cutting',
      body: 'The 10W diode can mark and engrave anodised/coated metal, but cannot cut steel, aluminium, or any bare metal. For that, you need a CO₂ or fibre laser — which we don\'t have.' },
    { icon: '📏', title: 'Max work area: 385 × 300 mm',
      body: 'Objects larger than the work bed don\'t fit. A car door, a fridge, a couch — no. With the conveyor extension we can run long boards up to 935 mm, but width is fixed.' },
    { icon: '↕️', title: 'Max object height: 50 mm',
      body: 'With the risers, the machine accepts objects up to 50 mm tall. Anything thicker (a thick chopping board, a tall bottle base) needs a different approach.' },
    { icon: '🔘', title: 'Rotary diameter: ~80 mm max',
      body: 'For cylindrical engraving (mugs, glasses, tumblers) the rotary fits objects roughly 5–80 mm in diameter. A 200 mm flower pot won\'t fit.' },
    { icon: '⚠️', title: 'No clear or coloured glass cutting',
      body: 'Glass can only be surface-engraved, not cut. Transparent acrylic over 5 mm is also out of reach for the 10W laser.' },
    { icon: '🚗', title: 'The object must come to the workshop',
      body: 'We don\'t do on-site work. If you need a car panel engraved or a counter-top branded, the piece needs to be detachable and brought in.' },
    { icon: '🍽️', title: 'Not food-contact certified',
      body: 'We can engrave the outside of mugs, bottles, and serveware — but the burn area is not certified for direct food/drink contact. Engrave the side, not the lip.' },
    { icon: '⚖️', title: 'Not for safety-critical parts',
      body: 'Laser-cut and 3D-printed parts can replace many components — but never for brakes, fire-safety, medical or load-bearing structural use. We\'ll flag this honestly when quoting.' },
  ];

  return (
    <section className="laser-limits">
      <div className="laser-limits__head">
        <div className="laser-eyebrow"><span className="laser-dot laser-dot--warn"></span>The honest part</div>
        <h2 className="laser-h2">What the M2 <em className="laser-italic">can't</em> do.</h2>
        <p className="laser-h2__sub">
          We'd rather tell you upfront than charge you for something we can't deliver well.
          The xTool M2 Deluxe is incredibly versatile — but it has clear limits. Read these before sending photos.
        </p>
      </div>
      <div className="laser-limits__grid">
        {limits.map((l, i) => (
          <div key={i} className="laser-limit-card">
            <div className="laser-limit-card__icon">{l.icon}</div>
            <h3 className="laser-limit-card__title">{l.title}</h3>
            <p className="laser-limit-card__body">{l.body}</p>
          </div>
        ))}
      </div>
      <div className="laser-limits__note">
        <strong>Unsure if your project fits?</strong> Send us a photo on WhatsApp and we'll tell you honestly — no charge, no obligation.
      </div>
    </section>
  );
};

// ════════════════════════════════════════════════════════════════
// SECTION — SKETCH TO FINISHED (image slots, user-fillable)
// ════════════════════════════════════════════════════════════════
const LaserSketchToFinish = () => {
  const projects = [
    { id: 'mom-photo-frame', cat: 'Photo Frame', title: 'Personalised Mother’s Day photo frame',
      sketchLabel: 'Photo + names brief', finishedLabel: 'Engraved wooden frame',
      blurb: 'Layered birch plywood with photo cut-out, names, and floral border. ~ N$ 350.' },
    { id: 'leather-wallet', cat: 'Leather', title: 'Engraved leather wallet & keyring',
      sketchLabel: 'Customer monogram sketch', finishedLabel: 'Finished engraved set',
      blurb: 'Full-grain leather with photo-grade engraving — wallets, keyrings, belts. ~ N$ 280 set.' },
    { id: 'slate-coaster', cat: 'Slate / Stone', title: 'World’s Best Mom slate coasters',
      sketchLabel: 'Quote + floral artwork', finishedLabel: 'Engraved slate set of 4',
      blurb: 'Natural slate coasters engraved with personal quotes and illustrations. ~ N$ 220 set.' },
    { id: 'heart-keychain', cat: 'Keepsake', title: 'Heart-shaped wooden keychain',
      sketchLabel: 'Names + design layout', finishedLabel: 'Layered keychain finished',
      blurb: 'Two-layer wooden keychain with names, dates, and floral wreath. ~ N$ 95 each.' },
    { id: 'acrylic-award', cat: 'Awards', title: 'Acrylic corporate award',
      sketchLabel: 'Vector design proof', finishedLabel: 'Cut & engraved acrylic',
      blurb: '5mm clear acrylic, laser-cut to shape with engraved branding. ~ N$ 450 each.' },
    { id: 'sticker-pack', cat: 'Stickers', title: 'Brand sticker pack',
      sketchLabel: 'Logo + sticker layout sheet', finishedLabel: 'Printed & blade-cut stickers',
      blurb: 'Printed & blade-cut around your logo. Vinyl, holo, or paper. From N$ 8 per sticker.' },
  ];

  return (
    <section className="laser-sketch">
      <div className="laser-sketch__head">
        <div className="laser-eyebrow"><span className="laser-dot"></span>From idea to finished piece</div>
        <h2 className="laser-h2">Sketch \u2192 <em className="laser-italic">finished</em>.</h2>
        <p className="laser-h2__sub">
          Every job starts with a conversation and a quick sketch. Here are real examples — drop in your own
          before/after photos as we complete projects.
        </p>
      </div>
      <div className="laser-sketch__grid">
        {projects.map((p) => (
          <div key={p.id} className="laser-sketch-card">
            <div className="laser-sketch-card__cat">{p.cat}</div>
            <h3 className="laser-sketch-card__title">{p.title}</h3>
            <p className="laser-sketch-card__blurb">{p.blurb}</p>
            <div className="laser-sketch-card__pair">
              <div className="laser-sketch-card__slot">
                <image-slot
                  id={`sketch-${p.id}-before`}
                  shape="rounded" radius="12"
                  placeholder={p.sketchLabel}
                  style={{ width: '100%', aspectRatio: '4/3', display: 'block' }}
                ></image-slot>
                <div className="laser-sketch-card__label">
                  <span className="laser-sketch-card__num">01</span>
                  Sketch
                </div>
              </div>
              <div className="laser-sketch-card__arrow">→</div>
              <div className="laser-sketch-card__slot">
                <image-slot
                  id={`sketch-${p.id}-after`}
                  shape="rounded" radius="12"
                  placeholder={p.finishedLabel}
                  style={{ width: '100%', aspectRatio: '4/3', display: 'block' }}
                ></image-slot>
                <div className="laser-sketch-card__label">
                  <span className="laser-sketch-card__num">02</span>
                  Finished
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="laser-sketch__source">
        Project inspiration from the <a href="https://www.atomm.com/collection/84-mothers-day-craft-ideas" target="_blank" rel="noopener">xTool Atomm community library</a> — 576+ Mother's Day craft ideas, all achievable on the M2 Deluxe.
      </div>
    </section>
  );
};

// ════════════════════════════════════════════════════════════════
// SECTION — USE CASE GALLERY
// ════════════════════════════════════════════════════════════════
const LaserGallery = () => {
  const { LaserBgBeam } = window;
  return (
    <section className="laser-gallery">
      <div className="laser-gallery__head">
        <div className="laser-eyebrow"><span className="laser-dot"></span>Use cases</div>
        <h2 className="laser-h2">Five categories. <em className="laser-italic">Hundreds</em> of possibilities.</h2>
      </div>
      <div className="laser-gallery__grid">
        {LASER_USE_CASES.map((c, i) => (
          <article key={c.id} className="laser-case laser-case--photo">
            <div className="laser-case__bg">
              <img src={c.img} alt={c.title} style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
            <div className="laser-case__content">
              <div className="laser-case__num">0{i + 1} / 0{LASER_USE_CASES.length}</div>
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
// SECTION — PROCESS
// ════════════════════════════════════════════════════════════════
const LaserProcess = () => {
  const steps = [
    { n: '01', t: 'Send your design', d: 'WhatsApp us a sketch, photo, logo file, or just a description. We accept SVG, PDF, PNG, AI, DXF — or we design it for you.' },
    { n: '02', t: 'Choose your material', d: 'Wood, leather, acrylic, slate, glass, fabric, metal tags, vinyl for stickers — we keep common stocks. Bring your own if you prefer.' },
    { n: '03', t: 'Approve the digital proof', d: 'You see exact dimensions, layout, and a virtual preview. Fixed price quote, no surprises.' },
    { n: '04', t: 'We cut, engrave & finish', d: 'Most jobs same-day or next-day. Larger production runs by appointment. Walk in, walk out.' },
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
// SECTION — CTA / EARLY ACCESS
// ════════════════════════════════════════════════════════════════
const LaserCTA = () => {
  const { LaserBgBeam } = window;
  return (
    <section className="laser-cta">
      <LaserBgBeam variant="cta"/>
      <div className="laser-cta__inner">
        <div className="laser-eyebrow laser-eyebrow--bone">
          <span className="laser-dot"></span> Arriving July 2026
        </div>
        <h2 className="laser-cta__h2">
          Be the <em className="laser-italic">first</em> to cut.<br/>
          Be the <em className="laser-italic">first</em> to engrave.
        </h2>
        <p className="laser-cta__lede">
          WhatsApp us to join the early-access list — we'll message you the moment the service launches in July 2026,
          with a 20% discount on your first job.
        </p>
        <div className="laser-cta__actions">
          <a
            href="https://wa.me/264836750117?text=Hi%2C%20please%20add%20me%20to%20the%20MK%20laser%20%2F%20engraving%20early-access%20list."
            target="_blank" rel="noopener"
            className="laser-btn laser-btn--primary laser-btn--lg"
          >
            Join early-access list <span className="arrow">→</span>
          </a>
          <a href="mailto:info@mk3dprint.org?subject=Cut%20%26%20Engrave%20enquiry" className="laser-btn laser-btn--ghost laser-btn--lg">
            Email info@mk3dprint.org
          </a>
        </div>
        <div className="laser-cta__pillars">
          <span>Scan</span><span className="laser-cta__bullet">·</span>
          <span>Print</span><span className="laser-cta__bullet">·</span>
          <span className="laser-cta__highlight">Cut</span><span className="laser-cta__bullet">·</span>
          <span className="laser-cta__highlight">Engrave</span><span className="laser-cta__bullet">·</span>
          <span>Source</span>
        </div>
      </div>
    </section>
  );
};

// ════════════════════════════════════════════════════════════════
// Full page
// ════════════════════════════════════════════════════════════════
const LaserPage = () => {
  const { LaserHero, LaserMaterials, LaserStickers } = window;
  return (
    <div className="laser-root">
      <div className="laser-soon-banner">
        <div className="laser-soon-banner__bg"></div>
        <div className="laser-soon-banner__inner">
          <div className="laser-soon-banner__left">
            <span className="laser-soon-banner__pulse"></span>
            <span className="laser-soon-banner__label">Coming Soon</span>
          </div>
          <div className="laser-soon-banner__center">
            <strong>Laser cutting, engraving &amp; custom stickers arriving July 2026.</strong>
            <span className="laser-soon-banner__sep">·</span>
            Join the early-access list for 20% off your first job.
          </div>
          <a href="https://wa.me/264836750117?text=Hi%2C%20please%20add%20me%20to%20the%20MK%20laser%20%2F%20engraving%20early-access%20list." target="_blank" rel="noopener" className="laser-soon-banner__cta">
            Notify me →
          </a>
        </div>
      </div>
      <LaserHero/>
      <LaserMaterials/>
      <LaserStickers/>
      <LaserShowcase/>
      <LaserMachine/>
      <LaserLimits/>
      <LaserGallery/>
      <LaserProcess/>
      <LaserCTA/>
    </div>
  );
};

Object.assign(window, { LaserMachine, LaserShowcase, LaserLimits, LaserSketchToFinish, LaserGallery, LaserProcess, LaserCTA, LaserPage });
