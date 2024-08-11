import React from 'react';
import "./style.css";
import {useNavigate } from "react-router-dom";
// import "./style.scss";

const Events = () => {
  
  const navigate = useNavigate();
  return (
    <div>
      <section className="events" id="events">
        <div className="event_header"> 
          <h1 data-aos="fade-down">Events</h1>
          <p data-aos="fade">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex accusamus sint natus voluptatem fuga aperiam
 
            perspiciatis modi vero quam atque quisquam laboriosam, optio id. Totam inventore corrupti quod obcaecati. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex accusamus sint natus voluptatem fuga aperiam
            perspiciatis modi vero quam atque quisquam laboriosam, optio id. Totam inventore corrupti quod obcaecati. </p>
        </div> 
        <div className="events_box"  >
          <div className="flip-card" data-aos="flip-left"> 
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="img/stock_grow.jpg" alt="event"/>
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
                <a href="events timeline/index.html" className="btn">View More</a>
              </div>
            </div>
          </div>
 
          <div className="flip-card"data-aos="flip-left">
 
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="img/stock_grow.jpg" alt="event"/>
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
                <a href="events timeline/index.html" className="btn">View More</a>
              </div>
            </div>
          </div>
 
 
          <div className="flip-card"data-aos="flip-left">
 
 <div className="flip-card-inner">
   <div className="flip-card-front">
     <img src="img/stock_grow.jpg" alt="event"/>
   </div>
   <div className="flip-card-back">
     <h1>John Doe</h1>
     <p>Architect & Engineer</p>
     <p>We love that guy</p>
     <a href="events timeline/index.html" className="btn">View More</a>
   </div>
 </div>
          </div>
        
        </div>
 
        <div className="events_btn" data-aos="fade-left">
 
          <a href="/timeline" className="btn">View More</a>
        </div>
      </section>
    </div>
  )
}

export default Events;
