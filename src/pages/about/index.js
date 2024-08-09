import React from 'react'
import "./style.css";

import AOS from 'aos';
import 'aos/dist/aos.css'

const About = () => {

  AOS.init({
    duration: 1000
  });

  return (
    <div>
      <section class="about" id="about">

<div class="aboutdiv">
  <div class="building-img" data-aos="zoom-in">
    <img
      src="https://images.collegedunia.com/public/college_data/images/campusimage/1611227237IMG_20201103_111253.jpg"
      alt="Incubation center NIT Patna"/>
  </div>

  <div class="about-content " >
    <div className='heading'><h1 data-aos="fade-down">About Us</h1></div>
    
    <h3  data-aos="fade-right" >What we do ?</h3>
    <p data-aos="fade-up" > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum mollitia quae, voluptatibus eligendi libero et
      fugit omnis. Quasi culpa non, facere quidem quia, blanditiis ex dicta ea adipisci quod consectetur? Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Similique facere, minima blanditiis quo voluptatibus quod
      ullam nulla commodi, quidem sunt, pariatur quisquam dolores corporis exercitationem enim sapiente. Hic,
      libero! Molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem fuga adipisci omnis
      molestias earum dicta ipsa blanditiis vero quia odit ipsum fugit, minima enim sint! Eaque reiciendis corrupti
      ipsam.
    </p>
    <ul>
      <li data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo provident eos repellat vitae, harum autem
        eius in fugit doloremque, architecto assumenda ipsam sequi quos doloribus unde tempora cumque illum ullam.
      </li> 
    </ul>
  </div>

</div>
</section>
    </div>
  )
}

export default About