import HexagonMotif from "../../components/HexagonMotif"
import DocScreenshot from "../../components/DocScreenshot"
import CodeBlock from "../../components/CodeBlock"
import Callout from "../../components/Callout"

export default function AIAgentsGuide() {
  const guideLinks = [
    { id: "#guide", label: "Getting Started" },
    { id: "#guide-file-transfer", label: "Transferring Files" },
    { id: "#guide-rstudio", label: "RStudio Server" },
    { id: "#guide-marimo", label: "Marimo Notebooks" },
    { id: "#guide-ai-agents", label: "Using AI Coding Agents", current: true },
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
            <span aria-current="page">Using AI Coding Agents</span>
          </nav>
          <div className="doc-hero__heading">
            <div>
              <p className="eyebrow">Guide</p>
              <h1>Using AI Coding Agents</h1>
              <p>
                Experiment safely with autonomous and interactive coding agents
                like OpenCode inside isolated Coder virtual machines connected
                to UCSB AI Gateways.
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
            <strong>AI Consultation</strong>
            <p>
              Schedule time with DREAM Lab specialists to design agentic
              workflows for research.
            </p>
          </div>
        </aside>

        <article className="doc-content" id="overview">
          <div className="doc-intro">
            <p className="doc-kicker">Safe Experimentation</p>
            <h2>Why Use Coder for AI Coding Agents?</h2>
            <p>
              Coder workspaces provide a relatively safe way to experiment with
              AI coding agents like{" "}
              <a
                href="https://opencode.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenCode
              </a>
              , Claude Code, or OpenAI Codex. These tools, which generate and
              also <em>execute</em> code, are powerful, but they come with
              significant risks such as prompt injection or unintended file
              modifications.
            </p>
            <p>
              Because Coder workspaces are isolated virtual machines, the
              potential damage a rogue AI agent can cause is contained and
              cannot harm your personal laptop or campus network.
            </p>
          </div>

          <section className="doc-step" id="opencode">
            <div className="doc-step__number">1</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Pre-Installed Tool</p>
              <h2>OpenCode</h2>
              <p>
                OpenCode is an open-source coding agent that works with a wide
                range of AI services and model providers. It is preinstalled on
                all Coder Workspaces.
              </p>
              <p>
                To launch OpenCode, run <code>opencode</code> in your workspace
                terminal:
              </p>
              <CodeBlock code="opencode" />

              <DocScreenshot
                src="/images/opencode.png"
                alt="OpenCode terminal interface"
                label="Interactive OpenCode command-line interface in Coder."
              />

              <Callout type="tip" title="Switching Models in OpenCode">
                Inside OpenCode, type <code>/models</code> to search and select
                a model from your preferred model provider.
              </Callout>
            </div>
          </section>

          <section className="doc-step" id="gateways">
            <div className="doc-step__number">2</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Recommended Model Providers</p>
              <h2>Campus AI Gateways</h2>
              <p>
                By default, OpenCode offers default cloud services. For data
                privacy and university compliance, we recommend routing requests
                through campus gateways:
              </p>

              <h3>1. College IT (CIT) AI Gateway</h3>
              <p>
                The{" "}
                <a
                  href="https://docs.cloud.college.ucsb.edu/AI-LLM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  College IT AI Gateway
                </a>{" "}
                provides on-premises Large Language Model access for UCSB staff
                and faculty; incidental student use is supported. All inference
                runs directly on CIT hardware, and prompts stay on campus.
              </p>
              <p>
                In OpenCode, run <code>/models</code> and filter for{" "}
                <strong>&quot;CIT&quot;</strong>.
              </p>

              <h3 className="mt-8">2. DREAM Lab AI Gateway</h3>
              <p>
                The <a href="#ai-gateway">DREAM Lab AI Gateway</a> provides
                access to Google Gemini models through an OpenAI-compatible
                endpoint.
              </p>
              <p>
                To use it, generate a key at the{" "}
                <a
                  href="https://litellm.dreamlab.ucsb.edu/dreamlab-keys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API Key Manager
                </a>{" "}
                (UCSB NetID login required).
              </p>

              <p className="mt-4">
                Configure OpenCode using one of two methods:
              </p>
              <ul>
                <li>
                  Provide the key in the <strong>DREAM Lab LLM API Key</strong>{" "}
                  field when creating your workspace.
                </li>
                <li>
                  Or export the environment variable manually before launching:
                </li>
              </ul>

              <CodeBlock code={`export DREAMLAB_LLM_KEY=sk-...\nopencode`} />

              <p>
                Then run <code>/models</code> inside OpenCode and filter for{" "}
                <strong>&quot;DREAM Lab&quot;</strong>:
              </p>

              <DocScreenshot
                src="/images/opencode-dreamlab.png"
                alt="OpenCode configured with DREAM Lab AI Gateway"
                label="Selecting DREAM Lab models inside OpenCode."
              />
            </div>
          </section>

          <nav className="doc-pagination" aria-label="Guide pagination">
            <a href="#guide-marimo">
              <span>Previous</span>
              <strong>Marimo Notebooks</strong>
            </a>
            <a href="#guide-ai-commons" className="doc-pagination__next">
              <span>Next</span>
              <strong>UCSB AI Commons API</strong>
            </a>
          </nav>
        </article>

        <aside className="on-this-page">
          <p>On this page</p>
          <a href="#overview">Overview</a>
          <a href="#opencode">OpenCode Agent</a>
          <a href="#gateways">Campus AI Gateways</a>
        </aside>
      </div>
    </main>
  )
}
