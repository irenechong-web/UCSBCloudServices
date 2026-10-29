import HexagonMotif from "../components/HexagonMotif"
import DocTable from "../components/DocTable"
import Callout from "../components/Callout"

export default function CoderWorkspacesPage() {
  const toc = [
    { id: "overview", label: "Overview" },
    { id: "hardware-software", label: "Hardware & Software" },
    { id: "default-software", label: "Default Software" },
    { id: "optional-software", label: "Optional Software" },
    { id: "lifecycle", label: "Workspace Lifecycle" },
    { id: "policies", label: "Policies" },
  ]

  return (
    <main id="main-content">
      <div className="doc-hero">
        <div className="site-grid">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="#home">Cloud Services</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Coder Workspaces</span>
          </nav>
          <div className="doc-hero__heading">
            <div>
              <p className="eyebrow">Cloud Environments</p>
              <h1>Coder Workspaces: Overview</h1>
              <p>
                On-demand virtual machines with commonly used data science tools
                pre-installed for research and teaching at UC Santa Barbara.
              </p>
            </div>
            <HexagonMotif />
          </div>
        </div>
      </div>

      <div className="site-grid docs-layout">
        <aside className="docs-sidebar">
          <nav aria-label="Coder Workspaces navigation">
            <p className="docs-sidebar__title">Contents</p>
            {toc.map((item, index) => (
              <a href={`#${item.id}`} key={item.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="sidebar-help">
            <strong>Getting Help</strong>
            <p>
              Email{" "}
              <a href="mailto:dreamlab@library.ucsb.edu">
                dreamlab@library.ucsb.edu
              </a>{" "}
              or join the{" "}
              <a
                href="https://join.slack.com/t/ucsbcarpentry/shared_invite/zt-3chxqtb2b-cVc3l~yj1ghUhZLNmOLfhQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                UCSB Carpentry Slack
              </a>
              .
            </p>
          </div>
        </aside>

        <article className="doc-content" id="overview">
          <div className="doc-intro">
            <p className="doc-kicker">About the Service</p>
            <h2>Overview</h2>
            <p>
              Coder Workspaces are on-demand virtual machines with commonly used
              data science tools pre-installed. Anyone with a UCSB NetID can
              create a workspace to use for the duration of the academic
              quarter. Workspaces are deleted at the end of each quarter.
            </p>
            <p>
              The service is managed by the{" "}
              <a
                href="https://www.library.ucsb.edu/dreamlab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Library DREAM Lab
              </a>{" "}
              and uses computing resources provided by the{" "}
              <a
                href="https://www.lsit.ucsb.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                College of Letters and Science IT (LSIT)
              </a>
              .
            </p>
            <p className="mt-4">
              See our{" "}
              <a href="#guide" className="font-bold underline">
                Getting Started Guide
              </a>{" "}
              for a step-by-step introduction to creating and connecting to your
              first workspace.
            </p>
          </div>

          <section id="hardware-software" className="mt-10">
            <h2>Hardware and Software</h2>
            <p>
              Each workspace is an isolated virtual machine running Ubuntu Linux
              with dedicated resources:
            </p>

            <DocTable
              headers={["Resources", "Description"]}
              rows={[
                ["CPU", "4 vCPUs"],
                ["Memory", "16 GiB"],
                ["User Data Disk", "64 GB"],
                ["OS Disk", "15 GB"],
              ]}
            />
          </section>

          <section id="default-software" className="mt-10">
            <h3>Default Software</h3>
            <p>All workspaces include the following software pre-installed:</p>

            <DocTable
              headers={["Name", "Version", "Description"]}
              rows={[
                [
                  <a
                    href="https://ubuntu.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    key="ubuntu"
                  >
                    Ubuntu Linux
                  </a>,
                  "26.04 LTS",
                  "Operating System",
                ],
                [
                  <a
                    href="https://docs.docker.com/get-started/"
                    target="_blank"
                    rel="noopener noreferrer"
                    key="docker"
                  >
                    Docker
                  </a>,
                  "29.8.0",
                  "Container Runtime",
                ],
                [
                  <a
                    href="https://pixi.sh/latest/"
                    target="_blank"
                    rel="noopener noreferrer"
                    key="pixi"
                  >
                    Pixi
                  </a>,
                  "v0.80.0",
                  "Python package manager",
                ],
                [
                  <a
                    href="https://www.r-project.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    key="r"
                  >
                    R
                  </a>,
                  "v4.6.1",
                  "R programming language",
                ],
                ["Git", "v2.53.0", "Version control software"],
                ["gh", "v2.46.0", "GitHub CLI"],
                ["jq", "v1.8.1", "Command line JSON processor"],
                ["uv / uvx", "0.12.13", "Python package installer/runner"],
              ]}
            />

            <p>
              Additional software may be installed using{" "}
              <a
                href="https://documentation.ubuntu.com/server/how-to/software/package-management/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>apt</code>
              </a>{" "}
              or{" "}
              <a
                href="https://pixi.sh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>pixi</code>
              </a>
              .
            </p>
          </section>

          <section id="optional-software" className="mt-10">
            <h3>Optional Software</h3>
            <p>
              Services can be enabled when the workspace is created on the New
              Workspace form:
            </p>

            <DocTable
              headers={["Service", "Version", "Description"]}
              rows={[
                ["RStudio Server", "v2026.08.2", "Run RStudio in the browser"],
                [
                  <a
                    href="https://github.com/coder/code-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    key="vsc-web"
                  >
                    VS Code Web
                  </a>,
                  "—",
                  "Run VS Code in the browser",
                ],
                [
                  <a
                    href="https://code.visualstudio.com/docs/remote/vscode-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    key="vsc-desk"
                  >
                    VS Code Desktop (Server)
                  </a>,
                  "—",
                  "Connect to the workspace using local VS Code",
                ],
              ]}
            />
          </section>

          <section id="lifecycle" className="mt-10">
            <h2>Workspace Lifecycle</h2>
            <ul>
              <li>
                Workspaces shut down (stop) after <strong>four hours</strong> of
                inactivity.
              </li>
              <li>
                You can manually <strong>stop</strong> a workspace by clicking
                the &quot;Stop&quot; button in Coder.
              </li>
              <li>
                To <strong>start</strong> a stopped workspace, click the
                workspace&apos;s &quot;Start&quot; button. It may take a couple
                of minutes to resume.
              </li>
              <li>Deleting a workspace deletes all files on the workspace!</li>
              <li>
                All workspaces will be deleted at the end of each academic
                quarter.
              </li>
            </ul>
          </section>

          <section id="policies" className="mt-10">
            <h2>Policies</h2>

            <Callout type="warning" title="Backup Your Data">
              Data is not backed up; users are responsible for their own
              backups. Please use GitHub, Google Drive (via Rclone), or download
              important files regularly.
            </Callout>

            <ul>
              <li>
                <strong>Backup your data:</strong> Data is not backed up; users
                are responsible for their own backups.
              </li>
              <li>
                <strong>Deletion:</strong> All workspaces are automatically
                deleted at the end of each quarter.
              </li>
              <li>
                <strong>Limits:</strong> Users may create and use only one
                workspace at a time. Multiple active workspaces may be deleted
                without notice.
              </li>
              <li>
                <strong>Maintenance:</strong> Workspaces may be inaccessible
                during scheduled maintenance windows (announced via email).
              </li>
              <li>
                <strong>Inactivity:</strong> Workspaces stop automatically after
                four hours of inactivity to conserve resources. They can be
                resumed by clicking the &quot;Start&quot; button.
              </li>
              <li>
                <strong>Software Installation:</strong> Users may install
                additional software using standard package managers.
              </li>
              <li>
                <strong>Access by Staff:</strong> Workspaces may be accessed by
                staff in the Library or LSIT. Confidential or sensitive
                information should not be stored.
              </li>
            </ul>
          </section>

          <nav className="doc-pagination" aria-label="Guide pagination">
            <a href="#home">
              <span>Previous</span>
              <strong>Home</strong>
            </a>
            <a href="#guide" className="doc-pagination__next">
              <span>Next</span>
              <strong>Getting Started Guide</strong>
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
