import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About/About'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
   <Header/>
   <Outlet></Outlet>
   <Footer/>
    </div>
  )
}

export default App
