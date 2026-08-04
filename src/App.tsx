import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(100)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className="app">
      <div className="counter-container">
        <h1>Counter</h1>
        <div className="count-display">{count}</div>
        <button 
          className="pink-button" 
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default App