import { useState } from 'react'

import './App.css'
import Navigation from './component/Navigation'
import Center from './component/Center'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
         <Center></Center>
   </BrowserRouter>
      
          
    </div>
  )
}

export default App
