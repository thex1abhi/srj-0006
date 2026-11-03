import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvider } from "../configs/firebase";
import axios from "axios"
import { ServerUrl } from "../App";

function Navbar() {


  const handleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider)
      let User = response.user
      let name = User.displayName
      let email = User.email
      const result = await axios.post(ServerUrl + "/api/auth/login", {
        name, email
      }, { withCredentials: true })
      console.log(result?.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button
        onClick={handleLogin}
        className="">
        Login
      </button>
    </>
  )
}

export default Navbar;
