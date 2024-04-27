import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from './component/LandingPage';
import { TokenLanchpad } from './component/TokenLanchpad';

function App() {

  return (
    
    <BrowserRouter>
    <div className="text-[#fff] bg-[#000] h-auto">

<Routes>

<Route path="/" element={<LandingPage />} />
<Route path="/Tokenlanchpad" element={<TokenLanchpad/>} />

</Routes>

    </div>
    
    </BrowserRouter>
    
    
  )
}

export default App
