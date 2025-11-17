import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './const/Nav'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dining from '../Pages/Dining'
import Delivery from '../Pages/Delivery'
import Nightlife from '../Pages/Nightlife'
import Footer from './const/Footer'
import Faq from './const/Faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>

        <Routes>
          <Route path='/' element={<Dining/>}/>
          <Route path='/delivery' element={<Delivery/>} />
          <Route path='/nightlife' element={<Nightlife/>} />
        </Routes>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App
