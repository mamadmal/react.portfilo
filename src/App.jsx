import './App.css'
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"

import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'


function App() {


  return (
   
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </Router> 
   
  )
}

export default App
