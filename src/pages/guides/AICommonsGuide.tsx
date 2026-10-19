import HexagonMotif from "../../components/HexagonMotif"
import DocScreenshot from "../../components/DocScreenshot"
import CodeBlock from "../../components/CodeBlock"
import Callout from "../../components/Callout"

export default function AICommonsGuide() {
  const guideLinks = [
    { id: "#guide", label: "Getting Started" },
    { id: "#guide-file-transfer", label: "Transferring Files" },
    { id: "#guide-rstudio", label: "RStudio Server" },
    { id: "#guide-marimo", label: "Marimo Notebooks" },
    { id: "#guide-ai-agents", label: "Using AI Coding Agents" },
    { id: "#guide-ai-commons", label: "UCSB AI Commons API", current: true },
  ]

  const openCodeConfigJson = `{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "my-custom-provider": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "AI Commons",
      "options": {
        "baseURL": "https://YOUR-AI-COMMONS-ENDPOINT/v1",
        "apiKey": "YOUR_AI_COMMONS_API_KEY"
      },
      "models": {
        "claude-v4.5-haiku": {
          "name": "claude-v4.5-haiku"
        },
        "claude-v4.6-sonnet": {
          "name": "claude-v4.6-sonnet"
        },
        "claude-v4.6-opus": {
          "name": "claude-v4.6-opus"
        }
      }
    }
  }
}`

  const continueConfigYaml = `name: UCSB AI Commons
version: 1.0.0
schema: v1

models:
  - name: Claude Sonnet 4.6
    provider: openai
    model: claude-v4.6-sonnet
    apiBase: https://YOUR-AI-COMMONS-ENDPOINT/v1
    apiKey: YOUR_AI_COMMONS_API_KEY
    roles:
      - chat
      - edit
    capabilities:
      - tool_use

  - name: Claude Opus 4.6
    provider: openai
    model: claude-v4.6-opus
    apiBase: https://YOUR-AI-COMMONS-ENDPOINT/v1
    apiKey: YOUR_AI_COMMONS_API_KEY
    roles:
      - chat
      - edit
    capabilities:
      - tool_use

  - name: Claude Haiku 4.5
    provider: openai
    model: claude-v4.5-haiku
    apiBase: https://YOUR-AI-COMMONS-ENDPOINT/v1
    apiKey: YOUR_AI_COMMONS_API_KEY
    roles:
      - chat
      - edit
    capabilities:
      - tool_use`

  return (
    <main id="main-content">
      <div className="doc-hero">
        <div className="site-grid">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="#home">Cloud Services</a>
            <span aria-hidden="true">/</span>
            <a href="#guides-page">Guides</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">UCSB AI Commons API</span>
          </nav>
          <div className="doc-hero__heading">
            <div>
              <p className="eyebrow">Guide</p>
              <h1>Using the UCSB AI Commons API</h1>
              <p>
                Configure the UCSB AI Commons OpenAI-compatible API for OpenCode
                (terminal agent) and Continue (VS Code &amp; Positron
                extension).
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
            <strong>Campus AI Support</strong>
            <p>
              For ITS AI Commons access approvals, submit a request via UCSB
              Service-Now.
            </p>
          </div>
        </aside>

        <article className="doc-content" id="overview">
          <div className="doc-intro">
            <p className="doc-kicker">Integration Guide</p>
            <h2>Overview &amp; Prerequisites</h2>
            <p>
              This walkthrough explains how to configure the UCSB AI Commons API
              for two tools:
            </p>
            <ul>
              <li>
                <strong>OpenCode</strong> (terminal-based coding agent)
              </li>
              <li>
                <strong>Continue</strong> (VS Code and Positron extension)
              </li>
            </ul>

            <Callout type="important" title="Requesting API Access">
              The API is an add-on feature to AI Commons. To request access,{" "}
              <a
                href="https://ucsb.service-now.com/it?id=sc_cat_item&sys_id=05a9143feba583101cfffdf2dad0cdec"
                target="_blank"
                rel="noopener noreferrer"
              >
                submit your request in Service-Now
              </a>
              . Once approved, you will see <strong>API Key</strong> in your My
              Menu portal list.
            </Callout>

            <DocScreenshot
              src="/images/AI_commons.png"
              alt="AI Commons My Menu with API Key option"
              label="AI Commons portal navigation with API Key option."
            />

            <DocScreenshot
              src="/images/AI_commons_api.png"
              alt="AI Commons API Interface"
              label="AI Commons API dashboard interface."
            />

            <h3 className="mt-6">Querying Model Names</h3>
            <p>To list the models enabled on your account, run:</p>
            <CodeBlock
              code={`curl -s https://YOUR-AI-COMMONS-ENDPOINT/v1/models \\\n  -H "Authorization: Bearer YOUR_AI_COMMONS_API_KEY" \\\n  | python -c "import sys, json; [print(m['id']) for m in json.load(sys.stdin)['data']]"`}
            />
          </div>

          <section className="doc-step" id="opencode">
            <div className="doc-step__number">1</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Tool 1</p>
              <h2>Configuring OpenCode</h2>
              <p>
                OpenCode is preinstalled in Coder workspaces, or can be
                installed locally following instructions on{" "}
                <a
                  href="https://opencode.ai/docs#install"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  opencode.ai
                </a>
                .
              </p>

              <h3>Configuration File</h3>
              <p>
                Add the custom provider to your global configuration file at{" "}
                <code>~/.config/opencode/opencode.json</code>:
              </p>

              <CodeBlock language="JSON" code={openCodeConfigJson} />

              <p className="mt-4">
                Replace <code>https://YOUR-AI-COMMONS-ENDPOINT/v1</code> and{" "}
                <code>YOUR_AI_COMMONS_API_KEY</code> with your real credentials.
              </p>

              <p className="mt-4">
                Launch OpenCode and select your model with <code>/models</code>:
              </p>
              <CodeBlock code="opencode" />
            </div>
          </section>

          <section className="doc-step" id="continue">
            <div className="doc-step__number">2</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Tool 2</p>
              <h2>Configuring Continue (VS Code / Positron)</h2>
              <ol>
                <li>
                  Search for and install <strong>Continue</strong> from the VS
                  Code Extensions Marketplace.
                </li>
                <li>
                  Open the Continue panel, click the gear icon (Settings),
                  select <strong>Configs</strong>, and open{" "}
                  <strong>Main Config</strong> (
                  <code>~/.continue/config.yaml</code>).
                </li>
              </ol>

              <DocScreenshot
                src="/images/continue.png"
                alt="Continue IDE settings panel"
                label="Opening Main Config in Continue extension."
              />

              <h3 className="mt-6">Configuration YAML</h3>
              <CodeBlock language="YAML" code={continueConfigYaml} />

              <p className="mt-4">
                Replace the endpoint URL and API key with your values, then open
                the Continue panel to start coding with your models.
              </p>
            </div>
          </section>

          <section className="doc-step" id="troubleshooting">
            <div className="doc-step__number">3</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Verification</p>
              <h2>Authentication Troubleshooting</h2>
              <ul>
                <li>Verify your Base URL is correct.</li>
                <li>
                  Confirm <code>/v1</code> is not duplicated (e.g. avoid{" "}
                  <code>/v1/v1</code>).
                </li>
                <li>Confirm the API key is active in the AI Commons portal.</li>
                <li>Ensure no leading or trailing whitespace was copied.</li>
              </ul>
            </div>
          </section>

          <nav className="doc-pagination" aria-label="Guide pagination">
            <a href="#guide-ai-agents">
              <span>Previous</span>
              <strong>Using AI Coding Agents</strong>
            </a>
            <a href="#ai-gateway" className="doc-pagination__next">
              <span>Next</span>
              <strong>DREAM Lab AI Gateway</strong>
            </a>
          </nav>
        </article>

        <aside className="on-this-page">
          <p>On this page</p>
          <a href="#overview">Overview &amp; Access</a>
          <a href="#opencode">OpenCode Config</a>
          <a href="#continue">Continue Config</a>
          <a href="#troubleshooting">Troubleshooting</a>
        </aside>
      </div>
    </main>
  )
}
