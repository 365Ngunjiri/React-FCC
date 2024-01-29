import { useState } from 'react'
import './App.css'

function App() {
const [count, setCount] = useState(0)
 const addValue = () => {
 setCount(count + 1)
}
const lessValue = () => {
  setCount(count - 1)
}


  return (
    <>
  <h1>Counter App</h1>
<h2>Counter Value: {count} </h2>
  <button onClick={addValue}>Add</button> {" "}
  <button onClick={lessValue}>Remove</button>
    </>
  )
}

export default App
