import React from "react"

export default function Callout({
  type,
  title,
  children,
}: {
  type: "tip" | "warning" | "note" | "important"
  title: string
  children: React.ReactNode
}) {
  const icon =
    type === "tip"
      ? "i"
      : type === "warning" || type === "important"
        ? "!"
        : "ℹ"

  return (
    <aside className={`doc-callout doc-callout--${type}`}>
      <span className="doc-callout__icon" aria-hidden="true">
        {icon}
      </span>
      <div>
        <strong>{title}</strong>
        <div>{children}</div>
      </div>
    </aside>
  )
}
