// Services, Scanning, Imports, Shop, About — real MK3DPRINT content

const Services = () => {
  const items = [
    {
      num: '01 / SERVICE',
      title: '3D',
      title2: 'Printing',
      body: 'Precision 3D printing for prototypes, functional parts, and custom solutions tailored to your needs.',
      img: 'assets/bambulab-print.png',
      feat: [
        ['Materials', 'Multiple options'],
        ['Detail', 'High precision'],
        ['Lead time', 'Agreed upfront'],
        ['Pricing', 'Cost-effective'],
      ],
    },
    {
      num: '02 / SERVICE',
      title: 'Product',
      title2: 'Imports',
      body: 'Import smaller products directly from USA, Europe, and Asia. Significant cost savings on transport with fast 2–3 week delivery — without the massive costs of traditional importing. Available on request only.',
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=500&fit=crop',
      feat: [
        ['Regions', 'USA · EU · Asia'],
        ['Delivery', '2 – 3 weeks'],
        ['Savings', 'Significant'],
        ['Source', 'Direct'],
      ],
    },
    {
      num: '03 / SERVICE',
      title: '3D',
      title2: 'Scanning',
      body: 'Advanced scanning services to digitize physical objects and create precise digital files for reproduction or analysis.',
      img: 'assets/scanning-automotive-crop.png',
      feat: [
        ['Capture', 'Precision'],
        ['Use', 'Reverse-eng.'],
        ['QC', 'Part comparison'],
        ['Archive', 'Digital models'],
      ],
    },
  ];
  return (
    <section className="section" id="services" style={{position:'relative', overflow:'hidden'}}>
      <TopoLines className="topo" seed={1}/>
      <div className="section-head" style={{position:'relative', zIndex:2}}>
        <div>
          <div className="label">§ 01 — Capabilities</div>
          <h2>Our services.<br/>Scan. Print. Source.</h2>
        </div>
        <div className="desc">
          Comprehensive 3D solutions tailored to your needs — built in Windhoek, from a workshop that treats every brief as a one-to-one conversation.
        </div>
      </div>
      <div className="services">
        {items.map((s, i) => (
          <div className="service" key={i}>
            <div className="num">{s.num}</div>
            <div className="go">↗</div>
            <div className="visual">
              <img src={s.img} alt={`${s.title} ${s.title2}`} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
            </div>
            <h3>{s.title} <span className="accent">{s.title2}</span></h3>
            <p>{s.body}</p>
            <ul className="feat">
              {s.feat.map(([k, v], j) => (
                <li key={j}><span>{k}</span><span>{v}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const Scanning = () => {
  const caps = [
    'Small to medium objects: jewelry, mechanical parts, household items, sculptures',
    'Complex geometries: intricate details, curved surfaces, hard-to-measure components',
    'Reverse engineering: create CAD models from existing parts for reproduction or modification',
    'Quality control: compare manufactured parts against original designs',
    'Digital archiving: preserve physical objects as accurate digital models',
    'Works with various materials: plastic, metal, wood, ceramic',
  ];
  const desc = [
    'We use the advanced Creality CR-Scan Raptor, a professional-grade 3D scanner that captures intricate details with remarkable accuracy. This portable scanner digitises almost any object — creating precise 3D models for reproduction, modification, or archival purposes.',
    'The Raptor combines line lasers with infrared structured-light technology, scanning objects from 5×5×5 mm³ up to 2000×2000×2000 mm³. Small figurines, bolts, faces, human bodies, automotive components — all fair game.',
    'Because the system uses speckle-matched infrared imaging, feature-rich objects need no markers. Scan directly, quickly, and export to your preferred CAD workflow.',
  ];
  return (
    <section className="section" id="scanning" style={{background:'var(--paper-2)', position:'relative', overflow:'hidden'}}>
      <TopoLines className="topo" seed={2}/>      <div className="section-head">
        <div>
          <div className="label">§ 02 — Scanning</div>
          <h2>Our scanning<br/>technology.</h2>
        </div>
        <div className="desc">
          Precision 3D scanning to digitise your physical objects — ready for analysis, modification, or 3D printing reproduction.
        </div>
      </div>

      <div style={{maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'start'}} className="scan-wrap">
        <div>
          {desc.map((p, i) => (
            <p key={i} style={{fontSize: 16, lineHeight: 1.6, color: 'var(--char-2)', marginBottom: 18, maxWidth: 560}}>{p}</p>
          ))}
          <div style={{marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16}}>
            {[['5 mm³','Smallest object'],['2000 mm³','Largest object'],['0','Markers needed']].map(([v,k]) => (
              <div key={k} style={{padding: 20, background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 12}}>
                <div className="mono" style={{color: 'var(--char-2)', opacity: 0.6, fontSize: 10}}>{k}</div>
                <div style={{fontFamily: 'var(--f-display)', fontSize: 26, fontWeight: 500, letterSpacing: '-0.02em', marginTop: 6}}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{background: 'var(--paper)', borderRadius: 20, padding: 32, border: '1px solid var(--line)'}}>
          <div className="label" style={{marginBottom: 16}}>What we can scan</div>
          <ul style={{listStyle: 'none'}}>
            {caps.map((c, i) => (
              <li key={i} style={{display: 'flex', gap: 14, padding: '14px 0', borderBottom: i < caps.length-1 ? '1px solid var(--line)' : 'none', fontSize: 14.5, color: 'var(--char-2)', lineHeight: 1.5}}>
                <span className="mono" style={{color: 'var(--teal-deep)', flexShrink: 0, width: 20}}>{String(i+1).padStart(2,'0')}</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Imports = () => {
  const benefits = [
    'Shop from 23 countries worldwide including USA, Europe & Asia',
    'Significant savings compared to traditional courier services',
    'Access to products not available in Namibia',
    'Transparent pricing with no hidden fees',
    '2–3 week delivery timeframe',
    'Perfect for specialised tools, electronics, hobby items, and more',
  ];
  const cats = [
    {title: 'Electronics & Gadgets', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop'},
    {title: 'Tools & Home Improvement', img: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&h=600&fit=crop'},
    {title: 'Smart Home & Tech', img: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&h=600&fit=crop'},
  ];
  return (
    <section className="section ink-bg" id="imports" style={{position:'relative', overflow:'hidden'}}>
      <TopoLines className="topo" seed={13} style={{opacity:'calc(0.2 * var(--pattern))'}}/>
      <div className="section-head">
        <div>
          <div className="label">§ 03 — Imports</div>
          <h2>Direct imports<br/>USA · Europe · Asia.</h2>
        </div>
        <div className="desc">
          Can't find what you need locally? Share the product link or description — we calculate total landed cost,
          and once approved handle the whole import. Available on request only. Minimum order requirements may apply.
        </div>
      </div>

      <div style={{maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 56}} className="imp-cats">
        {cats.map((c, i) => (
          <a key={i} href="https://www.amazon.com" target="_blank" rel="noopener" style={{background: 'var(--char-2)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(244,237,222,0.08)', color:'inherit', display:'block'}}>
            <div style={{aspectRatio: '4/3', position: 'relative', overflow: 'hidden'}}>
              <img src={c.img} alt={c.title} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
            </div>
            <div style={{padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{fontFamily: 'var(--f-display)', fontSize: 16, fontWeight: 500}}>{c.title}</span>
              <span className="mono" style={{color: 'var(--teal-bright)', fontSize: 10}}>Category {String(i+1).padStart(2,'0')}</span>
            </div>
          </a>
        ))}
      </div>

      <div style={{maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60}} className="imp-grid">
        <div>
          <div className="mono" style={{color: 'var(--teal-bright)', marginBottom: 14}}>How it works</div>
          <div style={{display: 'grid', gap: 16}}>
            {[
              ['01', 'Share the link', 'Send an Amazon, Walmart, or other product URL — or just describe what you need.'],
              ['02', 'We quote landed cost', 'Full breakdown: product, shipping, handling. No hidden fees.'],
              ['03', 'Approve & pay', 'Once green-lit, we source it from the origin market.'],
              ['04', 'Delivered in 2–3 weeks', 'Fraction of traditional courier pricing, dropped at your door.'],
            ].map(([n, t, b]) => (
              <div key={n} style={{display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, padding: '16px 0', borderBottom: '1px solid rgba(244,237,222,0.1)'}}>
                <div className="mono" style={{color: 'var(--ochre)', fontSize: 14}}>{n}</div>
                <div>
                  <div style={{fontFamily: 'var(--f-display)', fontSize: 18, fontWeight: 500, marginBottom: 4}}>{t}</div>
                  <div style={{fontSize: 13.5, color: 'rgba(244,237,222,0.65)', lineHeight: 1.5}}>{b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{background: 'var(--char-2)', border: '1px solid rgba(244,237,222,0.08)', borderRadius: 18, padding: 32}}>
          <div className="mono" style={{color: 'var(--teal-bright)', marginBottom: 14}}>Why import with us</div>
          <ul style={{listStyle: 'none'}}>
            {benefits.map((b, i) => (
              <li key={i} style={{display: 'flex', gap: 14, padding: '14px 0', borderBottom: i < benefits.length-1 ? '1px solid rgba(244,237,222,0.08)' : 'none', color: 'rgba(244,237,222,0.85)', fontSize: 14.5, lineHeight: 1.5}}>
                <span style={{color: 'var(--ochre)', flexShrink: 0}}>◆</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Inspiration gallery (matches live mk3dprint.org exactly)
const INSPIRATION = [
  {id:'plant-pot', title:'Geometric Desk Planter', cat:'Home & Living', blurb:'Modern minimalist planter for succulents and small plants', wa:'Geometric%20Desk%20Planter', img:'assets/shop/plant-pot.jpg'},
  {id:'dragon', title:'Articulated Dragon', cat:'Gifts & Personalized', blurb:'Fully poseable dragon with moving joints — a top seller worldwide', wa:'Articulated%20Dragon', img:'assets/shop/dragon.png'},
  {id:'cable-clips', title:'Cable Management Clips', cat:'Gadgets & Tech', blurb:'Set of 6 adhesive cable organisers for a clean desk setup', wa:'Cable%20Management%20Clips', img:'assets/shop/cable-clips.jpg'},
  {id:'phone-stand', title:'Phone Stand with Charging Slot', cat:'Gadgets & Tech', blurb:'Adjustable phone dock for desk or bedside — fits all phones', wa:'Phone%20Stand', img:'assets/shop/phone-stand.jpg'},
  {id:'flexi-trex', title:'Flexi T-Rex Fidget Toy', cat:'Gifts & Personalized', blurb:'Articulated dinosaur with satisfying movement — kids love it', wa:'Flexi%20T-Rex', img:'assets/shop/flexi-trex.jpg'},
  {id:'headphone', title:'Headphone Hook (Desk Mount)', cat:'Gadgets & Tech', blurb:'Clean desk aesthetic — mount under any desk edge', wa:'Headphone%20Hook', img:'assets/shop/headphone-stand.webp'},
  {id:'desk-org', title:'Modular Desk Organizer', cat:'Functional & Tools', blurb:'Stackable compartments for pens, cards, and small items', wa:'Desk%20Organizer', img:'assets/shop/desk-organizer.png'},
  {id:'keycaps', title:'Custom Keyboard Keycaps', cat:'Gadgets & Tech', blurb:'Unique artisan keycaps for mechanical keyboard enthusiasts', wa:'Keyboard%20Keycaps', img:'assets/shop/keyboard-keycaps.jpg'},
  {id:'lion', title:'Low-Poly Lion Sculpture', cat:'Art & Decor', blurb:'Geometric Namibian wildlife art piece for shelf or desk display', wa:'Lion%20Sculpture', img:'assets/shop/lion-sculpture.png'},
];

// Featured / premium products
const FEATURED = [
  {id:'photo', title:'Photo to 3D Print', price:'TBC', blurb:'Transform your favourite photo into a stunning 3D printed trophy! Personalised with names, dates, and decorative elements. Perfect for birthdays, anniversaries, and achievements.', wa:'Photo%20to%203D%20Print', img:'assets/shop/photo.jpg'},
  {id:'vader', title:'Darth Vader Monitor Figurine', price:'N$ 100', blurb:'Premium Darth Vader collectible figurine — perfect desk companion', wa:'Darth%20Vader%20Monitor%20Figurine', img:'assets/featured/darth.jpg'},
  {id:'trooper', title:'Stormtrooper Figurine', price:'N$ 100', blurb:'Classic Stormtrooper figurine — premium quality', wa:'Stormtrooper%20Figurine', img:'assets/featured/stormtrooper.jpg'},
];

// Original shop items
const ORIGINAL_SHOP = [
  {id:'drill', title:'Drill Dust Collector', price:'N$ 35', blurb:'Catches concrete dust before it hits the floor. 360° protection, works for lefties and righties.', wa:'Drill Dust Collector', img:'assets/shop/drill.jpg'},
  {id:'screw', title:'Screw Measuring Tool, M2–M10', price:'N$ 50', blurb:'End the "is this M6 or M8?" hardware-store trips forever. Identifies M2–M10 screws from 4–120 mm instantly.', wa:'Screw%20Measuring%20Tool', img:'assets/shop/screw.jpg'},
  {id:'door', title:'Door Hanger · Downloading', price:'N$ 45', blurb:'Perfect bathroom door hanger for those extended "downloads". Progress bar more honest than your browser.', wa:'Door%20Hanger%20Downloading', img:'assets/shop/door.jpg'},
  {id:'batt', title:'Battery Holder · AA & AAA', price:'N$ 40', blurb:'Stop battery chaos. Keep your AA and AAA neatly organised — no more digging through junk drawers.', wa:'Battery%20Holder', img:'assets/shop/battery.jpg'},
  {id:'hook', title:'Gravity Towel Hook', price:'N$ 25', blurb:'No screws, no anchors, no "oops I drilled into a water pipe" moments. Uses gravity, that apple guy approves.', wa:'Gravity%20Towel%20Hook', img:'assets/shop/hook.jpg'},
];

const Shop = () => {
  const [filter, setFilter] = useState('all');
  const allCats = [...new Set(INSPIRATION.map(p => p.cat))];
  const cats = [['all','All'], ...allCats.map(c => [c, c])];
  const visible = filter === 'all' ? INSPIRATION : INSPIRATION.filter(p => p.cat === filter);
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? visible : visible.slice(0, 9);

  return (
    <section className="section" id="shop" style={{position:'relative', overflow:'hidden'}}>
      <TopoLines className="topo" seed={4}/>
      {/* Inspiration gallery — matches live site */}
      <div className="section-head">
        <div>
          <div className="label">Inspiration Gallery</div>
          <h2>What can we<br/>print for you?</h2>
        </div>
        <div className="desc">
          Browse ideas, pick your favourite, and we'll print it for you. Don't see what you want? Send us any design from Printables, MakerWorld, or Yeggi.
        </div>
      </div>

      <div style={{maxWidth:1440, margin:'0 auto 24px', display:'flex', gap:8, flexWrap:'wrap'}}>
        {cats.map(([k,l]) => (
          <button key={k} onClick={()=>{setFilter(k); setShowAll(false);}} style={{padding:'10px 18px', borderRadius:999, fontSize:13, fontWeight:500, border:'1px solid var(--line-strong)', background: filter===k ? 'var(--ink)' : 'transparent', color: filter===k ? 'var(--bone)' : 'var(--ink)', transition:'all .2s'}}>{l}</button>
        ))}
      </div>

      <div style={{maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16}} className="shop-grid">
        {displayed.map((p) => (
          <a key={p.id} href={`https://wa.me/264836750117?text=Hi%2C%20I%27d%20like%20to%20get%20this%20printed%3A%20${p.wa}`} target="_blank" rel="noopener" style={{background: 'var(--paper)', borderRadius:16, overflow:'hidden', border:'1px solid var(--line)', display:'flex', flexDirection:'column', textDecoration:'none', color:'inherit', transition:'transform .3s, box-shadow .3s', cursor:'pointer'}} className="shop-item" onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(0,0,0,0.1)';}} onMouseLeave={e=>{e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none';}}>
            <div style={{height: 220, overflow: 'hidden', position: 'relative', background:'var(--paper-2)'}}>
              <img src={p.img} alt={p.title} style={{width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform .4s'}}/>
              <div style={{position:'absolute', top:12, left:12, padding:'4px 12px', borderRadius:999, background:'var(--teal)', color:'white', fontFamily:'var(--f-mono)', fontSize:10, letterSpacing:'0.1em'}}>{p.cat}</div>
            </div>
            <div style={{padding:'20px 24px', flex:1, display:'flex', flexDirection:'column'}}>
              <h3 style={{fontFamily:'var(--f-display)', fontSize:20, fontWeight:500, letterSpacing:'-0.01em', marginBottom:8}}>{p.title}</h3>
              <p style={{fontSize:14, color:'var(--char-2)', lineHeight:1.5, marginBottom:16}}>{p.blurb}</p>
              <div style={{marginTop:'auto', display:'inline-flex', alignItems:'center', gap:8, color:'var(--teal-deep)', fontSize:14, fontWeight:500}}>
                Get this printed →
              </div>
            </div>
          </a>
        ))}
      </div>

      {!showAll && visible.length > 9 && (
        <div style={{textAlign:'center', marginTop:24}}>
          <button onClick={()=>setShowAll(true)} style={{padding:'12px 28px', borderRadius:999, border:'1px solid var(--line-strong)', fontSize:14, fontWeight:500, color:'var(--ink)'}}>Show more ideas ({visible.length - 9} more)</button>
        </div>
      )}

      <div style={{maxWidth:1440, margin:'40px auto 0', padding:24, background:'var(--paper-2)', borderRadius:16, border:'1px solid var(--line)', textAlign:'center'}}>
        <p style={{fontSize:15, color:'var(--char-2)'}}>
          Don't see what you're looking for? Send us any design from{' '}
          <a href="https://www.printables.com" target="_blank" rel="noopener" style={{color:'var(--teal-deep)', fontWeight:500, textDecoration:'underline', textUnderlineOffset:4}}>Printables</a>,{' '}
          <a href="https://makerworld.com" target="_blank" rel="noopener" style={{color:'var(--teal-deep)', fontWeight:500, textDecoration:'underline', textUnderlineOffset:4}}>MakerWorld</a>, or{' '}
          <a href="https://www.yeggi.com" target="_blank" rel="noopener" style={{color:'var(--teal-deep)', fontWeight:500, textDecoration:'underline', textUnderlineOffset:4}}>Yeggi</a>{' '}
          and we'll print it for you.
        </p>
      </div>

      {/* Featured / premium products */}
      <div style={{maxWidth:1440, margin:'80px auto 0'}}>
        <div className="mono" style={{color:'var(--teal-deep)', marginBottom:8}}>Premium Figurines</div>
        <h2 style={{fontFamily:'var(--f-display)', fontSize:'clamp(36px, 4vw, 52px)', fontWeight:500, letterSpacing:'-0.025em', marginBottom:12}}>Featured products.</h2>
        <p style={{fontSize:15, color:'var(--char-2)', marginBottom:32, maxWidth:500}}>Exclusive collectible figurines — limited availability.</p>

        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}} className="feat-grid">
          {FEATURED.map((p) => (
            <a key={p.id} href={`https://wa.me/264836750117?text=Hi%2C%20I%27m%20interested%20in%20the%20${p.wa}`} target="_blank" rel="noopener" style={{background:'var(--paper)', border:'1px solid var(--line)', borderRadius:16, overflow:'hidden', textDecoration:'none', color:'inherit', transition:'transform .3s'}} onMouseEnter={e=>e.currentTarget.style.transform='translateY(-4px)'} onMouseLeave={e=>e.currentTarget.style.transform='none'}>
              <div style={{height:280, overflow:'hidden', background:'var(--paper-2)'}}>
                <img src={p.img} alt={p.title} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
              </div>
              <div style={{padding:'20px 24px'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'start', marginBottom:8}}>
                  <h3 style={{fontFamily:'var(--f-display)', fontSize:20, fontWeight:500}}>{p.title}</h3>
                  <span style={{fontFamily:'var(--f-mono)', fontSize:14, color:'var(--teal-deep)', fontWeight:500}}>{p.price}</span>
                </div>
                <p style={{fontSize:14, color:'var(--char-2)', lineHeight:1.5, marginBottom:14}}>{p.blurb}</p>
                <div style={{color:'var(--teal-deep)', fontSize:14, fontWeight:500}}>Get quote →</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Original printed products */}
      <div style={{maxWidth:1440, margin:'80px auto 0'}}>
        <div className="mono" style={{color:'var(--teal-deep)', marginBottom:8}}>Printed & in stock</div>
        <h2 style={{fontFamily:'var(--f-display)', fontSize:'clamp(30px, 3.5vw, 44px)', fontWeight:500, letterSpacing:'-0.02em', marginBottom:32}}>Ready-to-buy prints.</h2>

        <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:12}} className="orig-grid">
          {ORIGINAL_SHOP.map((p) => (
            <a key={p.id} href={`https://wa.me/264836750117?text=Hi%2C%20I%27m%20interested%20in%20the%20${p.wa}`} target="_blank" rel="noopener" style={{background:'var(--paper)', border:'1px solid var(--line)', borderRadius:12, overflow:'hidden', textDecoration:'none', color:'inherit', transition:'transform .3s'}} onMouseEnter={e=>e.currentTarget.style.transform='translateY(-3px)'} onMouseLeave={e=>e.currentTarget.style.transform='none'}>
              <div style={{height:160, overflow:'hidden', background:'var(--paper-2)'}}>
                <img src={p.img} alt={p.title} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
              </div>
              <div style={{padding:'14px 16px'}}>
                <div style={{fontFamily:'var(--f-mono)', fontSize:12, color:'var(--teal-deep)', fontWeight:500, marginBottom:4}}>{p.price}</div>
                <h4 style={{fontFamily:'var(--f-display)', fontSize:15, fontWeight:500, lineHeight:1.2, marginBottom:6}}>{p.title}</h4>
                <p style={{fontSize:12, color:'var(--char-2)', lineHeight:1.4}}>{p.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const story = [
    "MK 3D Printing and Investments CC was born from a passion for technology, fabrication, and problem-solving. During the COVID-19 pandemic, I invested in a 3D printer to tackle household projects and repair broken items — discovering the incredible power of turning digital designs into physical reality.",
    "As I developed my 3D printing and scanning capabilities, I hit a fundamental challenge: some items simply can't be 3D printed. That's when my existing import network became the missing piece. I realised I could combine 3D design and fabrication expertise with direct sourcing from the world's largest markets.",
    "Today, MK 3D Printing and Investments CC offers a complete solution. Need a custom bracket? I'll design and print it. Need to replace a sensor? I'll import it directly. That integrated approach is what sets this startup apart.",
  ];
  const why = [
    'Several years of hands-on experience in 3D printing and fabrication',
    'Reliable, well-maintained equipment for consistent quality',
    'Dedicated personal support — involved in every project',
    'Realistic and competitive pricing',
    'Complete support from design to delivery',
    'Locally based in Windhoek, Namibia',
  ];
  return (
    <section className="section" id="about" style={{background: 'var(--paper-2)', position:'relative', overflow:'hidden'}}>
      <TopoLines className="topo" seed={5}/>
      <div className="section-head">
        <div>
          <div className="label">§ 05 — About</div>
          <h2>MK 3D Printing &<br/>Investments CC.</h2>
        </div>
        <div className="desc">
          Leading with technology, fabrication and problem-solving — a one-person workshop that treats the import network and the print bed as parts of the same answer.
        </div>
      </div>

      <div style={{maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'start'}} className="about-grid">
        <div>
          <div className="mono" style={{color: 'var(--teal-deep)', marginBottom: 16}}>My story</div>
          {story.map((p, i) => (
            <p key={i} style={{fontSize: 16, lineHeight: 1.6, color: 'var(--char-2)', marginBottom: 18, maxWidth: 600}}>{p}</p>
          ))}
        </div>
        <div style={{background: 'var(--paper)', borderRadius: 20, padding: 32, border: '1px solid var(--line)'}}>
          <div className="mono" style={{color: 'var(--teal-deep)', marginBottom: 16}}>Why work with me</div>
          <ul style={{listStyle: 'none'}}>
            {why.map((b, i) => (
              <li key={i} style={{display: 'flex', gap: 14, padding: '14px 0', borderBottom: i < why.length-1 ? '1px solid var(--line)' : 'none', fontSize: 14.5, color: 'var(--char-2)', lineHeight: 1.5}}>
                <span className="mono" style={{color: 'var(--ochre)', flexShrink: 0, width: 20}}>{String(i+1).padStart(2,'0')}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [form, setForm] = useState({name:'', subject:'', details:''});
  const waHref = `https://wa.me/264836750117?text=${encodeURIComponent(
    `Hi MK,\n\nName: ${form.name || '—'}\nSubject: ${form.subject || '—'}\n\n${form.details || ''}`
  )}`;
  return (
    <section className="section" id="contact" style={{background:'var(--ink)', color:'var(--bone)', position:'relative', overflow:'hidden'}}>
      <TopoLines className="topo" seed={14} style={{opacity:'calc(0.2 * var(--pattern))'}}/>
      <div className="section-head" style={{color:'var(--bone)'}}>
        <div>
          <div className="label" style={{color:'var(--teal-bright)'}}>§ 06 — Contact</div>
          <h2 style={{color:'var(--bone)'}}>Send a brief.<br/>Get a quote.</h2>
        </div>
        <div className="desc" style={{color:'rgba(244,237,222,0.75)'}}>
          Fill in the form and we'll open WhatsApp with your message ready to send. Or reach us directly — we reply within a working day.
        </div>
      </div>

      <div style={{maxWidth:1440, margin:'0 auto', display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:60}} className="about-grid">
        <div style={{background:'rgba(244,237,222,0.04)', border:'1px solid rgba(244,237,222,0.1)', borderRadius:20, padding:36}}>
          <div className="mono" style={{color:'var(--teal-bright)', marginBottom:20}}>Brief form</div>
          {[['name','Your name'],['subject','Subject / project type']].map(([k,label]) => (
            <div key={k} style={{marginBottom:18}}>
              <label className="mono" style={{display:'block', fontSize:10, color:'rgba(244,237,222,0.5)', marginBottom:6, letterSpacing:'0.12em'}}>{label}</label>
              <input value={form[k]} onChange={e=>setForm({...form, [k]:e.target.value})} style={{width:'100%', background:'transparent', border:'none', borderBottom:'1px solid rgba(244,237,222,0.25)', padding:'10px 0', fontSize:18, color:'var(--bone)', fontFamily:'var(--f-display)', outline:'none'}}/>
            </div>
          ))}
          <div style={{marginBottom:24}}>
            <label className="mono" style={{display:'block', fontSize:10, color:'rgba(244,237,222,0.5)', marginBottom:6, letterSpacing:'0.12em'}}>Project details</label>
            <textarea value={form.details} onChange={e=>setForm({...form, details:e.target.value})} rows={5} style={{width:'100%', background:'transparent', border:'1px solid rgba(244,237,222,0.2)', borderRadius:8, padding:12, fontSize:14, color:'var(--bone)', fontFamily:'var(--f-body)', resize:'vertical', outline:'none'}}/>
          </div>
          <a href={waHref} target="_blank" rel="noopener" style={{display:'inline-flex', alignItems:'center', gap:10, background:'#25D366', color:'white', padding:'14px 28px', borderRadius:999, fontWeight:600, fontSize:15, textDecoration:'none'}}>
            Open in WhatsApp →
          </a>
        </div>

        <div>
          <div className="mono" style={{color:'var(--teal-bright)', marginBottom:20}}>Direct channels</div>
          {[
            ['WhatsApp', '+264 83 675 0117', 'https://wa.me/264836750117'],
            ['Email', 'info@mk3dprint.org', 'mailto:info@mk3dprint.org'],
            ['Location', 'Windhoek, Namibia', null],
          ].map(([label, val, href]) => (
            <a key={label} href={href || undefined} target={href ? '_blank' : undefined} rel="noopener" style={{display:'block', padding:'22px 0', borderBottom:'1px solid rgba(244,237,222,0.12)', textDecoration:'none', color:'inherit'}}>
              <div className="mono" style={{fontSize:10, color:'rgba(244,237,222,0.5)', letterSpacing:'0.14em', marginBottom:6}}>{label.toUpperCase()}</div>
              <div style={{fontFamily:'var(--f-display)', fontSize:24, fontWeight:500, color:'var(--bone)'}}>{val}</div>
            </a>
          ))}

          <div style={{marginTop:40, padding:24, background:'rgba(43,207,199,0.08)', border:'1px solid rgba(43,207,199,0.2)', borderRadius:16}}>
            <div className="mono" style={{color:'var(--teal-bright)', marginBottom:10, fontSize:10, letterSpacing:'0.14em'}}>BROWSE MODELS FIRST</div>
            <div style={{fontSize:14, color:'rgba(244,237,222,0.75)', lineHeight:1.5, marginBottom:12}}>Need ideas? Send us a link from any of these and we'll quote the print.</div>
            <div style={{display:'flex', gap:14, flexWrap:'wrap'}}>
              {[['Yeggi','https://www.yeggi.com'],['Printables','https://www.printables.com'],['MakerWorld','https://makerworld.com']].map(([n,u]) => (
                <a key={n} href={u} target="_blank" rel="noopener" style={{fontSize:13, color:'var(--teal-bright)', textDecoration:'underline', textUnderlineOffset:4}}>{n} ↗</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Services, Scanning, Imports, Shop, About, Contact });
