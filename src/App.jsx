import React, { useState } from 'react'
import Home from './components/Home'
import Details from './components/Details'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  const {search,pathname} = useLocation();
  return (
   <div className="w-screen h-screen flex">
    {(pathname != "/" || search.length > 0) && (
          <Link to="/" className="text-red-100 absolute left-[17%] top-[3%]">Home</Link>
    )}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
    
    

   </div>

  )
  
}

export default App