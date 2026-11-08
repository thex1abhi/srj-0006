import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from "react-router-dom"
import Home from './Components/Home'
import Courses from './Components/Courses'
import AdmissionForm from './Components/AdmissionForm'
import About from './Components/About'
import ChatBot from './Components/ChatBot'


export const ServerUrl = import.meta.env.VITE_SERVER_URL;

// this function solves the tab not opening on the top error 
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<AdmissionForm />} />
      </Routes>
      <ChatBot />
    </>

  )
}

export default App 
