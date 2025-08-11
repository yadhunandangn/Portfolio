import React from 'react'
import './App.css'
import { Home } from './pages/home'
import { Navbar } from './navbar/navbar'
import { About } from './pages/about'
import { Education } from './pages/education'
import { Project } from './pages/projects'
import { Contact } from './pages/contact'


function App() {


  return (
    <>
     <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Project/>
      <Contact/>




    </>
  )
}

export default App
