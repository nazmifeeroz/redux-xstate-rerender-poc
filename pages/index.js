import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Machine } from "xstate"
import { useMachine } from "@xstate/react"

const someMachine = Machine({
  id: "someMachine",
  initial: "idle",
  states: {
    idle: {
      on: {
        PRESSED: { actions: () => console.log("pressed!!") },
      },
    },
  },
})

const IndexPage = () => {
  const [current, send] = useMachine(someMachine)
  console.log("render in indexpage")

  return (
    <Container>
      <Header current={current} send={send}></Header>
      <Body current={current} send={send}>
        <ComponentOne current={current} send={send} />
        <ComponentTwo current={current} send={send} />
      </Body>
      <Footer current={current} send={send}>
        <FooterComponent current={current} send={send} />
      </Footer>
    </Container>
  )
}

const Header = ({ current, send }) => {
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
