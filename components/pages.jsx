// Page router + individual page shells for MK 3D Print

// Reusable section-page hero — matches Cut & Engrave energy
// with burn-keyword animation on the title and contour-line background
const PageHero = ({ eyebrow, words = [], italic, lede, seed = 7 }) => {
  const { LaserBgBeam } = window;
  return (
    <section className="page-hero">
      {LaserBgBeam && <LaserBgBeam variant="hero"/>}
      <div className="page-hero__inner">
        <div className="laser-eyebrow">
          <span className="laser-dot"></span>{eyebrow}
        </div>
        <h1 className="page-hero__title">
          {words.map((w, i) => {
            const clean = w.replace(/\.$/, '');
            return (
              <React.Fragment key={i}>
                <span className="laser-word laser-word--burn">{clean}.</span>{' '}
              </React.Fragment>
            );
          })}
          {italic && <em className="laser-italic">{italic}.</em>}
        </h1>
        {lede && <p className="page-hero__lede">{lede}</p>}
      </div>
    </section>
  );
};

const HomePage = () => (<><Hero/><ScanPromo/><Services/><Scanning/><Imports/><Shop/><About/><Contact/></>);

const ScanningPage = () => (
  <div className="laser-root">
    <PageHero
      eyebrow="Service · Live since 2025"
      words={['Scan', 'Capture']}
      italic="Reverse engineer"
      lede="The only dedicated 3D scanning workshop in Namibia. Sub-millimetre accuracy with the Creality CR-Scan Raptor — turn any physical object into a precise digital model for reproduction, modification, or archival."
      seed={8}
    />
    <ScanningFull/>
  </div>
);

const ImportsPage = () => (
  <div className="laser-root">
    <PageHero
      eyebrow="Service · Available on request"
      words={['Source.', 'Ship']}
      italic="Deliver"
      lede="Direct imports from 23 countries — USA, Europe, Asia. Smaller products, significant savings on transport, and a 2–3 week delivery window. Available on request only."
      seed={9}
    />
    <Imports/>
  </div>
);

const ShopPage = () => (
  <div className="laser-root">
    <PageHero
      eyebrow="Inspiration · Made in Windhoek"
      words={['Browse', 'Pick']}
      italic="Print"
      lede="Hundreds of ready-to-print models, exclusive premium figurines, and original in-stock prints. Don't see what you want? Send any design from Printables, MakerWorld, or Yeggi — we'll print it."
      seed={10}
    />
    <Shop/>
  </div>
);

const AboutPage = () => (
  <div className="laser-root">
    <PageHero
      eyebrow="About · MK 3D Printing and Investments CC"
      words={['Local.', 'Honest']}
      italic="Open"
      lede="Born during COVID, raised by problem-solving. A one-person Windhoek workshop where scanning, 3D printing, laser fabrication, and direct imports work together as parts of the same answer."
      seed={11}
    />
    <About/>
  </div>
);

const ContactPage = () => (<Contact/>);

const ServicesPage = () => (
  <div className="laser-root">
    <PageHero
      eyebrow="Capabilities · Five integrated services"
      words={['Scan.', 'Print.', 'Cut.', 'Engrave']}
      italic="Source"
      lede="One Windhoek workshop. Five services that work together — from broken plastic part to custom branded sticker pack, you don't have to chase three vendors."
      seed={12}
    />
    <Services/>
  </div>
);

// Cut & Engrave page (Coming Soon — fully accessible)
const LaserPagePublic = () => (typeof window.LaserPage === 'function' ? <window.LaserPage/> : null);

// 3D Printing dedicated page
const PrintingPagePublic = () => (typeof window.PrintingPage === 'function' ? <window.PrintingPage/> : null);

Object.assign(window, { PageHero, HomePage, ScanningPage, ImportsPage, ShopPage, AboutPage, ContactPage, ServicesPage, LaserPagePublic, PrintingPagePublic });
