import React from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup';
import Student from './Components/Student';
import Classes from './Components/Classes';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/class" element={<Classes/>} />
      </Routes>
    </BrowserRouter>
  
  
  </>
  )
}

export default App