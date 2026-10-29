export default function DreamMark({ showDots = true }: { showDots?: boolean }) {
  return (
    <div className="brand" aria-label="DREAM Lab Cloud Services">
      <span className="brand__word">DREAM</span>
      {showDots && (
        <span className="brand__dots" aria-hidden="true">
          <i className="dot dot--coral" />
          <i className="dot dot--gold" />
          <i className="dot dot--green" />
        </span>
      )}
      <span className="brand__descriptor">Lab Cloud Services</span>
    </div>
  )
}
