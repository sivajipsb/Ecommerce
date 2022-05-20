import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Example} from "./components/example"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Example/>
    </div>
  )
}

export default App
