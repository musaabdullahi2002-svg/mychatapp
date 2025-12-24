
import { useState } from "react";
import Welcome from "./component/Welcome";
import Login from "./component/Login";
import Signup from "./component/Signup";
import "./App.css";

import {Routes, Route} from 'react-router-dom'

function App() {
  const [page, setPage] = useState('welcome')

  return (
    <>
     {page === "welcome" && <Welcome setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}
    </>
  )
}

export default App
