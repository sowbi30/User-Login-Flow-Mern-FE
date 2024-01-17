import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Contact from './Contact';
const LandingPage = () => {
  return (
    <div className='container-fulid'>
      <TopBar />
      <Header />
      <Home />
    <Contact />
    <Footer/>
    </div>
  )
}

export default LandingPage