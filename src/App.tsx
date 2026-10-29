import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import CoderWorkspacesPage from "./pages/CoderWorkspacesPage"
import GuidesPage from "./pages/GuidesPage"
import GettingStartedGuide from "./pages/guides/GettingStartedGuide"
import FileTransferGuide from "./pages/guides/FileTransferGuide"
import RStudioGuide from "./pages/guides/RStudioGuide"
import MarimoGuide from "./pages/guides/MarimoGuide"
import AIAgentsGuide from "./pages/guides/AIAgentsGuide"
import AICommonsGuide from "./pages/guides/AICommonsGuide"
import AIGatewayPage from "./pages/AIGatewayPage"
import FAQPage from "./pages/FAQPage"

export type PageId = "home" | "coder-workspaces" | "guides" | "guide-getting-started" | "guide-file-transfer" | "guide-rstudio" | "guide-marimo" | "guide-ai-agents" | "guide-ai-commons" | "ai-gateway" | "faq"

function getPageFromHash(hash: string): PageId {
  const cleanHash = hash.replace(/^#/, "").split("?")[0]

  switch (cleanHash) {
    case "coder-workspaces":
      return "coder-workspaces"
    case "guides-page":
    case "guides":
      return "guides"
    case "guide":
    case "guide-getting-started":
    case "getting-started":
      return "guide-getting-started"
    case "guide-file-transfer":
    case "file-transfer":
      return "guide-file-transfer"
    case "guide-rstudio":
    case "rstudio":
      return "guide-rstudio"
    case "guide-marimo":
    case "marimo":
      return "guide-marimo"
    case "guide-ai-agents":
    case "ai-agents":
      return "guide-ai-agents"
    case "guide-ai-commons":
    case "ai-commons":
      return "guide-ai-commons"
    case "ai-gateway":
      return "ai-gateway"
    case "faq-page":
    case "faq":
      return "faq"
    case "home":
    default:
      return "home"
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() =>
    getPageFromHash(window.location.hash),
  )

  useEffect(() => {
    function handleHashChange() {
      const newPage = getPageFromHash(window.location.hash)
      setCurrentPage(newPage)
      // If navigating to a major page route, scroll to top
      if (
        !window.location.hash.includes("overview") &&
        !window.location.hash.includes("step-")
      ) {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  function handleAppClick(event: React.MouseEvent<HTMLDivElement>) {
    const link = (event.target as HTMLElement).closest("a")
    if (!link) return

    const href = link.getAttribute("href")
    if (!href || !href.startsWith("#")) return

    const targetPage = getPageFromHash(href)
    if (targetPage !== currentPage) {
      setCurrentPage(targetPage)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  function renderPage() {
    switch (currentPage) {
      case "coder-workspaces":
        return <CoderWorkspacesPage />
      case "guides":
        return <GuidesPage />
      case "guide-getting-started":
        return <GettingStartedGuide />
      case "guide-file-transfer":
        return <FileTransferGuide />
      case "guide-rstudio":
        return <RStudioGuide />
      case "guide-marimo":
        return <MarimoGuide />
      case "guide-ai-agents":
        return <AIAgentsGuide />
      case "guide-ai-commons":
        return <AICommonsGuide />
      case "ai-gateway":
        return <AIGatewayPage />
      case "faq":
        return <FAQPage />
      case "home":
      default:
        return <HomePage />
    }
  }

  return (
    <div className="app-shell" onClick={handleAppClick}>
      <Header currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </div>
  )
}
