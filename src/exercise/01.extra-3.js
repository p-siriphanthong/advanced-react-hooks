// useReducer: simple Counter
// 💯 simulate setState with an object OR function
// http://localhost:3000/isolated/exercise/01.extra-3.js

import * as React from 'react'

function countReducer(state, newState) {
  return typeof newState === 'function' ? newState(state) : newState
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
