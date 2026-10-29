import React from "react"

export default function ArrowLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <a className="home-link" href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  )
}
