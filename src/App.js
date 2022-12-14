
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Appbar from './components/layout/Appbar'
import Footer from './components/layout/Footer'
import DetailView from './pages/DetailView'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App