import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {

  let[counter, setCounter] = useState(10)

  // let counter = 10;

  const addValue = () => {
    console.log("Clicked", counter);
    counter = counter + 1;
    setCounter(counter);
  }

  const removeValue = () => {
    console.log("Removed", counter);
    counter = counter - 1;
    setCounter(counter);
    if (counter < 0) {
      alert("Counter cannot be negative");
      counter = 0;
      setCounter(counter);
    }
  }
  
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick= {addValue}> Add Value {counter} </button>
      <br></br>
      <button onClick= {removeValue}> Remove Value {counter} </button>
      <footer>  
        <p> {counter} </p>
      </footer>
    </>
  )
}

export default App
