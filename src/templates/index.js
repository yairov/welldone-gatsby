import React from "react"
import Header from "../components/Header"
import CustomersSections from "../components/CustomersSection"
import HeroSection from "../components/HeroSection"

function IndexPage({ pageContext: { allContent } }) {
  return (
    <>
      <Header />
      <HeroSection />
      <CustomersSections customers={allContent.customer} />
    </>
  )
}

export default IndexPage
