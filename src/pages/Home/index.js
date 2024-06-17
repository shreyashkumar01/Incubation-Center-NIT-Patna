import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./style.css";
import Typewriter from "typewriter-effect";

// import { Button } from 'primereact/button';

const Home = () => {
  // const text = useTypewriter({
  //   words: ["Mentorship", "Incubate", "Support"],
  //   loop: {},
  //   typeSpeed: 120,
  //   deleteSpeed: 50,
  // });
  return (
    <div>
      <section class="home" id="home">
        <div className="grid-1"> 
        <div class="home-content">
          {/* <Button label="Submit" /> */}

          <h3>Welcome to,</h3>
          <h1> <span>I</span>ncubation <span>C</span>enter</h1>
         <div className="h3-2">
        <h3  >of NIT Patna.</h3>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            obcaecati repudiandae quod reprehenderit ab quam error aspernatur
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
          <div class="notice">
            <div>
              <h1>NOTICE</h1>
              <hr></hr>
            </div>
            <div>
              <ul class="notice-content">
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias obcaecati  adipisicing elit.
                  Molestias obcaecati 
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias obcaecati  adipisicing elit.
                  Molestias obcaecati 
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias obcaecati adipisicing elit.
                  Molestias obcaecati 
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias obcaecati  adipisicing elit.
                  Molestias obcaecati 
                </li>
              </ul>
            </div> 
        </div>
        </div>
       
       
      </section>
    </div>
  );
};

export default Home;
