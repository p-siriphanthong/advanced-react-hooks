// useContext: simple Counter
// 💯 create a consumer hook
// http://localhost:3000/isolated/exercise/03.extra-1.js

import * as React from 'react'
// 💬 maybe import the context from another file: `import {CountProvider, useCount} from '../context/count-context'`

const CountContext = React.createContext()

// 💬 move to bottom of `CountProvider`
function useCount() {
  const context = React.useContext(CountContext)
  if (!context) throw new Error('useCount must be used within a CountProvider')
  return context
}

function CountProvider({children}) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function CountDisplay() {
  const [count, setCount] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [count, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
