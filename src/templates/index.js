import React from "react"
import Header from "../components/Header"
import Bottle from "../components/Bottle"

function CustomersBlock({ customers }) {
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

function IndexPage({ pageContext: { allContent } }) {
  return (
    <>
      <Header />
      <Bottle />
      <CustomersBlock customers={allContent.customer} />
    </>
  )
}

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

export default IndexPage
