// Page router + individual page shells for MK 3D Print

const Page = ({ children, title, eyebrow, seed = 7 }) => (
  <main style={{minHeight:'calc(100vh - 120px)', paddingTop: 40, paddingBottom: 80}}>
    <div style={{maxWidth: 1440, margin: '0 auto', padding: '40px 40px 60px', position:'relative', overflow:'hidden'}}>
      <TopoLines className="topo" seed={seed}/>
      <div style={{position:'relative', zIndex:2}}>
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="display" style={{fontSize: 'clamp(56px, 8vw, 112px)', marginTop: 16, letterSpacing: '-0.03em'}}>{title}</h1>
      </div>
    </div>
    {children}
  </main>
);

const HomePage = () => (<><Hero/><ScanPromo/><Services/><Scanning/><Imports/><Shop/><About/><Contact/></>);

const ScanningPage = () => (
  <Page eyebrow="§ Service / Scanning" seed={8} title={<>3D <em style={{fontFamily:'Instrument Serif, Georgia, serif', fontStyle:'italic', color:'var(--ochre)', fontWeight:400}}>Scanning</em>.</>}>
    <ScanningFull/>
  </Page>
);

const ImportsPage = () => (
  <Page eyebrow="§ Service / Imports" seed={9} title={<>Direct <em style={{fontFamily:'Instrument Serif, Georgia, serif', fontStyle:'italic', color:'var(--ochre)', fontWeight:400}}>imports</em>.</>}>
    <Imports/>
  </Page>
);

const ShopPage = () => (
  <Page eyebrow="§ Shop" seed={10} title={<>Ready-made <em style={{fontFamily:'Instrument Serif, Georgia, serif', fontStyle:'italic', color:'var(--ochre)', fontWeight:400}}>prints</em>.</>}>
    <Shop/>
  </Page>
);

const AboutPage = () => (
  <Page eyebrow="§ About" seed={11} title={<>About <em style={{fontFamily:'Instrument Serif, Georgia, serif', fontStyle:'italic', color:'var(--ochre)', fontWeight:400}}>MK</em>.</>}>
    <About/>
  </Page>
);

const ContactPage = () => (<Contact/>);

const ServicesPage = () => (
  <Page eyebrow="§ Capabilities" seed={12} title={<>Our <em style={{fontFamily:'Instrument Serif, Georgia, serif', fontStyle:'italic', color:'var(--ochre)', fontWeight:400}}>services</em>.</>}>
    <Services/>
  </Page>
);

Object.assign(window, { Page, HomePage, ScanningPage, ImportsPage, ShopPage, AboutPage, ContactPage, ServicesPage });
