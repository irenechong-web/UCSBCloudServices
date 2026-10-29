export default function DocScreenshot({
  src,
  alt,
  label,
  browserUrl = "coder.dreamlab.ucsb.edu",
}: {
  src?: string
  alt: string
  label?: string
  browserUrl?: string
}) {
  return (
    <figure className="screenshot">
      <div className="screenshot__canvas">
        <div className="screenshot__browser">
          <i />
          <i />
          <i />
          <span>{browserUrl}</span>
        </div>
        {src ? (
          <img src={src} alt={alt} className="screenshot__img" />
        ) : (
          <div className="doc-screenshot-placeholder__body">
            <strong>{alt}</strong>
          </div>
        )}
      </div>
      {label && <figcaption>{label}</figcaption>}
    </figure>
  )
}
