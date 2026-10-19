import React from "react"

export default function DocTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: (React.ReactNode | string)[][]
}) {
  return (
    <div className="doc-table-wrapper">
      <table className="doc-table">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIndex) => (
            <tr key={rIndex}>
              {row.map((cell, cIndex) => (
                <td key={cIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
