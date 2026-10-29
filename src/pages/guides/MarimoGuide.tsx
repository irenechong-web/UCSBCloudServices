import HexagonMotif from "../../components/HexagonMotif"
import DocScreenshot from "../../components/DocScreenshot"
import CodeBlock from "../../components/CodeBlock"
import Callout from "../../components/Callout"

export default function MarimoGuide() {
  const guideLinks = [
    { id: "#guide", label: "Getting Started" },
    { id: "#guide-file-transfer", label: "Transferring Files" },
    { id: "#guide-rstudio", label: "RStudio Server" },
    { id: "#guide-marimo", label: "Marimo Notebooks", current: true },
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
            <span aria-current="page">Marimo Notebooks</span>
          </nav>
          <div className="doc-hero__heading">
            <div>
              <p className="eyebrow">Guide</p>
              <h1>Marimo Notebooks</h1>
              <p>
                Build reactive, reproducible Python notebooks stored as pure
                Python code, with integrated AI assistants connected to the
                DREAM Lab AI Gateway.
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
            <strong>Python Support</strong>
            <p>
              Need help installing libraries or setting up virtual environments?
              Contact DREAM Lab specialists.
            </p>
          </div>
        </aside>

        <article className="doc-content" id="overview">
          <div className="doc-intro">
            <p className="doc-kicker">Reactive Python</p>
            <h2>Overview</h2>
            <p>
              Marimo is a modern Python notebook tool. Unlike Jupyter, Marimo
              notebooks are stored as plain Python files and automatically
              re-run dependent cells when a cell changes. Marimo has integrated
              AI chat and agent tools that can be configured to use models
              through the <a href="#ai-gateway">DREAM Lab AI Gateway</a>.
            </p>
          </div>

          <section className="doc-step" id="install-marimo">
            <div className="doc-step__number">1</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Step 1</p>
              <h2>Creating the Workspace &amp; Installing Marimo</h2>
              <p>
                Create a standard workspace at{" "}
                <a
                  href="https://coder.dreamlab.ucsb.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  coder.dreamlab.ucsb.edu
                </a>
                . A default workspace is sufficient (no extra optional software
                required).
              </p>
              <p>
                Once booted, open a <strong>Terminal</strong> from the dashboard
                and run:
              </p>

              <CodeBlock
                code={`# Create a project folder and set it as your working directory\nmkdir my-project\ncd my-project\n\n# Create a Python virtual environment with uv\nuv venv\n\n# Install marimo in the environment\nuv pip install marimo\n\n# Run the marimo server\nuv run marimo edit --no-token --headless`}
              />
            </div>
          </section>

          <section className="doc-step" id="background-tmux">
            <div className="doc-step__number">2</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Step 2</p>
              <h2>Running Marimo in the Background with tmux</h2>
              <p>
                To keep Marimo running after closing your terminal window, use{" "}
                <code>tmux</code>:
              </p>

              <CodeBlock
                code={`# Run in a persistent tmux session\ncd ~/my-project\ntmux new-session -d -s marimo 'uv run marimo edit --no-token --headless'`}
              />

              <p>To stop the background server at any time:</p>
              <CodeBlock code="tmux kill-session -t marimo" />

              <h3 className="mt-8">Accessing the Marimo Interface</h3>
              <p>
                With Marimo running, access the interface through the{" "}
                <strong>Ports</strong> menu on your workspace dashboard:
              </p>

              <DocScreenshot
                src="/images/ports-menu.png"
                alt="Workspace Ports Menu"
                label="Click the port associated with the Marimo server."
              />

              <DocScreenshot
                src="/images/marimo-dashboard.png"
                alt="Marimo Dashboard"
                label="Create a new reactive notebook directly in your project folder."
              />
            </div>
          </section>

          <section className="doc-step" id="ai-configuration">
            <div className="doc-step__number">3</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Step 3</p>
              <h2>Configuring Chat and AI Agents</h2>
              <p>
                Marimo features integrated AI code generation and assistant
                chat. You can connect it to models through the{" "}
                <a href="#ai-gateway">DREAM Lab AI Gateway</a> using your
                personal API key.
              </p>

              <h3>1. Install AI Dependencies</h3>
              <p>
                Open <strong>User Settings</strong> (gear icon in the top
                right). Under <strong>Optional Dependencies</strong>, ensure{" "}
                <strong>AI features</strong> are installed, or click{" "}
                <strong>Install with uv</strong>.
              </p>

              <h3>2. Add a Custom AI Provider</h3>
              <p>
                Under the <strong>AI</strong> panel, go to{" "}
                <strong>AI Providers</strong> and click{" "}
                <strong>Add Provider</strong>:
              </p>
              <ul>
                <li>
                  <strong>Provider name:</strong> <code>litellm_proxy</code>
                </li>
                <li>
                  <strong>Base URL:</strong>{" "}
                  <code>https://litellm.dreamlab.ucsb.edu</code>
                </li>
                <li>
                  <strong>API key:</strong> your personal AI Gateway key
                </li>
              </ul>

              <h3>3. Add a Model</h3>
              <p>
                In the <strong>AI Models</strong> tab, click{" "}
                <strong>+ Add Model</strong>. Choose <code>litellm_proxy</code>{" "}
                as the provider, enter <code>gemini-3-flash-preview</code>, and
                click <strong>Add</strong>.
              </p>

              <DocScreenshot
                src="/images/marimo-add-model.png"
                alt="Adding a model in the AI Models tab"
                label="Add a custom model from the litellm_proxy provider."
              />

              <h3>4. Configure AI Features to Use the Model</h3>
              <p>
                In the <strong>AI Features</strong> tab, set Provider to{" "}
                <code>custom</code> and choose your model for{" "}
                <strong>Autocomplete</strong>, <strong>Chat</strong>, and{" "}
                <strong>Edit</strong> models.
              </p>

              <DocScreenshot
                src="/images/marimo-ai-features.png"
                alt="AI Features configuration"
                label="Configure autocomplete and assistant models."
              />

              <h3>5. Confirm Chat Interface</h3>
              <p>
                Open the <strong>Chat and Agents</strong> UI from the notebook
                menu to begin prompting.
              </p>

              <DocScreenshot
                src="/images/marimo-chat.png"
                alt="Marimo chat panel"
                label="Marimo integrated AI chat assistant."
              />
            </div>
          </section>

          <nav className="doc-pagination" aria-label="Guide pagination">
            <a href="#guide-rstudio">
              <span>Previous</span>
              <strong>RStudio Server</strong>
            </a>
            <a href="#guide-ai-agents" className="doc-pagination__next">
              <span>Next</span>
              <strong>Using AI Coding Agents</strong>
            </a>
          </nav>
        </article>

        <aside className="on-this-page">
          <p>On this page</p>
          <a href="#overview">Overview</a>
          <a href="#install-marimo">Installing Marimo</a>
          <a href="#background-tmux">Background tmux &amp; UI</a>
          <a href="#ai-configuration">AI Assistant Configuration</a>
        </aside>
      </div>
    </main>
  )
}
