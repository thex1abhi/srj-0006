import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import Courses from './Components/Courses'
import AdmissionForm from './Components/AdmissionForm'
import axios from 'axios'
import About from './Components/About'


export const ServerUrl = import.meta.env.VITE_SERVER_URL;

function App() {



  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<AdmissionForm />} />
      </Routes>

    </>
  )
}

export default App 
