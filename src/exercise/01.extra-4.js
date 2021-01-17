// useReducer: simple Counter
// 💯 traditional dispatch object with a type and switch statement
// http://localhost:3000/isolated/exercise/01.extra-4.js

import * as React from 'react'

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {...state, count: state.count + action.step}
    }
    default: {
      // 💬 maybe throw an error
      return state
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
