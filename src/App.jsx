import { useState } from 'react'

import './App.css'
import Navigation from './component/Navigation'
import Center from './component/Center'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation></Navigation>
      <Center></Center>
          
    </div>
  )
}

export default App
