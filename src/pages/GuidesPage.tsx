import HexagonMotif from "../components/HexagonMotif"
import ServiceIcon from "../components/ServiceIcon"
import ArrowLink from "../components/ArrowLink"

export default function GuidesPage() {
  const guides = [
    {
      title: "Getting Started with Coder Workspaces",
      description:
        "Step-by-step walkthrough for creating your first workspace, logging in via UCSB SSO, and connecting with browser tools or local VS Code.",
      href: "#guide",
      type: "workspace" as const,
      tag: "Core Guide",
    },
    {
      title: "Transferring Files to/from Your Workspace",
      description:
        "Learn how to upload and download data using Coder's Web File Browser, Magic Wormhole, or Google Drive integration with Rclone.",
      href: "#guide-file-transfer",
      type: "workspace" as const,
      tag: "Tutorial",
    },
    {
      title: "RStudio Server",
      description:
        "Run RStudio Server directly in your web browser for statistics, tidyverse analysis, and reproducible research projects.",
      href: "#guide-rstudio",
      type: "workspace" as const,
      tag: "IDE Guide",
    },
    {
      title: "Marimo Notebooks",
      description:
        "Build reactive Python notebooks stored as pure code, running in the background with tmux and integrated AI assistant chat.",
      href: "#guide-marimo",
      type: "workspace" as const,
      tag: "Notebook Guide",
    },
    {
      title: "Using AI Coding Agents",
      description:
        "Run OpenCode safely in an isolated VM connected to on-campus CIT or DREAM Lab AI Gateway models.",
      href: "#guide-ai-agents",
      type: "gateway" as const,
      tag: "AI Guide",
    },
    {
      title: "UCSB AI Commons API with OpenCode & Continue",
      description:
        "Configure OpenAI-compatible API credentials from the campus AI Commons for OpenCode and Continue in VS Code or Positron.",
      href: "#guide-ai-commons",
      type: "gateway" as const,
      tag: "Integration",
    },
  ]

  return (
    <main id="main-content">
      <div className="doc-hero">
        <div className="site-grid">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="#home">Cloud Services</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Guides</span>
          </nav>

          <div className="doc-hero__heading">
            <div>
              <p className="eyebrow">Documentation</p>
              <h1>Guides &amp; Tutorials</h1>
              <p>
                Practical walkthroughs for getting the most out of DREAM Lab
                Cloud Services, from setting up RStudio to agentic coding.
              </p>
            </div>
            <HexagonMotif />
          </div>
        </div>
      </div>

      <section className="home-section">
        <div className="site-grid">
          <div className="offer-grid">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className={`offer-card offer-card--${guide.type}`}
              >
                <div className="offer-card__icon">
                  <ServiceIcon type={guide.type} />
                </div>
                <div className="offer-card__content">
                  <span className="experimental-label">{guide.tag}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <ArrowLink href={guide.href}>Read Guide</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
