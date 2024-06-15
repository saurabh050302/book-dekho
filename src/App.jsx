import { useEffect, useState } from "react"

// react-router
import { Routes, Route, Navigate } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"

// react-query
import { useQuery } from "@tanstack/react-query"

// firebase
import app from "./firebase.config"
import { getAuth, onAuthStateChanged } from "firebase/auth"


function App() {

  const auth = getAuth();

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => setAuthUser(user));
  }, [])

  return (
    <div className=" w-full min-h-screen bg-zinc-800 text-white">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/signin"} />} />
        <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <Signup />} />
        <Route path="/signin" element={authUser ? <Navigate to={"/"} /> : <Signin />} />
      </Routes>
    </div>
  )
}

export default App
