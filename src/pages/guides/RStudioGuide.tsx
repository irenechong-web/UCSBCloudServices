import HexagonMotif from "../../components/HexagonMotif"
import DocScreenshot from "../../components/DocScreenshot"
import CodeBlock from "../../components/CodeBlock"
import Callout from "../../components/Callout"

export default function RStudioGuide() {
  const guideLinks = [
    { id: "#guide", label: "Getting Started" },
    { id: "#guide-file-transfer", label: "Transferring Files" },
    { id: "#guide-rstudio", label: "RStudio Server", current: true },
    { id: "#guide-marimo", label: "Marimo Notebooks" },
    { id: "#guide-ai-agents", label: "Using AI Coding Agents" },
    { id: "#guide-ai-commons", label: "UCSB AI Commons API" },
  ]

  return (
    <main id="main-content">
      <div className="doc-hero">
        <div className="site-grid">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="#home">Cloud Services</a>
            <span aria-hidden="true">/</span>
            <a href="#guides-page">Guides</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">RStudio Server</span>
          </nav>
          <div className="doc-hero__heading">
            <div>
              <p className="eyebrow">Guide</p>
              <h1>Getting Started with RStudio</h1>
              <p>
                Run RStudio Server directly in your web browser inside an
                isolated cloud workspace for statistical computing, data
                visualization, and reproducible research.
              </p>
            </div>
            <HexagonMotif />
          </div>
        </div>
      </div>

      <div className="site-grid docs-layout">
        <aside className="docs-sidebar">
          <nav aria-label="Guides navigation">
            <p className="docs-sidebar__title">All Guides</p>
            {guideLinks.map((guide, index) => (
              <a
                href={guide.id}
                key={guide.id}
                className={guide.current ? "is-current" : ""}
                aria-current={guide.current ? "page" : undefined}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {guide.label}
              </a>
            ))}
          </nav>
          <div className="sidebar-help">
            <strong>R & Data Support</strong>
            <p>
              DREAM Lab staff offer regular consultations on R and statistics.
            </p>
          </div>
        </aside>

        <article className="doc-content" id="overview">
          <div className="doc-intro">
            <p className="doc-kicker">R in the Cloud</p>
            <h2>Overview</h2>
            <p>
              RStudio is a powerful integrated development environment (IDE) for
              R programming. Coder workspaces allow you to run RStudio Server,
              which provides the full RStudio interface accessible securely
              through any modern web browser.
            </p>
          </div>

          <section className="doc-step" id="create-workspace">
            <div className="doc-step__number">1</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Configuration</p>
              <h2>Creating a Workspace with RStudio</h2>

              <Callout type="note" title="Enable during creation">
                RStudio must be enabled when the workspace is created. It cannot
                be added to an existing workspace after creation.
              </Callout>

              <ol>
                <li>
                  Navigate to the <strong>New Workspace</strong> page at{" "}
                  <a
                    href="https://coder.dreamlab.ucsb.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    coder.dreamlab.ucsb.edu
                  </a>
                  .
                </li>
                <li>Complete the required workspace name and policy checks.</li>
                <li>
                  Make sure <strong>Include RStudio</strong> is set to{" "}
                  <strong>Yes</strong>.
                </li>
                <li>
                  Click <strong>Create Workspace</strong>.
                </li>
              </ol>

              <p className="mt-4">
                Once booted, launch RStudio in a new browser tab with the
                RStudio button on the dashboard:
              </p>

              <DocScreenshot
                src="/images/workspace-rstudio.png"
                alt="Workspace Dashboard with RStudio Installed"
                label="Coder workspace dashboard showing RStudio button on port 8787."
              />
            </div>
          </section>

          <section className="doc-step" id="projects">
            <div className="doc-step__number">2</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Organization</p>
              <h2>Setting Up an RStudio Project</h2>
              <p>
                RStudio Projects organize your scripts, datasets, and working
                directories cleanly:
              </p>
              <ol>
                <li>
                  In RStudio, click <strong>File → New Project</strong>.
                </li>
                <li>
                  Select <strong>New Directory</strong>.
                </li>
                <li>
                  Choose <strong>New Project</strong>.
                </li>
                <li>
                  Enter a directory name (e.g., <code>my-project</code>) and
                  keep the parent directory set to <code>~</code>.
                </li>
                <li>
                  Click <strong>Create Project</strong>.
                </li>
              </ol>
              <p>
                RStudio generates an <code>.Rproj</code> file storing
                project-specific settings so you can easily resume work.
              </p>
            </div>
          </section>

          <section className="doc-step" id="packages">
            <div className="doc-step__number">3</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Packages & Git</p>
              <h2>Installing Packages & Git Setup</h2>
              <p>
                Install packages in your cloud RStudio session just like a local
                installation:
              </p>

              <CodeBlock
                language="R"
                code={`# Install from CRAN\ninstall.packages("tidyverse")\ninstall.packages("ggplot2")\n\n# Install from GitHub\ninstall.packages("devtools")\ndevtools::install_github("username/repository")`}
              />

              <Callout type="tip" title="Isolated Package Storage">
                Packages installed in your workspace persist across sessions
                within your persistent home directory, isolated from other
                workspaces to ensure reproducibility.
              </Callout>

              <h3 className="mt-8">Setting Up Git</h3>
              <p>
                Open the Terminal in RStudio (
                <strong>Tools → Terminal → New Terminal</strong>) and configure
                your identity:
              </p>
              <CodeBlock
                language="Terminal"
                code={`git config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"`}
              />

              <h3 className="mt-8">Additional Resources</h3>
              <ul>
                <li>
                  <a
                    href="https://docs.posit.co/ide/user/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RStudio User Guide ↗
                  </a>{" "}
                  — Comprehensive documentation.
                </li>
                <li>
                  <a
                    href="https://posit.co/resources/cheatsheets/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RStudio Cheat Sheets ↗
                  </a>{" "}
                  — Quick syntax and workflow reference.
                </li>
                <li>
                  <a
                    href="https://r4ds.hadley.nz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    R for Data Science (2e) ↗
                  </a>{" "}
                  — Definitive guide to modern data science in R.
                </li>
                <li>
                  <a
                    href="https://community.rstudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Posit Community ↗
                  </a>{" "}
                  — Knowledge sharing and Q&amp;A.
                </li>
              </ul>
            </div>
          </section>

          <nav className="doc-pagination" aria-label="Guide pagination">
            <a href="#guide-file-transfer">
              <span>Previous</span>
              <strong>Transferring Files</strong>
            </a>
            <a href="#guide-marimo" className="doc-pagination__next">
              <span>Next</span>
              <strong>Marimo Notebooks</strong>
            </a>
          </nav>
        </article>

        <aside className="on-this-page">
          <p>On this page</p>
          <a href="#overview">Overview</a>
          <a href="#create-workspace">Creating Workspace with RStudio</a>
          <a href="#projects">RStudio Projects</a>
          <a href="#packages">Packages & Git Setup</a>
        </aside>
      </div>
    </main>
  )
}
