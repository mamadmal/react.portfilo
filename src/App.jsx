import './App.css'
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"

import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import PH from './pages/PH/PH'
import { useState } from 'react'
import TestApi  from './pages/TestApi.jsx/TestApi'
import { OnlineCheck } from './components/OnlineCheck'


function App() {

  const [showNav, setShowNav] = useState(true);


  return (
   
    <Router>
<OnlineCheck />
{   showNav &&
         <Nav /> 
   } 
      <OnlineCheck />

      <Routes>
        
       
        <Route path="/" element={<Home />}  />
        <Route path="/test" element={<TestApi />}  />
        <Route path="/ph" element={<PH funcNav={setShowNav} />}  />
        
        
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>

      
      {showNav &&
          <Footer />
    }
    </Router> 
   
  )
}

export default App
