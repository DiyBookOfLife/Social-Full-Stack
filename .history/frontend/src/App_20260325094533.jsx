import './App.css'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Feed from './pages/Feed'

import Navbar from './components/Navbar'

function App() {

  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>

    </>
  )
}

export default App
