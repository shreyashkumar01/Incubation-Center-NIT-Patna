// import logo from './logo.svg';

import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/login.js'
import Register from './pages/register/register.js'
// import Home from './pages/Home'; 
import Navbar from './pages/Navbarse';
// import Director from './pages/Directors';  
import Notice from './pages/Notice';
// import Vision from './pages/Vision';
// import Incubations from './pages/incubations';
// import Incubationsoo from './pages/swiper';
// import Talks from './pages/talks';
// import Events from './pages/events';
// import Gallery from './pages/gallery';
// import Idea from './pages/idea';
// import Faqs from './pages/faqs';
import Footer from './pages/footer';
import Talks_LitsenMore from './pages/talks_LitsenMore';
import Homes from './Homes.js';



function App() {

  // const fun = () => {
  //   return(
  //      <Talks_viewMore/>
  //   );
  // }
  return (
    <div className="App"> 
    
    < Navbar/>
    <Routes>
          <Route  path="talks_LitsenMore/index.js" element={<Talks_LitsenMore/>}/> 
          <Route  path="/" element={<Homes />}/> 
          <Route index element={<Homes />}/>
          <Route  path="Notice/index.js" element={<Notice/>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route  path="Notice" element={<Notice/>}/> 
     < Route path="/register" element={<Register/>}/>
        </Routes>
       
        
        
        
        
        
        
        {/* <Incubationsoo/> */}
        
        {/* <Talks_LitsenMore/> */}
       
        {/* <Gallery/> */}
         
        {/* <Faqs/> */}
    </div>
  );
}

export default App;
