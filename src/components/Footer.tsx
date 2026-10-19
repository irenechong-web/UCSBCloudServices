import DreamMark from "./DreamMark"
import HexagonMotif from "./HexagonMotif"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-grid site-footer__inner">
        <div className="site-footer__brand">
          <DreamMark showDots={false} />
          <p>Digital Research Excellence, Access, Methods, and learning</p>
          <HexagonMotif light />
        </div>
        <div className="site-footer__contact">
          <p className="footer-heading">Contact & Support</p>
          <address>
            UCSB Library
            <br />
            University of California
            <br />
            Santa Barbara, CA 93106-9010
          </address>
          <p className="mt-2">
            <a href="mailto:dreamlab@library.ucsb.edu">
              dreamlab@library.ucsb.edu
            </a>
          </p>
          <p className="mt-1">
            <a
              href="https://join.slack.com/t/ucsbcarpentry/shared_invite/zt-3chxqtb2b-cVc3l~yj1ghUhZLNmOLfhQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              UCSB Carpentry Slack ↗
            </a>
          </p>
        </div>
        <nav className="site-footer__links" aria-label="Footer navigation">
          <p className="footer-heading">Explore</p>
          <a
            href="https://www.library.ucsb.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UCSB Library ↗
          </a>
          <a
            href="https://www.library.ucsb.edu/dreamlab"
            target="_blank"
            rel="noopener noreferrer"
          >
            About the DREAM Lab ↗
          </a>
          <a
            href="https://www.lsit.ucsb.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Letters & Science IT (LSIT) ↗
          </a>
          <a href="#coder-workspaces">Coder Workspaces</a>
          <a href="#ai-gateway">AI Gateway</a>
          <a href="#guides-page">Guides & Tutorials</a>
          <a href="#faq-page">FAQ</a>
        </nav>
      </div>
      <div className="site-grid site-footer__legal">
        <p>© 2026 The Regents of the University of California</p>
      </div>
    </footer>
  )
}
