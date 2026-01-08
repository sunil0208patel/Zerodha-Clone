import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function DashBoardPage() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default DashBoardPage