import React from "react"
import Header from "../components/Header"
import ComponentOne from "../components/ComponentOne"
import ComponentTwo from "../components/ComponentTwo"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <div>
        <ComponentOne />
        <ComponentTwo />
      </div>
      <Footer>
        <FooterComponent />
      </Footer>
    </div>
  )
}

const FooterComponent = () => {
  console.log("footer component render")
  return <div>footer inside component</div>
}

export default IndexPage
