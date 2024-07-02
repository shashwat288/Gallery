import React from 'react'
import Login from "./Pages/Login";
import RegisterForm from "./Pages/RegisterForm";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Photos from './components/Gallery/Gallery';
import Photo from './components/Gallery/photo';

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Header/>
        <Routes>
          <Route path='/photo' element={<Photo/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact'element={<Contact />} />
          <Route path='/photos'element={<Photos/>} />
          <Route path='/register'element={<RegisterForm />} /> 
          <Route path='/' element={<React.Fragment><Header /><Hero/><About/><Contact/><Footer/> </React.Fragment>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App