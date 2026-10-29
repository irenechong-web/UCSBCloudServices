import ArrowLink from "../components/ArrowLink"
import ServiceIcon from "../components/ServiceIcon"

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-intro">
        <div className="site-grid home-intro__grid">
          <div className="home-intro__content">
            <p className="home-eyebrow">
              <span aria-hidden="true" />
              UCSB Library
            </p>
            <h1>
              DREAM Lab
              <br />
              Cloud Services
            </h1>
            <p className="home-intro__lede">
              Cloud computing services for research and teaching at UC Santa
              Barbara. Managed by the{" "}
              <a
                href="https://www.library.ucsb.edu/dreamlab"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                UCSB Library DREAM Lab
              </a>{" "}
              using computing resources provided by the{" "}
              <a
                href="https://www.lsit.ucsb.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                College of Letters and Science IT
              </a>
              .
            </p>
            <div className="home-actions">
              <a
                className="home-button home-button--gold"
                href="https://coder.dreamlab.ucsb.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch a Workspace ↗
              </a>
              <a className="home-button home-button--outline" href="#guide">
                Getting Started Guide
              </a>
            </div>
          </div>
          <div className="home-intro__visual">
            <div className="dream-badge-frame">
              <img
                src="/assets/dream-lab-logo.png"
                alt="DREAM Lab, UC Santa Barbara Library"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-section" id="services">
        <div className="site-grid">
          <div className="home-section__heading">
            <div>
              <p className="home-eyebrow">
                <span aria-hidden="true" />
                Cloud services
              </p>
              <h2>What we offer</h2>
            </div>
            <p>
              Flexible tools supported by people who understand research,
              teaching, and creative practice.
            </p>
          </div>

          <div className="offer-grid">
            <article className="offer-card offer-card--workspace">
              <div className="offer-card__icon">
                <ServiceIcon type="workspace" />
              </div>
              <div className="offer-card__content">
                <h3>Coder Workspaces</h3>
                <p>
                  On-demand virtual machines with commonly used data science
                  tools pre-installed. Anyone with a UCSB NetID can create a
                  workspace for the duration of the academic quarter.
                </p>
                <ArrowLink href="#coder-workspaces">
                  Explore Coder Workspaces
                </ArrowLink>
              </div>
            </article>

            <article className="offer-card offer-card--gateway">
              <div className="offer-card__icon">
                <ServiceIcon type="gateway" />
              </div>
              <div className="offer-card__content">
                <span className="experimental-label">Experimental</span>
                <h3>AI Gateway</h3>
                <p>
                  API access to Large Language Models (LLMs) hosted by campus
                  cloud providers through an OpenAI-compatible endpoint for
                  coding agents and research workflows.
                </p>
                <ArrowLink href="#ai-gateway">
                  Learn about the AI Gateway
                </ArrowLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section home-section--tint" id="getting-started">
        <div className="site-grid">
          <div className="home-section__heading">
            <div>
              <p className="home-eyebrow">
                <span aria-hidden="true" />A simple start
              </p>
              <h2>Getting started in 3 steps</h2>
            </div>
            <ArrowLink href="#guide">Read the full guide</ArrowLink>
          </div>

          <ol className="steps-list">
            <li>
              <span className="steps-list__number">01</span>
              <div>
                <span className="step-hex step-hex--coral" aria-hidden="true" />
                <h3>Log in with your UCSB NetID</h3>
                <p>
                  Visit <strong>coder.dreamlab.ucsb.edu</strong> and log in
                  securely using UCSB Single Sign-On via Google.
                </p>
              </div>
            </li>
            <li>
              <span className="steps-list__number">02</span>
              <div>
                <span className="step-hex step-hex--gold" aria-hidden="true" />
                <h3>Create a workspace</h3>
                <p>
                  Choose a name, accept usage policies, and enable optional
                  tools like RStudio, JupyterLab, or VS Code.
                </p>
              </div>
            </li>
            <li>
              <span className="steps-list__number">03</span>
              <div>
                <span className="step-hex step-hex--green" aria-hidden="true" />
                <h3>Open in browser or local IDE</h3>
                <p>
                  Work in your browser via VS Code Web, RStudio, or Terminal, or
                  connect directly from desktop VS Code or SSH.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="home-help" id="faq">
        <div className="site-grid home-help__inner">
          <div>
            <p className="home-eyebrow home-eyebrow--light">
              <span aria-hidden="true" />
              Support
            </p>
            <h2>Need help?</h2>
            <p>
              Find answers in our documentation or talk through your project
              with a DREAM Lab specialist.
            </p>
          </div>
          <div className="home-help__links">
            <a href="#faq-page">
              <span>Browse common questions</span>
              <strong>Visit the FAQ</strong>
            </a>
            <a
              href="https://join.slack.com/t/ucsbcarpentry/shared_invite/zt-3chxqtb2b-cVc3l~yj1ghUhZLNmOLfhQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Ask questions in real time</span>
              <strong>UCSB Carpentry Slack ↗</strong>
            </a>
            <a href="mailto:dreamlab@library.ucsb.edu">
              <span>Email the team directly</span>
              <strong>dreamlab@library.ucsb.edu</strong>
            </a>
            <a
              href="https://www.library.ucsb.edu/dreamlab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Workshops & consultations</span>
              <strong>About DREAM Lab ↗</strong>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
