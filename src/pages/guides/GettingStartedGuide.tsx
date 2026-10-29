import HexagonMotif from "../../components/HexagonMotif"
import DocScreenshot from "../../components/DocScreenshot"
import CodeBlock from "../../components/CodeBlock"
import Callout from "../../components/Callout"

export default function GettingStartedGuide() {
  const guideLinks = [
    { id: "#guide", label: "Getting Started", current: true },
    { id: "#guide-file-transfer", label: "Transferring Files" },
    { id: "#guide-rstudio", label: "RStudio Server" },
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
            <span aria-current="page">Getting Started</span>
          </nav>
          <div className="doc-hero__heading">
            <div>
              <p className="eyebrow">Guide</p>
              <h1>Getting Started with Coder Workspaces</h1>
              <p>
                Welcome to Coder! This guide will help you create your first
                workspace and connect to it using browser tools or local IDEs.
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
            <strong>Need help?</strong>
            <p>
              Email{" "}
              <a href="mailto:dreamlab@library.ucsb.edu">
                dreamlab@library.ucsb.edu
              </a>{" "}
              or join the UCSB Carpentry Slack.
            </p>
          </div>
        </aside>

        <article className="doc-content" id="overview">
          <div className="doc-intro">
            <p className="doc-kicker">Quick Overview</p>
            <h2>What to expect</h2>
            <p>
              Anyone with an active UCSB NetID can create an isolated cloud
              workspace running Ubuntu Linux with data science tools like
              Python, R, Docker, and Pixi pre-configured.
            </p>
            <ul className="check-list">
              <li>Log in with UCSB Google Single Sign-On</li>
              <li>Boot an environment in 2-3 minutes</li>
              <li>
                Work in your browser or connect with your local desktop tools
              </li>
            </ul>
          </div>

          <section className="doc-step" id="create-workspace">
            <div className="doc-step__number">1</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Step 1</p>
              <h2>Creating a Workspace</h2>
              <ol>
                <li>
                  Visit{" "}
                  <a
                    href="https://coder.dreamlab.ucsb.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://coder.dreamlab.ucsb.edu
                  </a>
                  .
                </li>
                <li>
                  Click <strong>UCSB Login</strong> and log in using UCSB SSO
                  (via Google).
                </li>
                <li>
                  Click the <strong>New Workspace</strong> button.
                </li>
                <li>
                  On the <strong>New Workspace</strong> page:
                  <ul className="mt-2">
                    <li>
                      Give the workspace a <strong>name</strong> (required).
                    </li>
                    <li>
                      Check <strong>I understand the usage policies</strong>{" "}
                      (required).
                    </li>
                    <li>
                      Select additional software and workspace options to enable
                      (see below).
                    </li>
                    <li>
                      Click <strong>Create Workspace</strong>.
                    </li>
                  </ul>
                </li>
                <li>
                  It may take a couple of minutes for the workspace to boot.
                </li>
              </ol>

              <h3 className="mt-6">New Workspace Options</h3>
              <p>When creating a workspace, you can configure:</p>
              <ul>
                <li>
                  <strong>RStudio</strong>: Enables the RStudio Server system
                  service on port <code>8787</code>.
                </li>
                <li>
                  <strong>JupyterLab</strong>: Installs JupyterLab and commonly
                  used packages (<code>pip</code>, <code>numpy</code>,{" "}
                  <code>pandas</code>, <code>matplotlib</code>,{" "}
                  <code>ipython</code>, and <code>jupyter-ai</code>) into a
                  global Pixi environment (<code>coder-jupyter</code>). Runs in
                  the background on port <code>19999</code> with{" "}
                  <code>~/workspace</code> as the working directory.
                </li>
                <li>
                  <strong>Visual Studio Code (Desktop)</strong>: Configures the
                  Coder agent to enable desktop VS Code support, surfacing
                  direct connection buttons to launch remote sessions.
                </li>
                <li>
                  <strong>Visual Studio Code (Web)</strong>: Deploys the
                  browser-based <code>vscode-web</code> service rooted at{" "}
                  <code>/home/coder/workspace</code>.
                </li>
                <li>
                  <strong>DREAM Lab LLM API Key</strong>: Injects your{" "}
                  <a href="#ai-gateway">DREAM Lab AI Gateway</a> key into the
                  workspace as <code>$DREAMLAB_LLM_KEY</code> for automated
                  OpenCode authentication.
                </li>
              </ul>
            </div>
          </section>

          <section className="doc-step" id="connect-workspace">
            <div className="doc-step__number">2</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Step 2</p>
              <h2>Connecting to Your Workspace</h2>
              <p>
                Once your workspace is created, you will be directed to the
                workspace dashboard. You can interact with your workspace
                directly through the browser or via software on your local
                machine.
              </p>

              <DocScreenshot
                src="/images/workspace-annotated.png"
                alt="Coder Workspace Dashboard with browser-based tools"
                label="Workspace dashboard with buttons for web-based IDEs and terminal."
              />

              <h3>Browser-Based Tools</h3>
              <ul>
                <li>
                  <strong>JupyterLab or RStudio</strong>: Web-based IDEs for
                  data analysis in Python or R.
                </li>
                <li>
                  <strong>File Browser</strong>: For navigating your
                  workspace&apos;s file system and transferring files.
                </li>
                <li>
                  <strong>Terminal</strong>: A browser-based terminal that
                  provides instant access to your workspace shell environment.
                </li>
              </ul>
              <p>
                To use these, simply click the corresponding icon on your
                workspace&apos;s dashboard page.
              </p>
            </div>
          </section>

          <section className="doc-step" id="local-tools">
            <div className="doc-step__number">3</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Step 3</p>
              <h2>Connecting with Locally Installed Software</h2>
              <p>
                For a more integrated development experience, connect your local
                editor or terminal to your Coder workspace.
              </p>

              <h3>Connecting via Desktop VS Code</h3>
              <ol>
                <li>
                  Ensure you have the{" "}
                  <a
                    href="https://code.visualstudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visual Studio Code
                  </a>{" "}
                  desktop application installed.
                </li>
                <li>
                  Install the official <strong>Coder</strong> extension from the
                  VS Code Marketplace.
                </li>
                <li>
                  Open the Command Palette (<code>Ctrl+Shift+P</code> or{" "}
                  <code>Cmd+Shift+P</code> on macOS) and run:
                  <div className="my-2">
                    <code>Coder: Login</code>
                  </div>
                </li>
                <li>
                  Enter your Coder deployment URL:{" "}
                  <code>https://coder.dreamlab.ucsb.edu</code>
                </li>
                <li>
                  After logging in, browse your workspaces in the Coder view on
                  the sidebar, or run <code>Coder: Open Workspace</code>.
                </li>
              </ol>

              <h3 className="mt-8">Connecting via Coder CLI</h3>
              <p>
                The Coder CLI allows authenticating and connecting to workspaces
                directly from your terminal.
              </p>

              <p>
                <strong>Installing the Coder CLI (macOS / Linux):</strong>
              </p>
              <CodeBlock code="curl -L https://coder.com/install.sh | sh" />

              <p>
                For Windows, download and run the installer executable from{" "}
                <a
                  href="https://github.com/coder/coder/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coder&apos;s GitHub Releases page
                </a>
                .
              </p>

              <p>
                <strong>Authenticate the CLI:</strong>
              </p>
              <CodeBlock code="coder login https://coder.dreamlab.ucsb.edu" />
              <p>
                Follow the prompts to complete authentication in your browser.
              </p>

              <p>
                <strong>Connecting via SSH:</strong>
              </p>
              <CodeBlock code="coder ssh <workspace-name>" />

              <Callout type="tip" title="Persistence & Lifecycle">
                Files stored in your home directory persist when you stop and
                restart your workspace. Remember that workspaces auto-stop after
                4 hours of inactivity and are deleted at the end of each
                academic quarter.
              </Callout>
            </div>
          </section>

          <nav className="doc-pagination" aria-label="Guide pagination">
            <a href="#coder-workspaces">
              <span>Previous</span>
              <strong>Coder Workspaces Overview</strong>
            </a>
            <a href="#guide-file-transfer" className="doc-pagination__next">
              <span>Next</span>
              <strong>Transferring Files</strong>
            </a>
          </nav>
        </article>

        <aside className="on-this-page">
          <p>On this page</p>
          <a href="#overview">Overview</a>
          <a href="#create-workspace">Creating a Workspace</a>
          <a href="#connect-workspace">Connecting to Workspace</a>
          <a href="#local-tools">Local Tools (VS Code & CLI)</a>
        </aside>
      </div>
    </main>
  )
}
