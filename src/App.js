import './App.css';

const tutorialSteps = [
  'Create a property profile with address, landlord, agent, and tenancy details.',
  'Build rooms and floor plans while you move through the inspection.',
  'Capture inventory notes, room photos, panoramas, circuits, and assessments.',
  'Export branded PDFs, reports, and marketing brochures when the job is ready.',
];

const features = [
  {
    title: 'Faster property reports',
    copy: 'Move from inspection to export with a guided room-by-room workflow built for repeat jobs.',
  },
  {
    title: 'Professional branded PDFs',
    copy: 'Deliver polished inventory reports with your company details, cover pages, and consistent formatting.',
  },
  {
    title: 'Room media hub',
    copy: 'Keep detail photos, panoramas, notes, and condition records attached to the right rooms.',
  },
  {
    title: 'Floor plan builder',
    copy: 'Sketch property layouts alongside the inventory so reports and brochures stay connected.',
  },
  {
    title: 'Marketing brochure export',
    copy: 'Turn property information and media into useful branded collateral for sales or lettings.',
  },
  {
    title: 'Compliance support',
    copy: 'Record fuse box circuits, Legionella checks, and structured evidence for property management.',
  },
];

const audiences = [
  'Letting agents',
  'Estate agents',
  'Landlords',
  'Property managers',
  'Inventory clerks',
];

const workflow = [
  'Add property',
  'Build rooms and floor plan',
  'Capture inventory and media',
  'Export report or brochure',
];

function App() {
  const year = new Date().getFullYear();

  return (
    <main className="landing-page">
      <section className="hero" id="top">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="InventoryPro home">
            <span className="brand-mark">IP</span>
            <span>InventoryPro</span>
          </a>
          <div className="nav-links">
            <a href="#tutorial">Tutorial</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </div>
          <a className="nav-cta" href="/login">Try the app</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Property reporting, built for professionals</p>
            <h1>Create inventories, reports, floor plans, and brochures from one workflow.</h1>
            <p className="hero-text">
              InventoryPro helps letting agents, landlords, estate agents, inventory clerks, and property managers
              capture inspections, organise media, and export client-ready property documents faster.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="/login">Start now</a>
              <a className="button secondary" href="#tutorial">Watch tutorial</a>
            </div>
            <div className="proof-row" aria-label="Key product outputs">
              <span>PDF reports</span>
              <span>Floor plans</span>
              <span>Brochures</span>
              <span>Compliance records</span>
            </div>
          </div>

          <div className="product-preview" aria-label="InventoryPro app preview">
            <div className="preview-toolbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="preview-body">
              <div className="preview-panel">
                <div>
                  <p className="panel-label">Inspection</p>
                  <h2>14 Willow Mews</h2>
                </div>
                <div className="status-pill">Ready to export</div>
              </div>
              <div className="preview-layout">
                <div className="room-list">
                  <span className="active">Kitchen</span>
                  <span>Reception</span>
                  <span>Bedroom 1</span>
                  <span>Bathroom</span>
                </div>
                <div className="report-card">
                  <div className="floor-plan" aria-hidden="true">
                    <span className="room room-a"></span>
                    <span className="room room-b"></span>
                    <span className="room room-c"></span>
                  </div>
                  <div className="media-strip" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="report-lines" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section video-section" id="tutorial">
        <div className="section-heading">
          <p className="eyebrow">Video walkthrough</p>
          <h2>Show the full inspection workflow in minutes.</h2>
          <p>
            Replace the placeholder URL with your YouTube, Vimeo, or local demo video when it is ready.
          </p>
        </div>
        <div className="tutorial-grid">
          <div className="video-frame">
            <iframe
              title="InventoryPro tutorial video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <ol className="tutorial-steps">
            {tutorialSteps.map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section description-section">
        <div className="description-copy">
          <p className="eyebrow">What it does</p>
          <h2>One workspace for property evidence, documents, and exports.</h2>
          <p>
            InventoryPro brings property inventory creation, floor plans, room media, panorama and detail photos,
            branded PDF reports, marketing brochures, fuse box records, circuit details, and Legionella assessments
            into a single structured workflow.
          </p>
        </div>
        <div className="description-list">
          <span>Create property inventories</span>
          <span>Build room-by-room floor plans</span>
          <span>Capture photos and panoramas</span>
          <span>Generate branded PDF reports</span>
          <span>Produce marketing brochures</span>
          <span>Manage subscription-gated exports</span>
        </div>
      </section>

      <section className="section features-section" id="features">
        <div className="section-heading">
          <p className="eyebrow">Benefits</p>
          <h2>Made for the property work that happens on-site and back at the desk.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section workflow-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>From property setup to branded export.</h2>
        </div>
        <div className="workflow">
          {workflow.map((item, index) => (
            <div className="workflow-step" key={item}>
              <span>{index + 1}</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section audience-section">
        <div>
          <p className="eyebrow">Who it is for</p>
          <h2>Built for teams and solo professionals handling property condition records.</h2>
        </div>
        <div className="audience-list">
          {audiences.map((audience) => (
            <span key={audience}>{audience}</span>
          ))}
        </div>
      </section>

      <section className="section cta-section" id="pricing">
        <div>
          <p className="eyebrow">Simple start</p>
          <h2>Start with the core workflow, then unlock exports when your reports are ready.</h2>
          <p>
            Keep pricing simple on the landing page and point active users towards the app, subscription, or login route.
          </p>
        </div>
        <a className="button primary" href="/login">Try the app</a>
      </section>

      <footer className="footer">
        <div>
          <a className="brand" href="#top" aria-label="InventoryPro home">
            <span className="brand-mark">IP</span>
            <span>InventoryPro</span>
          </a>
          <p>Property reports, media, floor plans, and branded exports in one professional workflow.</p>
        </div>
        <div className="footer-links">
          <a href="/login">App</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="mailto:hello@inventorypro.app">Contact</a>
        </div>
        <p className="copyright">© {year} InventoryPro</p>
      </footer>
    </main>
  );
}

export default App;
