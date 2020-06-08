import React from "react"
import styled from "styled-components"
import Context from "../services/context"

const IndexPage = () => {
  console.log("render in indexpage")

  return (
    <Container>
      <Header />
      <Body>
        <ComponentOne />
        <ComponentTwo />
      </Body>
      <Footer>
        <FooterComponent />
      </Footer>
    </Container>
  )
}

const Header = () => {
  const { send } = React.useContext(Context)
  console.log("render header component")
  return (
    <div>
      header component
      <button onClick={() => send("PRESSED")}>header click</button>
    </div>
  )
}

const ComponentOne = () => {
  console.log("renderr component one")
  return <div>Component one component</div>
}
const ComponentTwo = () => {
  console.log("renderr component two")
  return <div>Component two component</div>
}
const Footer = () => {
  console.log("renderr component fotter")
  return <div>footer component</div>
}
const FooterComponent = () => {
  console.log("footer component render")
  return <div>footer inside component</div>
}

const Body = styled.div``

const Container = styled.div``

export default IndexPage
