import React from "react"
import { connect } from "react-redux"

const Header = ({ send }) => {
  console.log("render header component")
  return (
    <div>
      header component
      <button onClick={() => send({ type: "INCREASE" })}>Increase</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { send: state.send }
}

export default connect(mapStateToProps)(Header)
