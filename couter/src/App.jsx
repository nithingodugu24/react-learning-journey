import Button from "./Button.jsx"
import React, {useState} from "react"
import './app.css'

function App() {

  const [counter, setCounter ] = useState(0)
  return (
    <>
    <div className="main">
    <h1>Subscribers :  {counter}</h1>
    <Button num={[counter, setCounter]}/>
    </div>
    </>
  )
}

export default App
