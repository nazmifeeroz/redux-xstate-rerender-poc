import React from "react"
import { connect } from "react-redux"

const Footer = ({ send }) => {
  console.log("renderr component fotter")
  return (
    <div>
      footer component <button onClick={() => send("RESET")}>Reset</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    send: state.send,
  }
}

export default connect(mapStateToProps)(Footer)
