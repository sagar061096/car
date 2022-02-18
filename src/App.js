import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Loginpage from './Pages/Login/Loginpage';




function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      <Routes>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
  
      <Routes>
        <Route path="/Login" element={<Loginpage/>}/>
      </Routes>

    <Footer/>

    </Router>
  
    </>
  )
}

export default App;

