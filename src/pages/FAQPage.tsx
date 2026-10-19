import { useState } from "react"

const faqTopics = [
  {
    topic: "Accounts & Access",
    accent: "coral",
    questions: [
      {
        question: "Who can use DREAM Lab Cloud Services?",
        answer:
          "Anyone with an active UCSB NetID (students, faculty, and staff) can create and use a Coder workspace for coursework, research, and data science projects.",
      },
      {
        question: "How do I sign in to Coder?",
        answer:
          "Visit coder.dreamlab.ucsb.edu, click 'UCSB Login', and authenticate using your UCSB Single Sign-On credentials via Google.",
      },
      {
        question: "How long does a workspace last?",
        answer:
          "Workspaces are provided for the duration of the academic quarter. At the end of each quarter, all workspaces are automatically deleted. Be sure to export your code and files before the end of the quarter.",
      },
    ],
  },
  {
    topic: "Workspaces & Hardware",
    accent: "gold",
    questions: [
      {
        question: "What hardware resources does each workspace receive?",
        answer:
          "Each workspace runs as an isolated virtual machine configured with 4 vCPUs, 16 GiB of RAM, a 64 GB persistent User Data Disk, and a 15 GB OS Disk.",
      },
      {
        question: "Why did my workspace stop running?",
        answer:
          "Workspaces automatically shut down after four hours of inactivity to conserve shared campus compute resources. You can resume at any time by clicking the 'Start' button on the dashboard.",
      },
      {
        question: "How many workspaces can I have at once?",
        answer:
          "Users may create and use only one active workspace at a time. Multiple active workspaces per user may be deleted without prior notice.",
      },
    ],
  },
  {
    topic: "Software & Environments",
    accent: "green",
    questions: [
      {
        question: "What software is preinstalled in Coder?",
        answer:
          "All workspaces come with Ubuntu 26.04 LTS, Docker 29.8, Pixi package manager, R 4.6.1, Git, GitHub CLI (gh), jq, and uv/uvx. You can also enable RStudio Server, JupyterLab, and VS Code during creation.",
      },
      {
        question: "Can I install additional packages and tools?",
        answer:
          "Yes. You have full sudo access to install system packages with 'sudo apt install <package>', Python environments with 'uv' or 'pixi', and R packages with 'install.packages()'. Packages in your home directory persist between stops and starts.",
      },
      {
        question: "Can I use desktop VS Code instead of the browser?",
        answer:
          "Yes! Enable 'Visual Studio Code (Desktop)' when creating your workspace. Install the Coder extension in local VS Code, log in to coder.dreamlab.ucsb.edu, and connect directly.",
      },
    ],
  },
  {
    topic: "Data, Files & Backups",
    accent: "aqua",
    questions: [
      {
        question: "Are my files backed up automatically?",
        answer:
          "No! Coder workspaces are not backed up. Users are responsible for backing up their own work. We recommend pushing your code to GitHub, mounting Google Drive with Rclone, or downloading copies regularly.",
      },
      {
        question: "How do I upload and download files?",
        answer:
          "You can use the built-in web File Browser on your workspace dashboard, use Magic Wormhole (run 'uvx magic-wormhole send <file>'), or mount your Google Drive via Rclone.",
      },
      {
        question: "Will my files remain after I stop my workspace?",
        answer:
          "Yes. Stopping a workspace releases active compute resources but preserves all files in your home directory (~). However, permanently deleting a workspace destroys all files.",
      },
    ],
  },
  {
    topic: "AI Gateway & Agents",
    accent: "coral",
    questions: [
      {
        question: "What is the DREAM Lab AI Gateway?",
        answer:
          "An experimental service providing OpenAI-compatible API access to Google Gemini models (including gemini-4-argon and gemini-3.8-flash) hosted by campus cloud providers for coding assistants and research.",
      },
      {
        question: "Can I send sensitive research data to the AI Gateway?",
        answer:
          "No. The DREAM Lab AI Gateway is NOT approved for data classified as P3 or P4 under UC protection levels. Never send restricted or personally identifiable data.",
      },
      {
        question: "How do I use OpenCode with campus models?",
        answer:
          "OpenCode is preinstalled on your workspace. Run 'opencode', and use '/models' to select campus-hosted models through College IT (CIT) or the DREAM Lab AI Gateway.",
      },
    ],
  },
  {
    topic: "Support & Troubleshooting",
    accent: "gold",
    questions: [
      {
        question: "My workspace won't start or is stuck. What should I do?",
        answer:
          "Wait 2–3 minutes and refresh your browser. If it is still stuck, stop the workspace and click Start again. If problems persist, email dreamlab@library.ucsb.edu.",
      },
      {
        question: "Where can I get one-on-one help?",
        answer:
          "Email dreamlab@library.ucsb.edu, drop by the Library DREAM Lab, or join the UCSB Carpentry Slack for community and staff support.",
      },
    ],
  },
]

export default function FAQPage() {
  const [query, setQuery] = useState("")
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    "Who can use DREAM Lab Cloud Services?",
  )

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
                Help Center
              </p>
              <h1>Frequently Asked Questions</h1>
              <p>
                Everything you need to know about Coder workspaces, hardware,
                policies, file transfers, and the AI Gateway.
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
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions, hardware, policies, or tools"
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
            results for <strong>&ldquo;{query}&rdquo;</strong>
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
                  <p>Category</p>
                  <h2>{topic.topic}</h2>
                </div>
              </div>
              <div className="faq-list">
                {topic.questions.map(({ question, answer }, index) => {
                  const isOpen = openQuestion === question
                  const panelId = `faq-${topic.topic}-${index}`
                    .toLowerCase()
                    .replaceAll(/[^a-z0-9]/g, "-")

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
            <p>Try searching for different terms, or contact the team.</p>
            <button type="button" onClick={() => setQuery("")}>
              Clear search
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
