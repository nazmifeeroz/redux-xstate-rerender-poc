import React from "react"
import { connect } from "react-redux"

const ComponentOne = ({ count }) => {
  console.log("renderr component one")
  return <div>Component one component. Count: {count}</div>
}

const mapStateToProps = (state) => {
  return { count: state.current.context.count }
}

export default connect(mapStateToProps)(ComponentOne)
