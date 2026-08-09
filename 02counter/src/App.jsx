import { useState } from 'react'

import './App.css'

function App() {

  const[counter,setCounter]=useState(15)   //counter-variable,setCounter-method
  //let counter=15

  const addvalue=() => {
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
  }
const removevalue =() => {
  
  setCounter(counter-1)
}

  return (
    <>
      <h1>React course with sakthi{counter}</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addvalue}
      >Add value</button>{" "}
      <button
      onClick={removevalue}
      >Remove value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App





// http://localhost:5173/