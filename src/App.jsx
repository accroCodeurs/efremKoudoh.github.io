import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { IndexFront } from './pages/front'
import LoginScreen from './pages/back/pages/login'
import IndexBack from './pages/back/pages'

function App() {
 
  return (
    <>
       <Routes>
          <Route path="*" name="Accueil" element={<IndexFront/>} />   
          <Route path="login" name="Login" element={<LoginScreen/>} />   
          <Route path="dashboard" name="Dashboard" element={<IndexBack/>} />   
      </Routes>
    </>
  )
}

export default App
