// Reusable SVG decorative pieces for MK Scan Print Source

// Topographic contour lines — smooth concentric curves like Namibian dune/mountain topo maps
const TopoLines = ({ className = "", seed = 0, ...props }) => {
  // Seeded random
  const sr = (s) => { let x = Math.sin(s * 9301 + 4973) * 49297; return x - Math.floor(x); };

  // Generate 2-3 focal points (peaks/dune centres) per seed
  const foci = [];
  const nFoci = 2 + Math.floor(sr(seed + 99) * 2);
  for (let f = 0; f < nFoci; f++) {
    foci.push({
      x: 200 + sr(seed * 7 + f * 13) * 1000,
      y: 80 + sr(seed * 11 + f * 17) * 400,
      rx: 0.7 + sr(seed * 3 + f * 23) * 0.6, // x stretch
      ry: 0.7 + sr(seed * 5 + f * 31) * 0.6, // y stretch
      rot: sr(seed * 13 + f * 7) * Math.PI * 0.4 - 0.2, // slight rotation
    });
  }

  const paths = [];

  foci.forEach((focus, fi) => {
    const numRings = 10 + Math.floor(sr(seed + fi * 5) * 8);
    for (let r = 1; r <= numRings; r++) {
      const baseR = r * (28 + sr(seed + fi) * 16);
      const pts = [];
      const segments = 120;
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        // Organic wobble
        const wobble = 1 + Math.sin(angle * 3 + seed * 2 + fi) * 0.08
                         + Math.sin(angle * 5 + seed * 3.7 + fi * 2) * 0.04
                         + Math.sin(angle * 7 + seed * 1.3 + fi * 4) * 0.025;
        const radius = baseR * wobble;
        // Apply stretch and rotation
        const rx = radius * focus.rx;
        const ry = radius * focus.ry;
        const cos = Math.cos(focus.rot);
        const sin = Math.sin(focus.rot);
        const lx = rx * Math.cos(angle);
        const ly = ry * Math.sin(angle);
        const x = focus.x + lx * cos - ly * sin;
        const y = focus.y + lx * sin + ly * cos;
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      paths.push({
        key: `${fi}-${r}`,
        points: pts.join(' '),
        opacity: 0.08 + (r / numRings) * 0.12,
      });
    }
  });

  return (
    <svg className={className} {...props} viewBox="0 0 1440 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      {paths.map(p => (
        <polyline key={p.key} points={p.points} fill="none" stroke="#C5772A" strokeWidth="1" opacity={p.opacity}/>
      ))}
    </svg>
  );
};

// Wireframe 3D scanned object (placeholder model in hero spec-card)
const WireModel = () => (
  <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style={{width: '60%', height: 'auto'}}>
    <g fill="none" stroke="#2FCFC7" strokeWidth="0.8" opacity="0.85">
      {/* geometric object -- faceted low-poly head silhouette */}
      <path d="M120 30 L80 60 L70 110 L90 160 L120 170 L150 160 L170 110 L160 60 Z"/>
      <path d="M80 60 L120 80 L160 60"/>
      <path d="M70 110 L120 80 L170 110"/>
      <path d="M120 80 L120 170"/>
      <path d="M90 160 L120 130 L150 160"/>
      <path d="M70 110 L120 130 L170 110"/>
      <path d="M80 60 L90 160"/>
      <path d="M160 60 L150 160"/>
      {/* vertex dots */}
      {[[120,30],[80,60],[160,60],[70,110],[170,110],[90,160],[150,160],[120,170],[120,80],[120,130]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="#2FCFC7"/>
      ))}
    </g>
    {/* mesh triangulation overlay */}
    <g fill="none" stroke="#C5772A" strokeWidth="0.4" opacity="0.4">
      <path d="M120 30 L120 80 L80 60 Z"/>
      <path d="M120 30 L120 80 L160 60 Z"/>
      <path d="M120 80 L70 110 L90 160 Z"/>
      <path d="M120 80 L170 110 L150 160 Z"/>
    </g>
  </svg>
);

