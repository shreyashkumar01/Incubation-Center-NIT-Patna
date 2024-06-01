import React from 'react'; 
import "./style.css"; 
import IdeaJs from './idea.js'; 

const Idea = () => {



  return (
    <div>
      <section class="idea" id="idea">
    <h1>Incubate u'r Idea</h1>

    <form action="#">

      <div class="input-box">
        <div class="input-field field">
          <input type="text" placeholder="Full Name" id="name" class="item" autocomplete="off"/>
          <div class="error-txt">Full Name can't be blank</div>
        </div>
        <div class="input-field field">
          <input type="text" placeholder="Email Address " id="email" class="item" autocomplete="off"/>
          <div class="error-txt email">Email Address can't be blank</div>
        </div>
      </div>
      <div class="input-box">
        <div class="input-field field">
          <input type="text" placeholder="Phone Number" id="phone" class="item" autocomplete="off"/>
          <div class="error-txt"> Phone Number can't be blank</div>
        </div>
        <div class="input-field field">
          <input type="text" placeholder="subject  " id="subject" class="item" autocomplete="off"/>
          <div class="error-txt">subject can't be blank</div>
        </div>
      </div>

      <div class="textarea-field field">
        <textarea name="" id="message" cols="30" rows="10" class="item" placeholder="Your Message"
          autocomplete="off"></textarea>
        <div class="error-txt">Message can't be blank</div>
      </div>

      <button type="submit"  onClick={IdeaJs} >Submit</button>
    </form>
  </section> 
  
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    </div>
  )
}

export default Idea;