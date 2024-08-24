import { useState } from 'react'
import './App.css'
import Navbar from './componants/Navbar'
import Manager from './componants/manager'
import Footer from './componants/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
  
  <Manager/>
  
  <Footer/>
   </>
  )
}

export default App
