import { useState } from "react"

function DreamMark({ showDots = true }: { showDots?: boolean }) {
  return (
    <div className="brand" aria-label="DREAM Lab Cloud Services">
      <span className="brand__word">DREAM</span>
      {showDots && (
        <span className="brand__dots" aria-hidden="true">
          <i className="dot dot--coral" />
          <i className="dot dot--gold" />
          <i className="dot dot--green" />
        </span>
      )}
      <span className="brand__descriptor">Lab Cloud Services</span>
    </div>
  )
}

function HexagonMotif({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`hexagon-motif${light ? " hexagon-motif--light" : ""}`}
      aria-hidden="true"
    >
      <i />
      <i />
      <i />
    </span>
  )
}

function Header({ currentPage }: { currentPage: "home" | "guide" | "faq" }) {
  const navigation = [
    "Home",
    "Getting Started",
    "Coder Workspaces",
    "AI Gateway",
    "FAQ",
    "About the DREAM Lab",
  ]

  return (
    <header className="site-header">
      <div className="campus-bar">
        <div className="site-grid campus-bar__inner">
          <a href="https://www.ucsb.edu/">
            University of California, Santa Barbara
          </a>
          <a className="launch-button" href="#services">
            Launch Coder
          </a>
        </div>
      </div>
      <div className="site-grid lockup-row">
        <span
          className="ucsb-library-logo"
          role="img"
          aria-label="UC Santa Barbara Library"
        />
      </div>
      <nav className="primary-navigation" aria-label="Primary navigation">
        <div className="site-grid primary-navigation__inner">
          {navigation.map((item) => (
            <a
              className={`primary-navigation__link${
                (item === "Home" && currentPage === "home") ||
                (item === "Getting Started" && currentPage === "guide") ||
                (item === "FAQ" && currentPage === "faq")
                  ? " is-current"
                  : ""
              }`}
              href={
                item === "Home"
                  ? "#home"
                  : item === "Getting Started"
                    ? "#guide"
                    : item === "FAQ"
                      ? "#faq-page"
                      : `#${item.toLowerCase().replaceAll(" ", "-")}`
              }
              key={item}
              aria-current={
                (item === "Home" && currentPage === "home") ||
                (item === "Getting Started" && currentPage === "guide") ||
                (item === "FAQ" && currentPage === "faq")
                  ? "page"
                  : undefined
              }
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-grid site-footer__inner">
        <div className="site-footer__brand">
          <DreamMark showDots={false} />
          <p>Digital Research Excellence, Access, Methods, and learning</p>
          <HexagonMotif light />
        </div>
        <div className="site-footer__contact">
          <p className="footer-heading">Contact</p>
          <address>
            UCSB Library
            <br />
            University of California
            <br />
            Santa Barbara, CA 93106-9010
          </address>
          <a href="mailto:dreamlab@library.ucsb.edu">
            dreamlab@library.ucsb.edu
          </a>
        </div>
        <nav className="site-footer__links" aria-label="Footer navigation">
          <p className="footer-heading">Explore</p>
          <a href="https://www.library.ucsb.edu/">UCSB Library</a>
          <a href="https://www.library.ucsb.edu/dreamlab">
            About the DREAM Lab
          </a>
          <a href="#main-content">Accessibility</a>
        </nav>
      </div>
      <div className="site-grid site-footer__legal">
        <p>© 2026 The Regents of the University of California</p>
      </div>
    </footer>
  )
}

function ServiceIcon({ type }: { type: "workspace" | "gateway" }) {
  if (type === "workspace") {
    return (
      <svg viewBox="0 0 48 48" role="img" aria-label="Workspace window">
        <rect x="5" y="8" width="38" height="31" rx="2" />
        <path d="M5 16h38M12 12h1M17 12h1" />
        <path d="m16 25 5 4-5 4M25 33h8" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" role="img" aria-label="Connected AI gateway">
      <path d="M24 12v9M13 31l8-5M35 31l-8-5" />
      <path d="m24 5 6 3.5v7L24 19l-6-3.5v-7L24 5ZM13 25l6 3.5v7L13 39l-6-3.5v-7l6-3.5ZM35 25l6 3.5v7L35 39l-6-3.5v-7l6-3.5Z" />
    </svg>
  )
}

function ArrowLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <a className="home-link" href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  )
}

function HomePage() {
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
              Secure, accessible cloud environments that help UCSB researchers,
              instructors, and students move from an idea to working code.
            </p>
            <div className="home-actions">
              <a className="home-button home-button--gold" href="#services">
                Launch a Workspace
              </a>
              <a
                className="home-button home-button--outline"
                href="#getting-started"
              >
                Getting Started
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
                  Launch a ready-to-use development environment in your browser
                  with the tools and computing power your project needs.
                </p>
                <ArrowLink href="#getting-started">
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
                  Experiment with approved generative AI models through a
                  shared, research-friendly API with centralized access.
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
                  Use familiar UCSB single sign-on to securely access Coder.
                </p>
              </div>
            </li>
            <li>
              <span className="steps-list__number">02</span>
              <div>
                <span className="step-hex step-hex--gold" aria-hidden="true" />
                <h3>Create a workspace</h3>
                <p>Choose a template and the resources that fit your work.</p>
              </div>
            </li>
            <li>
              <span className="steps-list__number">03</span>
              <div>
                <span className="step-hex step-hex--green" aria-hidden="true" />
                <h3>Open it in your browser</h3>
                <p>
                  Start coding with your files, tools, and environment ready.
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
              Find quick answers or talk through your project with a DREAM Lab
              specialist.
            </p>
          </div>
          <div className="home-help__links">
            <a href="#faq-page">
              <span>Browse common questions</span>
              <strong>Visit the FAQ</strong>
            </a>
            <a href="https://www.library.ucsb.edu/dreamlab">
              <span>Meet with our team</span>
              <strong>Book a consultation</strong>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  async function copyCode() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="code-block">
      <div className="code-block__header">
        <span>Terminal</span>
        <button
          className="code-block__copy"
          type="button"
          onClick={copyCode}
          aria-live="polite"
        >
          <span className="copy-icon" aria-hidden="true" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}

function Callout({
  type,
  title,
  children,
}: {
  type: "tip" | "warning"
  title: string
  children: React.ReactNode
}) {
  return (
    <aside className={`doc-callout doc-callout--${type}`}>
      <span className="doc-callout__icon" aria-hidden="true">
        {type === "tip" ? "i" : "!"}
      </span>
      <div>
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </aside>
  )
}

function ScreenshotSpace({ label }: { label: string }) {
  return (
    <figure className="screenshot">
      <div className="screenshot__canvas doc-screenshot-placeholder">
        <div className="screenshot__browser">
          <i />
          <i />
          <i />
          <span>coder.library.ucsb.edu</span>
        </div>
        <div className="doc-screenshot-placeholder__body">
          <HexagonMotif />
          <strong>Screenshot area</strong>
          <span>Replace with product imagery</span>
        </div>
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  )
}

function DocumentationPage() {
  const pages = [
    "Overview",
    "Request access",
    "Sign in to Coder",
    "Create a workspace",
    "Connect your tools",
    "Manage your workspace",
    "Get help",
  ]

  return (
    <main id="main-content">
      <div className="doc-hero">
        <div className="site-grid">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="#home">Cloud Services</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Getting Started</span>
          </nav>
          <div className="doc-hero__heading">
            <div>
              <p className="eyebrow">Getting Started</p>
              <h1>Launch your first Coder workspace</h1>
              <p>
                Sign in, choose a template, and start a secure cloud development
                environment in about five minutes.
              </p>
            </div>
            <HexagonMotif />
          </div>
        </div>
      </div>

      <div className="site-grid docs-layout">
        <aside className="docs-sidebar">
          <nav aria-label="Getting Started guide">
            <p className="docs-sidebar__title">In this guide</p>
            {pages.map((page, index) => (
              <a
                className={index === 0 ? "is-current" : ""}
                href={index === 0 ? "#overview" : `#step-${Math.min(index, 3)}`}
                key={page}
                aria-current={index === 0 ? "page" : undefined}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {page}
              </a>
            ))}
          </nav>
          <div className="sidebar-help">
            <strong>Need a hand?</strong>
            <p>DREAM Lab staff can help you choose the right workspace.</p>
            <a href="mailto:dreamlab@library.ucsb.edu">Contact support</a>
          </div>
        </aside>

        <article className="doc-content" id="overview">
          <div className="doc-intro">
            <p className="doc-kicker">Before you begin</p>
            <h2>What you’ll need</h2>
            <ul className="check-list">
              <li>An active UCSB NetID</li>
              <li>Access approval from the DREAM Lab team</li>
              <li>A modern web browser and internet connection</li>
            </ul>
          </div>

          <Callout type="tip" title="New to cloud workspaces?">
            A workspace is a private, reproducible development environment. You
            can stop it when you are away and return to the same files later.
          </Callout>

          <section className="doc-step" id="step-1">
            <div className="doc-step__number">1</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Sign in</p>
              <h2>Open the Coder dashboard</h2>
              <p>
                Select <strong>Launch Coder</strong> in the site header, choose
                UCSB Single Sign-On, and authenticate with your NetID.
              </p>
              <ScreenshotSpace label="The Coder sign-in screen uses UCSB Single Sign-On." />
            </div>
          </section>

          <section className="doc-step" id="step-2">
            <div className="doc-step__number">2</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Configure</p>
              <h2>Create your workspace</h2>
              <p>
                Choose a template that matches your project and give the
                workspace a short, descriptive name.
              </p>
              <CodeBlock
                code={`coder create coastal-data-lab \\\n  --template python-research \\\n  --parameter cpu=4`}
              />
              <Callout type="warning" title="Protect sensitive data">
                Do not upload restricted or personally identifiable data unless
                your project has been approved for the appropriate environment.
              </Callout>
            </div>
          </section>

          <section className="doc-step" id="step-3">
            <div className="doc-step__number">3</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Start working</p>
              <h2>Connect to your environment</h2>
              <p>
                Wait for the status to change to <strong>Running</strong>, then
                open the web terminal or launch VS Code in your browser.
              </p>
              <ScreenshotSpace label="A running workspace shows available applications and resources." />
              <CodeBlock code="coder ssh coastal-data-lab" />
            </div>
          </section>

          <nav className="doc-pagination" aria-label="Guide pagination">
            <a href="#home">
              <span>Previous</span>
              <strong>Cloud services overview</strong>
            </a>
            <a href="#step-1" className="doc-pagination__next">
              <span>Next</span>
              <strong>Request access</strong>
            </a>
          </nav>
        </article>

        <aside className="on-this-page">
          <p>On this page</p>
          <a href="#overview">Before you begin</a>
          <a href="#step-1">Open Coder</a>
          <a href="#step-2">Create a workspace</a>
          <a href="#step-3">Connect</a>
        </aside>
      </div>
    </main>
  )
}

const faqTopics = [
  {
    topic: "Accounts",
    accent: "coral",
    questions: [
      {
        question: "Who can use DREAM Lab Cloud Services?",
        answer:
          "Cloud Services are available to current UCSB students, faculty, staff, and sponsored research collaborators. Some services require a short access request so the team can confirm your needs.",
      },
      {
        question: "How do I request access?",
        answer:
          "Complete the access request form with your UCSB NetID, project description, and expected resource needs. Most requests are reviewed within two business days.",
      },
      {
        question: "Why can’t I sign in with my UCSB NetID?",
        answer:
          "First confirm that your NetID is active and that you have received an access approval email. If both are true, sign out of other UCSB sessions and try again in a private browser window.",
      },
    ],
  },
  {
    topic: "Workspaces",
    accent: "gold",
    questions: [
      {
        question: "What is a Coder workspace?",
        answer:
          "A Coder workspace is a secure cloud development environment with your selected tools, files, and compute resources. You can open it through a browser or connect with supported desktop tools.",
      },
      {
        question: "Will my files remain after I stop a workspace?",
        answer:
          "Yes. Stopping a workspace releases active compute resources but preserves files in its persistent home directory. Deleting a workspace permanently removes its associated storage.",
      },
      {
        question: "How long can I leave a workspace running?",
        answer:
          "Idle workspaces automatically stop to conserve shared resources. You can restart a stopped workspace at any time and continue where you left off.",
      },
    ],
  },
  {
    topic: "AI Gateway",
    accent: "green",
    questions: [
      {
        question: "What is the AI Gateway?",
        answer:
          "The AI Gateway is an experimental service providing centralized access to approved generative AI models through a consistent, research-friendly API.",
      },
      {
        question: "Can I send sensitive research data to a model?",
        answer:
          "Do not send restricted, regulated, personally identifiable, or unpublished sensitive data unless your project and selected model have been explicitly approved for that use.",
      },
      {
        question: "Which models are currently available?",
        answer:
          "Model availability changes as the service is evaluated. Sign in to the Gateway dashboard to see the current catalog, context limits, and usage guidance.",
      },
    ],
  },
  {
    topic: "Troubleshooting",
    accent: "aqua",
    questions: [
      {
        question: "My workspace is stuck starting. What should I do?",
        answer:
          "Wait a few minutes and refresh the dashboard. If the status does not change, stop and restart the workspace. Include the workspace name and error message when contacting support.",
      },
      {
        question: "Why did my workspace stop unexpectedly?",
        answer:
          "Workspaces may stop after an idle period or scheduled maintenance. Your persistent files remain available and the environment can usually be restarted from the dashboard.",
      },
      {
        question: "Where can I get help with a technical error?",
        answer:
          "Use the help panel on this page for common next steps or email the DREAM Lab team with the exact error, workspace name, and approximate time it occurred.",
      },
    ],
  },
]

function FAQPage() {
  const [query, setQuery] = useState("")
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    "Who can use DREAM Lab Cloud Services?",
  )
  const [chatOpen, setChatOpen] = useState(false)
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null)

  const normalizedQuery = query.trim().toLowerCase()
  const filteredTopics = faqTopics
    .map((topic) => ({
      ...topic,
      questions: topic.questions.filter(
        ({ question, answer }) =>
          question.toLowerCase().includes(normalizedQuery) ||
          answer.toLowerCase().includes(normalizedQuery) ||
          topic.topic.toLowerCase().includes(normalizedQuery),
      ),
    }))
    .filter((topic) => topic.questions.length > 0)

  return (
    <main id="main-content" className="faq-page">
      <section className="faq-hero">
        <div className="site-grid">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="#home">Cloud Services</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">FAQ</span>
          </nav>
          <div className="faq-hero__heading">
            <div>
              <p className="home-eyebrow">
                <span aria-hidden="true" />
                Help center
              </p>
              <h1>Frequently asked questions</h1>
              <p>
                Find quick answers about access, cloud workspaces, the AI
                Gateway, and common technical issues.
              </p>
            </div>
          </div>
          <div className="faq-search">
            <span className="faq-search__icon" aria-hidden="true" />
            <label className="sr-only" htmlFor="faq-search-input">
              Search frequently asked questions
            </label>
            <input
              id="faq-search-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search questions, topics, or keywords"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="site-grid faq-content" aria-live="polite">
        {normalizedQuery && (
          <p className="faq-results">
            {filteredTopics.reduce(
              (count, topic) => count + topic.questions.length,
              0,
            )}{" "}
            results for <strong>“{query}”</strong>
          </p>
        )}

        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <section
              className={`faq-topic faq-topic--${topic.accent}`}
              key={topic.topic}
            >
              <div className="faq-topic__heading">
                <div>
                  <p>Topic</p>
                  <h2>{topic.topic}</h2>
                </div>
              </div>
              <div className="faq-list">
                {topic.questions.map(({ question, answer }, index) => {
                  const isOpen = openQuestion === question
                  const panelId = `faq-${topic.topic}-${index}`
                    .toLowerCase()
                    .replaceAll(" ", "-")

                  return (
                    <article
                      className={`faq-item${isOpen ? " is-open" : ""}`}
                      key={question}
                    >
                      <h3>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() =>
                            setOpenQuestion(isOpen ? null : question)
                          }
                        >
                          <span>{question}</span>
                          <i aria-hidden="true" />
                        </button>
                      </h3>
                      {isOpen && (
                        <div className="faq-item__answer" id={panelId}>
                          <p>{answer}</p>
                        </div>
                      )}
                    </article>
                  )
                })}
              </div>
            </section>
          ))
        ) : (
          <div className="faq-empty">
            <h2>No matching questions</h2>
            <p>Try a broader search, or ask the DREAM Lab team for help.</p>
            <button type="button" onClick={() => setQuery("")}>
              Clear search
            </button>
          </div>
        )}
      </section>

      <button
        className="help-launcher"
        type="button"
        aria-expanded={chatOpen}
        aria-controls="help-panel"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <span className="help-launcher__icon" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        {chatOpen ? "Close help" : "Need help?"}
      </button>

      {chatOpen && (
        <aside
          className="help-panel"
          id="help-panel"
          aria-label="Help chat mockup"
        >
          <div className="help-panel__header">
            <div>
              <span>
                <strong>DREAM Lab help</strong>
                <small>Design preview</small>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Close help panel"
            >
              ×
            </button>
          </div>
          <div className="help-panel__body">
            <div className="chat-message chat-message--support">
              <p>
                Hi. I can point you toward common answers. What can we help
                with?
              </p>
            </div>
            {selectedPrompt && (
              <>
                <div className="chat-message chat-message--user">
                  <p>{selectedPrompt}</p>
                </div>
                <div className="chat-message chat-message--support">
                  <p>
                    This is a design mockup. In the finished experience, a
                    relevant answer or support link would appear here.
                  </p>
                </div>
              </>
            )}
            {!selectedPrompt && (
              <div className="suggested-questions">
                <p>Suggested questions</p>
                {[
                  "How do I request access?",
                  "Why won’t my workspace start?",
                  "Can I use sensitive data?",
                ].map((prompt) => (
                  <button
                    type="button"
                    key={prompt}
                    onClick={() => setSelectedPrompt(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="help-panel__composer">
            <input
              type="text"
              placeholder="Type a question"
              aria-label="Type a help question"
              disabled
            />
            <button type="button" disabled aria-label="Send question">
              →
            </button>
          </div>
        </aside>
      )}
    </main>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "guide" | "faq">(
    window.location.hash === "#guide"
      ? "guide"
      : window.location.hash === "#faq-page"
        ? "faq"
        : "home",
  )

  function handleNavigation(event: React.MouseEvent<HTMLDivElement>) {
    const href = (event.target as HTMLElement)
      .closest("a")
      ?.getAttribute("href")

    if (href === "#guide" || href === "#home" || href === "#faq-page") {
      setCurrentPage(
        href === "#guide" ? "guide" : href === "#faq-page" ? "faq" : "home",
      )
      window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 0)
    }
  }

  return (
    <div className="app-shell" onClick={handleNavigation}>
      <Header currentPage={currentPage} />
      {currentPage === "guide" ? (
        <DocumentationPage />
      ) : currentPage === "faq" ? (
        <FAQPage />
      ) : (
        <HomePage />
      )}
      <Footer />
    </div>
  )
}

export default App
