// Animated SVG material icons for the Cut & Engrave page
// Each icon = small inline SVG with CSS-driven motion. Brand-native colors.

const MatIcon = ({ kind, size = 28 }) => {
  const s = size;
  switch (kind) {
    case 'wood':
      return (
        <svg viewBox="0 0 32 32" width={s} height={s} className="mi mi-wood">
          <rect x="2" y="6" width="28" height="20" rx="2" fill="#C5772A" opacity="0.15"/>
          <path className="mi-grain" d="M4 10 Q 16 8 28 10" stroke="#9B3B1E" strokeWidth="1" fill="none"/>
          <path className="mi-grain" d="M4 15 Q 16 13 28 15" stroke="#9B3B1E" strokeWidth="0.8" fill="none" style={{ animationDelay: '0.3s' }}/>
          <path className="mi-grain" d="M4 20 Q 16 18 28 20" stroke="#9B3B1E" strokeWidth="1" fill="none" style={{ animationDelay: '0.6s' }}/>
          <path className="mi-grain" d="M4 25 Q 16 23 28 25" stroke="#9B3B1E" strokeWidth="0.8" fill="none" style={{ animationDelay: '0.9s' }}/>
        </svg>
      );
    case 'leather':
      return (
        <svg viewBox="0 0 32 32" width={s} height={s} className="mi mi-leather">
          <rect x="4" y="6" width="24" height="20" rx="3" fill="#8B4513" opacity="0.7"/>
          <rect x="4" y="6" width="24" height="20" rx="3" fill="none" stroke="#C5772A" strokeWidth="0.8" strokeDasharray="2 2" className="mi-stitch"/>
          <circle cx="9" cy="11" r="0.8" fill="#5D2E0A" className="mi-stitch-dot"/>
          <circle cx="16" cy="11" r="0.8" fill="#5D2E0A" className="mi-stitch-dot" style={{ animationDelay: '0.2s' }}/>
          <circle cx="23" cy="11" r="0.8" fill="#5D2E0A" className="mi-stitch-dot" style={{ animationDelay: '0.4s' }}/>
        </svg>
      );
    case 'acrylic':
      return (
        <svg viewBox="0 0 32 32" width={s} height={s} className="mi mi-acrylic">
          <rect x="6" y="6" width="20" height="20" rx="2" fill="rgba(47,207,199,0.2)" stroke="rgba(47,207,199,0.5)" strokeWidth="1"/>
          <path className="mi-shimmer" d="M 8 8 L 14 8 L 8 14 Z" fill="rgba(255,255,255,0.7)"/>
          <path className="mi-shimmer" d="M 22 18 L 26 18 L 22 22 Z" fill="rgba(255,255,255,0.5)" style={{ animationDelay: '0.5s' }}/>
        </svg>
      );
    case 'paper':
      return (
        <svg viewBox="0 0 32 32" width={s} height={s} className="mi mi-paper">
          <rect x="7" y="4" width="18" height="24" rx="1.5" fill="#F5EFE0" stroke="#C5772A" strokeWidth="0.8"/>
          <line className="mi-line" x1="10" y1="9" x2="22" y2="9" stroke="#9B3B1E" strokeWidth="0.6"/>
          <line className="mi-line" x1="10" y1="14" x2="20" y2="14" stroke="#9B3B1E" strokeWidth="0.6" style={{ animationDelay: '0.2s' }}/>
          <line className="mi-line" x1="10" y1="19" x2="22" y2="19" stroke="#9B3B1E" strokeWidth="0.6" style={{ animationDelay: '0.4s' }}/>
          <line className="mi-line" x1="10" y1="24" x2="18" y2="24" stroke="#9B3B1E" strokeWidth="0.6" style={{ animationDelay: '0.6s' }}/>
        </svg>
      );
    case 'vinyl':
      return (
        <svg viewBox="0 0 32 32" width={s} height={s} className="mi mi-vinyl">
          <circle cx="16" cy="16" r="11" fill="#1BA7A0"/>
          <circle cx="16" cy="16" r="11" fill="none" stroke="#fff" strokeWidth="0.8" strokeDasharray="3 2" className="mi-cut-line"/>
          <text x="16" y="20" textAnchor="middle" fontSize="9" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fill="#fff">MK</text>
          <path className="mi-peel" d="M 24 8 L 28 6 L 26 12 Z" fill="#fff"/>
        </svg>
      );
    case 'fabric':
      return (
        <svg viewBox="0 0 32 32" width={s} height={s} className="mi mi-fabric">
          <pattern id="weave" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
            <rect width="6" height="6" fill="#2FCFC7" opacity="0.15"/>
            <line x1="0" y1="3" x2="6" y2="3" stroke="#0E7A76" strokeWidth="0.5"/>
            <line x1="3" y1="0" x2="3" y2="6" stroke="#0E7A76" strokeWidth="0.5"/>
          </pattern>
          <rect x="4" y="4" width="24" height="24" rx="2" fill="url(#weave)" className="mi-weave"/>
        </svg>
      );
    case 'glass':
      return (
        <svg viewBox="0 0 32 32" width={s} height={s} className="mi mi-glass">
          <circle cx="16" cy="16" r="11" fill="rgba(47,207,199,0.15)" stroke="rgba(47,207,199,0.4)" strokeWidth="1"/>
          <circle cx="16" cy="16" r="6" fill="none" stroke="rgba(47,207,199,0.6)" strokeWidth="0.6" className="mi-ripple"/>
          <circle cx="16" cy="16" r="9" fill="none" stroke="rgba(47,207,199,0.4)" strokeWidth="0.6" className="mi-ripple" style={{ animationDelay: '0.5s' }}/>
        </svg>
      );
    case 'slate':
      return (
        <svg viewBox="0 0 32 32" width={s} height={s} className="mi mi-slate">
          <path d="M 5 8 L 27 6 L 28 25 L 4 26 Z" fill="#3a3a40"/>
          <path d="M 8 12 L 24 11" stroke="#5a5a60" strokeWidth="0.6" className="mi-engrave-line"/>
          <path d="M 8 16 L 22 15" stroke="#7a7a80" strokeWidth="0.6" className="mi-engrave-line" style={{ animationDelay: '0.3s' }}/>
          <path d="M 8 20 L 23 19" stroke="#5a5a60" strokeWidth="0.6" className="mi-engrave-line" style={{ animationDelay: '0.6s' }}/>
        </svg>
      );
    case 'metal':
      return (
        <svg viewBox="0 0 32 32" width={s} height={s} className="mi mi-metal">
          <rect x="5" y="9" width="22" height="14" rx="1" fill="url(#mtl)"/>
          <defs>
            <linearGradient id="mtl" x1="0" x2="1">
              <stop offset="0" stopColor="#9aa0a8"/>
              <stop offset="0.5" stopColor="#d4d8de"/>
              <stop offset="1" stopColor="#9aa0a8"/>
            </linearGradient>
          </defs>
          <rect x="5" y="9" width="22" height="14" rx="1" fill="rgba(255,255,255,0.4)" className="mi-shine"/>
          <circle cx="8" cy="11.5" r="0.6" fill="#666"/>
          <circle cx="24" cy="11.5" r="0.6" fill="#666"/>
          <circle cx="8" cy="20.5" r="0.6" fill="#666"/>
          <circle cx="24" cy="20.5" r="0.6" fill="#666"/>
        </svg>
      );
    case 'ceramic':
      return (
        <svg viewBox="0 0 32 32" width={s} height={s} className="mi mi-ceramic">
          <rect x="5" y="5" width="22" height="22" rx="2" fill="#f5f1ea" stroke="#C5772A" strokeWidth="0.6"/>
          <circle cx="11" cy="11" r="1.5" fill="#9B3B1E" className="mi-dot"/>
          <circle cx="21" cy="11" r="1.5" fill="#9B3B1E" className="mi-dot" style={{ animationDelay: '0.15s' }}/>
          <circle cx="11" cy="21" r="1.5" fill="#9B3B1E" className="mi-dot" style={{ animationDelay: '0.3s' }}/>
          <circle cx="21" cy="21" r="1.5" fill="#9B3B1E" className="mi-dot" style={{ animationDelay: '0.45s' }}/>
          <circle cx="16" cy="16" r="2" fill="#C5772A" className="mi-dot" style={{ animationDelay: '0.6s' }}/>
        </svg>
      );
    case 'cork':
      return (
        <svg viewBox="0 0 32 32" width={s} height={s} className="mi mi-cork">
          <rect x="4" y="4" width="24" height="24" rx="3" fill="#C49A6C"/>
          {[[8,8],[18,8],[12,14],[22,14],[8,20],[18,22],[24,24],[14,24]].map(([x,y], i) => (
            <circle key={i} cx={x} cy={y} r={1 + (i % 3) * 0.4} fill="#8B6B3A" className="mi-cork-dot" style={{ animationDelay: `${i * 0.1}s` }}/>
          ))}
        </svg>
      );
    default:
      return <div style={{width: s, height: s, background: 'var(--paper-2)', borderRadius: 4}}/>;
  }
};

Object.assign(window, { MatIcon });
