import React, { useEffect, useState } from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
// import Scroll from './scroll.js';

const Navbar = () => {
  const [scrolled,setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  // window.addEventListener("scroll", function () {
  //   var header = this.document.querySelector("header");
  //   header.classList.toggle("sticky", this.window.scrollY > 0);
  // })

  useEffect(() => {

    const handleScroll = () => {
      let scrollVal = window.scrollY;
      // console.log(scrollVal);
      if(scrollVal > 150) {
        // console.log("yes");
        setScrolled(true)
      }else{
        setScrolled(false)
      }
      
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };

  },[])

  const navbarStyle = {
    padding: scrolled ? '0 10px' : '0 9%',  // Adjust these values as needed
    background: scrolled ? 'rgba(0, 0, 0, 0.4)': 'transparent',
    transition: 'all 0.3s ease',  // Optional: adds a smooth transition effect
  };

  const headerStyle = {
    top : scrolled ? '0px' : '30px',
    transition: 'all 0.3s ease',
  }

  return (

    <div className='headerContainer' style={headerStyle}>
      {/* <!-- header  --> */}

      <header className="header" style={navbarStyle}>
        <a href="https://www.nitp.ac.in/" className="logo1"><img src="  img/download-removebg-preview.png " alt="NITP_logo" /></a>
        <nav className="navbar">
          <a className='link' href="http://localhost:3000/">Home</a>
          <div className='link'>
            <a href="#about">About</a>
            <div className="tabInner">
              <a href="#">Vision</a>
              <a href="#">How ?</a>
            </div>
          </div>
          <div className='link'>
            <a href="#incubations">Incubations</a>
            <div className="tabInner">
              <a href="#">Directors</a>
              <a href="#">Talk to us</a>
            </div>
          </div>
          <a href="#events" className='link'>Events</a>
          <a href="#gallery" className='link'>Gallery</a>
          <a href="#footer" className='link'>Contact</a>
          <Link className='link' to="/team">Team</Link>

        </nav>

        <img onClick={() => setIsOpen(!isOpen)} className="menu" src='/menu.png' />
        {
          isOpen && (
            <div className='mobileMenuContainer'>
              <div className="mobileMenu">
                <a className='link' href="http://localhost:3000/">Home</a>
                <a href="#about">About</a>
                <a href="#incubations">Incubations</a>
                <a href="#events" className='link'>Events</a>
                <a href="#gallery" className='link'>Gallery</a>
                <a href="#footer" className='link'>Contact</a>
              </div>
              <div onClick={() => setIsOpen(false)} className="crossBtn">
                X
              </div>
            </div>
          )
        }
        <a className="logo2" href="#home"><img src="img/IC LOGO (1).png" alt="Incubation Centre logo" />
        </a>
      </header>

      {/* <!-- header --> */}
    </div>
  )
}

export default Navbar;
