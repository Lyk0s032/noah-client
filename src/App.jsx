import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomeNoah from './components/landing/home/home'
import Nav from './components/landing/nav/navigation'
import Specific from './components/landing/services/specific/specific'
import Direct from './components/landing/services/direct/direct'
import Contact from './components/landing/contact/contact'
import Us from './components/landing/us/us'
import Blog from './components/landing/blog/blog'
import Burbuja from './components/landing/burbuja/burbuja'

function App() {

  return (
    <div className='noah-app'>
      <Router>
        <Nav />
        <Burbuja />
        <div className='container-noah'>
          <Routes>
            <Route path="/*" element={<HomeNoah />} />
            <Route path="/s/specific/*" element={<Specific />} />
            <Route path="/s/direct/*" element={<Direct />} />
            <Route path="/us/*" element={<Us />} />
            <Route path="/contact/*" element={<Contact />} />

            <Route path="/blog/*" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
