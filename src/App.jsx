import { useState } from 'react'

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from './component/LandingPage';

function App() {

  return (
    
    <BrowserRouter>
    <div className="text-[#fff] bg-[#000] h-auto">

<Routes>

<Route path="/" element={<LandingPage />} />

</Routes>

    </div>
    
    </BrowserRouter>
    
    
  )
}

export default App
