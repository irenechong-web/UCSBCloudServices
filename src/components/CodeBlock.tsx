import { useState } from "react"

export default function CodeBlock({
  code,
  language = "Terminal",
}: {
  code: string
  language?: string
}) {
  const [copied, setCopied] = useState(false)

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard fallback
    }
  }

  return (
    <div className="code-block">
      <div className="code-block__header">
        <span>{language}</span>
        <button
          className="code-block__copy"
          type="button"
          onClick={copyCode}
          aria-live="polite"
        >
          <span className="copy-icon" aria-hidden="true" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}
