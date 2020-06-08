import React from "react"
import Context from "../services/context"
import { Machine } from "xstate"
import { useMachine } from "@xstate/react"

const usePartial = (service, selector = () => null) => {
  const [partialState, setPartialState] = React.useState(
    selector(service.state)
  )

  React.useEffect(() => {
    const { unsubsribe } = service.subscribe((state) => {
      console.log("state", state)
      console.log("state.changed", state.changed)
      if (state.changed) return

      setPartialState(selector(state.conteext))
    })

    return () => unsubsribe()
  }, [])

  return partialState
}

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

const App = ({ Component, pageProps }) => {
  const [current, send, service] = useMachine(someMachine)

  usePartial(service)

  return (
    <Context.Provider value={{ current, send }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default App
