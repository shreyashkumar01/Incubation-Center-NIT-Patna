import React from 'react'
import './card.css'
import Footer from '../../footer' 
import Navbar from '../../Navbar';

function Pag() {
  return (
    <div className='cards_pag'>
      <Navbar/>
      <div class="container_header">
      <div>
      <h1>Incubations</h1>
      </div>
      </div> 
  <div className="main">
    <div className="row">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Onibus</p>
            <p id="found">Founder</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Busy Mechanic</p>
             <p id="found">Founder</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Shekhar Telesystems</p>
             <p id="found">Founder</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Astomverse Innovations</p>
             <p id="found">Naveen Prabhat</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Schooglink</p>
             <p id="found">Himanshu Agrawal</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      {/* <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Startup Name</p>
             <p id="found">Founder</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div> */}
    </div>
    {/* <div className="row">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Startup Name</p>
             <p id="found">Founder</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Startup Name</p>
             <p id="found">Founder</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Startup Name</p>
             <p id="found">Founder</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
    </div> */}
  </div>

  <Footer/>
</div>

  )
}

export default Pag