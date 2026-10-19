import HexagonMotif from "../components/HexagonMotif"
import DocTable from "../components/DocTable"
import CodeBlock from "../components/CodeBlock"
import Callout from "../components/Callout"

export default function AIGatewayPage() {
  const toc = [
    { id: "overview", label: "Overview" },
    { id: "endpoint-models", label: "Endpoint & Models" },
    { id: "api-keys", label: "Creating an API Key" },
    { id: "python-example", label: "Python Code Example" },
    { id: "privacy-security", label: "Data Privacy & Security" },
    { id: "responsible-use", label: "Responsible Use" },
  ]

  const pythonExampleCode = `import os
from openai import OpenAI

# In a Coder Workspace with a configured key, DREAMLAB_LLM_KEY is set automatically
api_key = os.environ.get("DREAMLAB_LLM_KEY", "your-api-key-here")

client = OpenAI(
    api_key=api_key,
    base_url="https://litellm.dreamlab.ucsb.edu/v1"
)

response = client.chat.completions.create(
    model="gemini-3.5-flash-lite",
    messages=[
        {"role": "user", "content": "Explain the difference between a list and a tuple in Python."}
    ]
)

print(response.choices[0].message.content)`

  return (
    <main id="main-content">
      <div className="doc-hero">
        <div className="site-grid">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="#home">Cloud Services</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">AI Gateway</span>
          </nav>
          <div className="doc-hero__heading">
            <div>
              <p className="eyebrow">API Services</p>
              <h1>DREAM Lab AI Gateway</h1>
              <p>
                Centralized, OpenAI-compatible API access to Large Language
                Models hosted by campus cloud providers for coding agents and
                research workflows.
              </p>
            </div>
            <HexagonMotif />
          </div>
        </div>
      </div>

      <div className="site-grid docs-layout">
        <aside className="docs-sidebar">
          <nav aria-label="AI Gateway navigation">
            <p className="docs-sidebar__title">Contents</p>
            {toc.map((item, index) => (
              <a href={`#${item.id}`} key={item.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="sidebar-help">
            <strong>Key Management</strong>
            <p>
              Generate or check your quota at the{" "}
              <a
                href="https://litellm.dreamlab.ucsb.edu/dreamlab-keys"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Key Manager ↗
              </a>
              .
            </p>
          </div>
        </aside>

        <article className="doc-content" id="overview">
          <div className="doc-intro">
            <Callout type="important" title="Experimental Service Notice">
              This is an experimental service. Users may experience occasional
              interruptions, and we cannot guarantee its long-term availability.
            </Callout>

            <p className="doc-kicker">About the Gateway</p>
            <h2>Overview</h2>
            <p>
              DREAM Lab&apos;s AI gateway service provides API access to Large
              Language Models (LLMs) hosted by campus cloud providers
              (currently, Google). It can be used in conjunction with a coding
              agent (such as OpenCode or Continue) or to build custom research
              AI workflows.
            </p>
            <p>
              <strong>Note:</strong> The gateway does not provide a web chat UI.
              The service is primarily oriented toward DREAM Lab workshop
              attendees, researchers learning AI-assisted coding, and Library
              staff.
            </p>
          </div>

          <section id="endpoint-models" className="mt-10">
            <h2>API Endpoint &amp; Supported Models</h2>
            <p>
              The OpenAI-compatible API endpoint for the gateway service is:
            </p>
            <div className="my-3">
              <code>https://litellm.dreamlab.ucsb.edu/v1</code>
            </div>

            <h3 className="mt-6">Supported Google Gemini Models</h3>
            <DocTable
              headers={["Model Name", "Best For", "Description"]}
              rows={[
                [
                  <code>gemini-4-argon</code>,
                  "Complex reasoning & coding",
                  "Frontier model for challenging reasoning and software architecture tasks.",
                ],
                [
                  <code>gemini-3.8-flash</code>,
                  "Agentic coding",
                  "Fast, highly capable model tuned for autonomous agent execution loops.",
                ],
                [
                  <code>gemini-3.5-flash-lite</code>,
                  "Low-cost inference",
                  "High-throughput model ideal for text processing and lightweight tasks.",
                ],
                [
                  <code>gemini-embedding-2</code>,
                  "Embeddings",
                  "Multimodal embedding model for vector search and retrieval.",
                ],
              ]}
            />
          </section>

          <section id="api-keys" className="mt-10">
            <h2>Creating an API Key</h2>
            <p>
              Anyone with a valid UCSB NetID can create a key through the{" "}
              <a
                href="https://litellm.dreamlab.ucsb.edu/dreamlab-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                API Key Manager ↗
              </a>
              .
            </p>

            <Callout type="note" title="Key Policies &amp; Restrictions">
              <ul>
                <li>You may have only one active key at a time.</li>
                <li>
                  If you regenerate a new key, your previous key is
                  automatically disabled.
                </li>
                <li>
                  Keys expire automatically after <strong>three months</strong>.
                </li>
                <li>
                  Your key has an allocated budget that resets periodically. Use
                  the key manager to view your remaining balance.
                </li>
                <li>
                  Usage reflects real API expenses; requests to larger models
                  consume quota faster than lighter models.
                </li>
              </ul>
            </Callout>
          </section>

          <section id="python-example" className="mt-10">
            <h2>Using the Gateway with Python</h2>
            <p>
              Because the gateway exposes an OpenAI-compatible endpoint, you can
              interact with models using the standard <code>openai</code> Python
              library:
            </p>

            <CodeBlock
              code={`mkdir llm-example\ncd llm-example\nuv venv\nsource .venv/bin/activate\nuv pip install openai`}
            />

            <p className="mt-4">
              Create a script (<code>main.py</code>) specifying the gateway base
              URL:
            </p>

            <CodeBlock language="Python" code={pythonExampleCode} />

            <p className="mt-4">Run the script:</p>
            <CodeBlock code="python main.py" />
          </section>

          <section id="privacy-security" className="mt-10">
            <h2>Data Privacy &amp; Security</h2>

            <Callout type="warning" title="Data Classification Restriction">
              The DREAM Lab AI Gateway <strong>IS NOT approved</strong> for use
              with data classified as <strong>P3</strong> or <strong>P4</strong>{" "}
              under the UC data protection levels.
            </Callout>

            <p>
              The service routes requests through Google&apos;s Gemini
              Enterprise Agent Platform: Google will not use campus data to
              train or fine-tune AI models. For full compliance details, see{" "}
              <a
                href="https://it.ucsb.edu/security/compliance/uc-protection-levels"
                target="_blank"
                rel="noopener noreferrer"
              >
                UC Protection Levels
              </a>{" "}
              and Google&apos;s zero data retention agreements.
            </p>
          </section>

          <section id="responsible-use" className="mt-10">
            <h2>Responsible Use</h2>
            <p>
              You are responsible for how you use this service and anything it
              generates. Verify outputs before relying on them in research. Do
              not use AI services as a substitute for medical, legal, or
              financial advice.
            </p>
            <p className="italic text-gray-700">
              &quot;If an action wasn&apos;t permissible before AI, it
              isn&apos;t permissible with AI.&quot; — UC AI Council
            </p>

            <h3 className="mt-6">Campus Policies</h3>
            <ul>
              <li>
                <a
                  href="https://ai.universityofcalifornia.edu/governance-transparency/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UC Responsible AI Principles ↗
                </a>
              </li>
              <li>
                <a
                  href="https://cio.ucsb.edu/artificial-intelligence/ai-use-guidelines"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCSB Guidelines for AI Use ↗
                </a>
              </li>
            </ul>
          </section>

          <nav className="doc-pagination" aria-label="Guide pagination">
            <a href="#guides-page">
              <span>Previous</span>
              <strong>All Guides</strong>
            </a>
            <a href="#faq-page" className="doc-pagination__next">
              <span>Next</span>
              <strong>Frequently Asked Questions</strong>
            </a>
          </nav>
        </article>

        <aside className="on-this-page">
          <p>On this page</p>
          {toc.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </aside>
      </div>
    </main>
  )
}
