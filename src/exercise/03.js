// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

// 🐨 create a CountProvider component here that does this:
function CountProvider({children}) {
  // 🐨 get the count state and setCount updater with React.useState
  const [count, setCount] = React.useState(0)

  // 🐨 create a `value` array with count and setCount
  const value = [count, setCount]

  // 🐨 return your context provider with the value assigned to that array and forward all the other props
  // 💰 more specifically, we need the children prop forwarded to the context provider
  // 💬 destructor props to CountContext.Provider: <CountContext.Provider value={value} {...props} />
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function CountDisplay() {
  const [count, setCount] = React.useContext(CountContext) // 💬 using [count]
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [count, setCount] = React.useContext(CountContext) // 💬 using [, setCount]
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
