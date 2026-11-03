import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import Courses from './Components/Courses'
import AdmissionForm from './Components/AdmissionForm'
import axios from 'axios'


export const ServerUrl = import.meta.env.VITE_SERVER_URL;

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchMe = async () => {
      try {
        const res = await axios.get(ServerUrl + "/api/user/current-user", { withCredentials: true })

        setUser(res.data)
        console.log(res.data);

      } catch (error) {
        console.log(error);
      }
    }
    fetchMe()
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admission" element={<AdmissionForm />} />
      </Routes>

    </>
  )
}

export default App 
