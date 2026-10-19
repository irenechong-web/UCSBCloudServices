export default function HexagonMotif({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`hexagon-motif${light ? " hexagon-motif--light" : ""}`}
      aria-hidden="true"
    >
      <i />
      <i />
      <i />
    </span>
  )
}
