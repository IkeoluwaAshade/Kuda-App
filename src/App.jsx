import React from 'react'
import Home from './Pages/LandingPage/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Business from './Pages/Business/Business'
import Company from './Pages/Company/Company'
import Help from './Pages/HelpNav/Help'
import Personal from './Pages/Personal/Personal'
import Header from './Components/Static/Header/Header'


const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home /> } />

          <Route path='/Business' element={<Business /> } />

          <Route path='/Company' element={<Company /> } />

          <Route path='/Help' element={<Help /> } />

          <Route path='/Personal' element={<Personal /> } />

        </Routes>
      
      
    </BrowserRouter>
  )
}

export default App