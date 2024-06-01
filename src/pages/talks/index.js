import {React ,useState} from 'react';
// import Talks_LitsenMore from '../talks_LitsenMore';
import {useNavigate } from "react-router-dom";
import "./style.css";

// function litsenMore(){
//   console.log("got cliceked");
//   return( 
//     <div Id="Talks_viewMore">
//       <div class="header">

// </div>
// <div class="heading">
//   Entrepreneurship Talk
// </div>
// <div class="main">
//   <div class="row">
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div> 
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
  
      
//   </div>
//   <div class="row">
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
  
      
//   </div>
//   <div class="row">
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
  
      
//   </div>    
  
// </div>
// <div class="footer">

// </div>
//     </div>
//   );
// }

const Talks =  () => { 

  const navigate = useNavigate();

  // const [  setShow] = useState(true);

  return (
    <div>
      <section class="talks" id="talks">
    <div class="talks_content">
      <h1>Our Enterpreneur's Talk</h1>
    <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla temporibus, sint laborum natus deleniti? Perspiciatis, eveniet commodi. Quo harum iusto quasi. Blanditiis cum amet ullam repellendus optio quasi fugit!</p>
    </div>
    
    <div class="talk_slider">
      <div class="talk_slider_track">
        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>

        <div class="talk_slide">
          <div class="talk_slide_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda nesciunt! Harum sit quia
              quis perspiciatis corporis voluptates tempora dicta inventore atque, qui eligendi sint cum esse, a
              impedit. Dolorum.</p>
          </div>
          <div class="talk_slide_profile">
            <div class="talk_slide_profile_photo">
              <img src="img/IC LOGO (1).png" alt="Raja Harish chandra"/>
            </div>
            <div class="talk_slide_profile_content">
              <h3>Raja Harish chandra</h3>
              <p>Founder of Incubation company</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="talks_btn">
      <button className='btn' onClick={ () =>  navigate('talks_LitsenMore/index.js ')}> 
      Litsen More</button>
    </div>
     </section>
    </div>
  )
}

export default Talks;