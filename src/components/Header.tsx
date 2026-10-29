type PageId = "home" | "coder-workspaces" | "guides" | "guide-getting-started" | "guide-file-transfer" | "guide-rstudio" | "guide-marimo" | "guide-ai-agents" | "guide-ai-commons" | "ai-gateway" | "faq"

export default function Header({ currentPage }: { currentPage: PageId }) {
  const isGuidesActive =
    currentPage === "guides" ||
    currentPage === "guide-getting-started" ||
    currentPage === "guide-file-transfer" ||
    currentPage === "guide-rstudio" ||
    currentPage === "guide-marimo" ||
    currentPage === "guide-ai-agents" ||
    currentPage === "guide-ai-commons"

  const navItems = [
    { label: "Home", href: "#home", active: currentPage === "home" },
    {
      label: "Coder Workspaces",
      href: "#coder-workspaces",
      active: currentPage === "coder-workspaces",
    },
    { label: "Guides", href: "#guides-page", active: isGuidesActive },
    {
      label: "AI Gateway",
      href: "#ai-gateway",
      active: currentPage === "ai-gateway",
    },
    { label: "FAQ", href: "#faq-page", active: currentPage === "faq" },
    {
      label: "About the DREAM Lab",
      href: "https://www.library.ucsb.edu/dreamlab",
      external: true,
    },
  ]

  return (
    <header className="site-header">
      <div className="campus-bar">
        <div className="site-grid campus-bar__inner">
          <a
            href="https://www.ucsb.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of California, Santa Barbara
          </a>
          <a
            className="launch-button"
            href="https://coder.dreamlab.ucsb.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch Coder ↗
          </a>
        </div>
      </div>
      <div className="site-grid lockup-row">
        <a href="#home" aria-label="Go to homepage">
          <span
            className="ucsb-library-logo"
            role="img"
            aria-label="UC Santa Barbara Library"
          />
        </a>
      </div>
      <nav className="primary-navigation" aria-label="Primary navigation">
        <div className="site-grid primary-navigation__inner">
          {navItems.map((item) => (
            <a
              key={item.label}
              className={`primary-navigation__link${
                item.active ? " is-current" : ""
              }`}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-current={item.active ? "page" : undefined}
            >
              {item.label}
              {item.external && (
                <span className="text-xs ml-1 opacity-70">↗</span>
              )}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
