export default function ServiceIcon({
  type,
}: {
  type: "workspace" | "gateway"
}) {
  if (type === "workspace") {
    return (
      <svg viewBox="0 0 48 48" role="img" aria-label="Workspace window">
        <rect x="5" y="8" width="38" height="31" rx="2" />
        <path d="M5 16h38M12 12h1M17 12h1" />
        <path d="m16 25 5 4-5 4M25 33h8" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" role="img" aria-label="Connected AI gateway">
      <path d="M24 12v9M13 31l8-5M35 31l-8-5" />
      <path d="m24 5 6 3.5v7L24 19l-6-3.5v-7L24 5ZM13 25l6 3.5v7L13 39l-6-3.5v-7l6-3.5ZM35 25l6 3.5v7L35 39l-6-3.5v-7l6-3.5Z" />
    </svg>
  )
}
