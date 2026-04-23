import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WealthForm from './pages/WealthForm'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wealth-form' element={<WealthForm/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App