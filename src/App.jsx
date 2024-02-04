import React from 'react'
import Test from './test'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App