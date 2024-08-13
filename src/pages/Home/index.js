import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./style.css";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

// import { Button } from 'primereact/button';

const Home = () => {
  // const text = useTypewriter({
  //   words: ["Mentorship", "Incubate", "Support"],
  //   loop: {},
  //   typeSpeed: 120,
  //   deleteSpeed: 50,
  const [data, setData] = useState([]);

  useEffect(() => {
    // Retrieve the JSON string from localStorage
    const storedData = localStorage.getItem("data");

    // Parse the JSON string to convert it back into an array
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []); 


  AOS.init({
    duration: 1000
  });

// hljs.initHighlightingOnLoad();

//   $('.hero__scroll').on('click', function(e) {
//     $('html, body').animate({
//       scrollTop: $(window).height()
//     }, 1200);
//   });

  // });
  return (
    <div>
      <section class="home" id="home">
        <div className="grid-1"> 
        <div class="home-content" data-aos="fade-right">
          {/* <Button label="Submit" /> */}

          <h3>Welcome to,</h3>
          <h1> <span>I</span>ncubation <span>C</span>enter</h1>
         <div className="h3-2" >
        <h3>of NIT Patna.</h3>
        </div>
          <div className="typewriter">
          <p>  <Typewriter
            options={{
              strings: ["we Incubate.", "we Mentor. ", "we Support. "],
              autoStart: true,
              loop: true
            }}
          /></p>
          </div>
          
          {/* <h3>we <span class="multiple-text">{text} <Cursor cursorStyle = "|" /></span></h3> */}
          <p>
          Empowering startups and entrepreneurs with mentorship, workspace, and funding to foster innovation and accelerate growth. Join us to turn your ideas into successful ventures.
          </p>
          {/* <!-- <div class="social-media">
              <a href=""><i class='bx bxl-facebook'></i></a>
              <a href=""><i class='bx bxl-instagram-alt'></i></a>
              <a href=""><i class='bx bxl-linkedin'></i></a>
              <a href=""><i class='bx bxs-message-rounded-dots'></i></a>
          </div> --> */}
          <a href="#" class="btn">
            Incubate
          </a>
        </div>
        </div>

        <div className="grid-2">  
          <div class="notice" data-aos="fade-up" data-aos-duration="1500">
            <div>
              <h1>NOTICE</h1>
              <hr></hr>
            </div>
            <div>
              <ul class="notice-content">
              {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))} 
              </ul>
            </div> 
        </div>
        </div>
       
       
      </section>
    </div>
  );
};

export default Home;
