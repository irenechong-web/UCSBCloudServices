import HexagonMotif from "../../components/HexagonMotif"
import DocScreenshot from "../../components/DocScreenshot"
import CodeBlock from "../../components/CodeBlock"
import Callout from "../../components/Callout"

export default function FileTransferGuide() {
  const guideLinks = [
    { id: "#guide", label: "Getting Started" },
    { id: "#guide-file-transfer", label: "Transferring Files", current: true },
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
            <span aria-current="page">Transferring Files</span>
          </nav>
          <div className="doc-hero__heading">
            <div>
              <p className="eyebrow">Guide</p>
              <h1>Transferring files to/from your Workspace</h1>
              <p>
                Learn how to move files, scripts, and datasets into and out of
                your Coder environment using the Web File Browser, Magic
                Wormhole, or Google Drive via Rclone.
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
              for assistance with large data transfers.
            </p>
          </div>
        </aside>

        <article className="doc-content" id="overview">
          <div className="doc-intro">
            <p className="doc-kicker">Methods Overview</p>
            <h2>Three Ways to Transfer Files</h2>
            <p>
              There are several ways to upload and download files to a Coder
              Workspace:
            </p>
            <ul>
              <li>
                <strong>Coder&apos;s built-in File Browser:</strong> The most
                straightforward visual option.
              </li>
              <li>
                <strong>Magic Wormhole:</strong> Fast and convenient for moving
                files or project folders between machines or workspaces.
              </li>
              <li>
                <strong>Rclone:</strong> Connects your workspace directly to
                your UCSB Google Drive.
              </li>
            </ul>
          </div>

          <section className="doc-step" id="file-browser">
            <div className="doc-step__number">1</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Visual File Management</p>
              <h2>Coder File Browser</h2>
              <p>
                The most convenient way to transfer files to/from a Coder
                Workspace is to use the built-in File Browser, accessible
                directly from the workspace dashboard.
              </p>

              <DocScreenshot
                src="/images/workspace.png"
                alt="Coder Workspace Dashboard"
                label="Clicking the File Browser button opens a web management interface in a new window."
              />

              <p className="mt-4">
                Clicking the <strong>File Browser</strong> button from the
                workspace dashboard opens the File Browser in a new tab or
                window. (Ensure popups are enabled in your browser settings).
              </p>

              <DocScreenshot
                src="/images/file-browser.png"
                alt="File Browser UI"
                label="File Browser interface for uploading, downloading, and editing files."
              />
            </div>
          </section>

          <section className="doc-step" id="magic-wormhole">
            <div className="doc-step__number">2</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Direct Machine-to-Machine</p>
              <h2>Magic Wormhole</h2>
              <p>
                <a
                  href="https://magic-wormhole.readthedocs.io/en/latest/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Magic Wormhole
                </a>{" "}
                is a command-line utility that makes it easy to send files and
                directories directly between two machines using a short,
                one-time code. No accounts, cloud servers, or SSH keys required
                — just run a command on each machine and the transfer happens
                over an end-to-end encrypted channel.
              </p>

              <p>
                You can use Magic Wormhole without installation by running it
                with <code>uvx</code>, which executes Python tools in temporary
                environments. <code>uvx</code> is installed on all Coder
                Workspaces by default.
              </p>

              <h3>Sending a file or directory:</h3>
              <CodeBlock
                code={`uvx magic-wormhole send ./myfile.txt\n# or for a directory:\nuvx magic-wormhole send ./my-project`}
              />

              <p>
                Magic Wormhole will print a short one-time code such as{" "}
                <code>7-guitarist-revenge</code>. Use that code on the receiving
                machine:
              </p>

              <h3>Receiving a file or directory:</h3>
              <CodeBlock code="uvx magic-wormhole receive 7-guitarist-revenge" />

              <Callout type="tip" title="Single-Use Codes">
                The code is single-use and expires as soon as the transfer
                completes or is cancelled. This is a quick and secure way to
                migrate projects between Coder workspaces!
              </Callout>
            </div>
          </section>

          <section className="doc-step" id="rclone-gdrive">
            <div className="doc-step__number">3</div>
            <div className="doc-step__body">
              <p className="doc-kicker">Cloud Storage Mount</p>
              <h2>Rclone: Connecting to Google Drive</h2>
              <p>
                <a
                  href="https://rclone.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rclone
                </a>{" "}
                is a powerful file transfer tool that can mount your Google
                Drive to a local directory (such as <code>~/gdrive</code>) in
                your workspace.
              </p>

              <Callout type="note" title="Desktop VS Code Required for Auth">
                Initial authorization requires connecting to your workspace
                using the <strong>VS Code Desktop application</strong> so that
                browser authorization tokens can be forwarded to Rclone. Once
                configured, VS Code Desktop is no longer needed.
              </Callout>

              <ol>
                <li>
                  Connect to your workspace using desktop VS Code (click the VS
                  Code Desktop icon on the dashboard).
                </li>
                <li>
                  In VS Code, open a Terminal (<code>View → Terminal</code> or{" "}
                  <code>Ctrl+`</code>).
                </li>
                <li>
                  Verify Rclone is installed, or install it:
                  <div className="my-2">
                    <CodeBlock code="sudo apt update && sudo apt install rclone" />
                  </div>
                </li>
                <li>
                  Authorize read-only access to your Google Drive:
                  <div className="my-2">
                    <CodeBlock code="rclone config create gdrive drive scopes drive.readonly" />
                  </div>
                  <small className="text-gray-600 block mt-1">
                    (For full read-write permissions, omit{" "}
                    <code>scopes drive.readonly</code>).
                  </small>
                </li>
                <li>
                  A web browser tab will open. Grant Rclone permission to access
                  your Google Drive. Once finished, return to the VS Code
                  terminal.
                </li>
                <li>
                  Create a mount point folder:
                  <div className="my-2">
                    <CodeBlock code="mkdir ~/gdrive" />
                  </div>
                </li>
                <li>
                  Mount Google Drive in the background:
                  <div className="my-2">
                    <CodeBlock code="rclone mount gdrive: ~/gdrive --daemon" />
                  </div>
                </li>
                <li>
                  Confirm that you can view files in your Drive:
                  <div className="my-2">
                    <CodeBlock code="ls ~/gdrive" />
                  </div>
                </li>
              </ol>

              <p className="mt-4">
                To disconnect your Google Drive folder when done, run:
              </p>
              <CodeBlock code="umount ~/gdrive" />
              <p className="text-sm text-gray-600">
                If <code>umount</code> reports a busy device, ensure no files
                are open and your terminal is not currently inside the{" "}
                <code>~/gdrive</code> directory.
              </p>
            </div>
          </section>

          <nav className="doc-pagination" aria-label="Guide pagination">
            <a href="#guide">
              <span>Previous</span>
              <strong>Getting Started</strong>
            </a>
            <a href="#guide-rstudio" className="doc-pagination__next">
              <span>Next</span>
              <strong>RStudio Server</strong>
            </a>
          </nav>
        </article>

        <aside className="on-this-page">
          <p>On this page</p>
          <a href="#overview">Overview</a>
          <a href="#file-browser">Coder File Browser</a>
          <a href="#magic-wormhole">Magic Wormhole</a>
          <a href="#rclone-gdrive">Rclone & Google Drive</a>
        </aside>
      </div>
    </main>
  )
}
