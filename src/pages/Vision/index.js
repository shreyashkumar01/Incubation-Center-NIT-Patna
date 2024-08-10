import React from 'react';
import "./style.css";

const Vision = () => {
  return (
    <div>
      <section class="vision" id="vision">
    <div class="vision_header">
      <h1 data-animation="slideInUp" data-animation-delay=".3s">Our Vision</h1>
    </div>
    <div class="vision_container">

      <div class="vision_cards" data-animation="slideInRight" data-animation-delay=".3s">
        <div class="vision_content">
          <h3>vision 1</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. </p>
        </div>
      </div>

      <div class="vision_cards" data-animation="fadeIn" data-animation-delay=".3s">
        <div class="vision_content">
          <h3>vision 1</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit,</p>
        </div>
      </div>

      <div class="vision_cards" data-animation="slideInLeft" data-animation-delay=".3s">
        <div class="vision_content">
          <h3>vision 1</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. </p>
        </div>
      </div>

    </div>
  </section>
    </div>
  )
}

export default Vision