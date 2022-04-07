import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './components/Authparts/Login'
import Register from './components/Authparts/Register'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Login/>} path="/"/>
          <Route element={<Register/>} path="/register"/>
        </Routes>
      </Router>
    </div>
  )
}

export default App