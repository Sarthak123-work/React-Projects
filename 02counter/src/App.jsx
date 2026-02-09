import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter , setCounter]=useState(15)
  
  

  // let counter=0;

  const addValue= () => {
    console.log("clicked",counter)
    if(counter>=20) setCounter(counter);
    else setCounter(counter+1);
  }
  const removeValue = () => {
    console.log("clicked",counter)
    if(counter>0) setCounter(counter-1);
    else  setCounter(counter);
    
  }


  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add value  </button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