// Abstract "project art" fills — procedurally varied
const ProjectArt = ({ seed = 0, variant = 'scan' }) => {
  const hues = ['#C5772A', '#1BA7A0', '#9B3B1E', '#C9A26B', '#2FCFC7', '#E8D3B0'];
  const bg = variant === 'dark' ? '#161D23' : '#0C1E2C';
  const accent = hues[seed % hues.length];

  if (variant === 'scan') {
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{width:'100%', height:'100%', display:'block'}}>
        <rect width="400" height="300" fill={bg}/>
        {/* grid */}
        <g stroke="rgba(255,255,255,0.05)">
          {Array.from({length: 20}).map((_,i) => <line key={'v'+i} x1={i*20} y1={0} x2={i*20} y2={300}/>)}
          {Array.from({length: 15}).map((_,i) => <line key={'h'+i} x1={0} y1={i*20} x2={400} y2={i*20}/>)}
        </g>
        {/* contour mesh */}
        <g fill="none" stroke={accent} strokeWidth="1" opacity="0.9">
          {Array.from({length: 8}).map((_,i) => {
            const cx = 200, cy = 150;
            const r = 30 + i * 16 + (seed%7)*3;
            const pts = [];
            for (let a = 0; a <= 360; a += 6) {
              const rad = a * Math.PI/180;
              const wobble = Math.sin(rad*3 + seed) * (8 + i);
              const rr = r + wobble;
              pts.push(`${cx + Math.cos(rad)*rr},${cy + Math.sin(rad)*rr*0.7}`);
            }
            return <polygon key={i} points={pts.join(' ')}/>;
          })}
        </g>
        {/* crosshair */}
        <g stroke={accent} strokeWidth="0.7" opacity="0.6">
          <line x1="200" y1="130" x2="200" y2="170"/>
          <line x1="180" y1="150" x2="220" y2="150"/>
          <circle cx="200" cy="150" r="4" fill="none"/>
        </g>
      </svg>
    );
  }
  if (variant === 'print') {
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{width:'100%', height:'100%', display:'block'}}>
        <rect width="400" height="300" fill={bg}/>
        {/* layer lines */}
        <g>
          {Array.from({length: 40}).map((_,i) => {
            const w = 180 + Math.sin(i*0.3 + seed)*40;
            const y = 60 + i * 5;
            return <rect key={i} x={200 - w/2} y={y} width={w} height="2" fill={accent} opacity={0.15 + (i/60)}/>;
          })}
        </g>
        {/* nozzle */}
        <g stroke="#F4EDDE" strokeWidth="1.2" fill="none">
          <path d="M185 30 L215 30 L210 58 L190 58 Z"/>
          <line x1="200" y1="58" x2="200" y2="68"/>
        </g>
      </svg>
    );
  }
  if (variant === 'part') {
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{width:'100%', height:'100%', display:'block'}}>
        <rect width="400" height="300" fill={bg}/>
        {/* isometric part */}
        <g transform="translate(200 150)">
          <g fill="none" stroke={accent} strokeWidth="1.2">
            <path d="M-80 -20 L0 -60 L80 -20 L0 20 Z"/>
            <path d="M-80 -20 L-80 40 L0 80 L0 20"/>
            <path d="M80 -20 L80 40 L0 80"/>
            {/* ribs */}
            <path d="M-60 -10 L-60 50" opacity="0.5"/>
            <path d="M-40 0 L-40 60" opacity="0.5"/>
            <path d="M-20 10 L-20 70" opacity="0.5"/>
            <path d="M20 10 L20 70" opacity="0.5"/>
            <path d="M40 0 L40 60" opacity="0.5"/>
            <path d="M60 -10 L60 50" opacity="0.5"/>
            {/* hole */}
            <ellipse cx="0" cy="-20" rx="16" ry="8" stroke="#F4EDDE"/>
          </g>
          {/* dimension tick */}
          <g stroke="#F4EDDE" strokeWidth="0.5" opacity="0.45">
            <line x1="-80" y1="60" x2="-80" y2="75"/>
            <line x1="80" y1="60" x2="80" y2="75"/>
            <line x1="-80" y1="70" x2="80" y2="70"/>
            <text x="0" y="88" fill="#F4EDDE" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" opacity="0.7">214mm</text>
          </g>
        </g>
      </svg>
    );
  }
  // "import" variant — crate / shipping
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{width:'100%', height:'100%', display:'block'}}>
      <rect width="400" height="300" fill={bg}/>
      <g transform="translate(200 150)">
        <g fill="none" stroke={accent} strokeWidth="1.1">
          <path d="M-100 -40 L100 -40 L100 60 L-100 60 Z"/>
          <path d="M-100 -40 L-70 -60 L130 -60 L100 -40"/>
          <path d="M100 -40 L130 -60 L130 40 L100 60"/>
          {/* strapping */}
          <line x1="-100" y1="0" x2="100" y2="0"/>
          <line x1="-100" y1="0" x2="-70" y2="-20"/>
          <line x1="100" y1="0" x2="130" y2="-20"/>
          <line x1="-70" y1="-20" x2="130" y2="-20"/>
          <line x1="-30" y1="-40" x2="-30" y2="60"/>
          <line x1="30" y1="-40" x2="30" y2="60"/>
        </g>
        <g fill="#F4EDDE" fontFamily="JetBrains Mono" fontSize="7" opacity="0.7">
          <text x="-18" y="20" letterSpacing="1">MK-NA</text>
          <text x="-18" y="35" letterSpacing="1">FRAGILE</text>
        </g>
      </g>
    </svg>
  );
};

Object.assign(window, { TopoLines, WireModel, ProjectArt });
