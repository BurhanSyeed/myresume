import React from 'react'
import About from './About';
import Navbar from './Navbar';
import Service from './Service';
import Counter from './Counter';
import Contact from './Contact';
import Footer from './Footer';
// import image from '../img/p1.jpg';
// import Navbar from './components/Navbar';
import image from '../img/p4.jpg';
// import image from '../img/p2.jpg'
function Home() {
  const margin = {
    marginTop : '150px'
  };
  return (
    <>
    {/* <Navbar /> */}
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6' style={margin}>
              <p>THIS IS ME</p>
                <h1>SYED BURHAN</h1>
                    <p>I am Syed Burhan Ali . A Full Stack Developer</p>
                    <button className='btn btn-sm ' style={{color:'white', backgroundColor: 'rgba(128, 153, 194)'}}>Hire me</button>
            </div>
            <div className='col-lg-6 col-md-6'>
              <img src={image}  alt="logo" style={{width: '60%', height:'60%',  marginTop : '150px'}}/>
            </div>
        </div>
    </div>
      <About />
      <Service />
      <Counter />
      <Contact />
      {/* <Footer /> */}
      </>
    
  )
}

export default Home
