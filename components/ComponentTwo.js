import React from "react"
import { connect } from "react-redux"

const ComponentTwo = ({ send }) => {
  console.log("renderr component two")
  return (
    <div>
      <button onClick={() => send({ type: "DECREASE" })}>Decrease</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { send: state.send }
}

export default connect(mapStateToProps)(ComponentTwo)
