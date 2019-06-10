import React from "react"

export default function CustomersSection({ customers }) {
  return (
    <div>
      {customers
        // .filter(({ data }) => data.promoted)
        .sort((a, b) => a.data.order - b.data.order)
        .map(({ id, data }) => (
          <div key={id}>
            <pre>{JSON.stringify({ id, data })}</pre>
            <img style={{ background: "black" }} src={data.logo.url} />
          </div>
        ))}
    </div>
  )
}
