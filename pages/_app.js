import React from "react"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { assign, Machine, interpret } from "xstate"

const countMachine = Machine({
  id: "countMachine",
  initial: "idle",
  context: { count: 0 },
  states: {
    idle: {
      on: {
        INCREASE: {
          actions: assign((ctx) => ({ count: ctx.count + 1 })),
        },
        DECREASE: {
          actions: assign((ctx) => ({ count: ctx.count - 1 })),
          cond: (ctx) => ctx.count > 0,
        },
        RESET: {
          actions: assign(() => ({ count: 0 })),
          cond: (ctx) => ctx.count > 0,
        },
      },
    },
  },
})

const countReducer = (state = null, action) => {
  switch (action.type) {
    case "INIT": {
      return {
        service: action.service,
        current: action.service.state,
        send: action.service.send,
      }
    }
    case "UPDATE_STATE": {
      return { ...state, current: action.state }
    }
    default:
      return state
  }
}

const store = createStore(countReducer, applyMiddleware(thunk))

const initMachine = () => {
  return (dispatch) => {
    const service = interpret(countMachine)
    service.start()
    dispatch({ type: "INIT", service })
    service.subscribe((nextState) =>
      dispatch({ type: "UPDATE_STATE", state: nextState })
    )
  }
}

store.dispatch(initMachine())

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
