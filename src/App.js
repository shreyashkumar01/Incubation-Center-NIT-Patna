// import logo from './logo.svg';

import {  Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './pages/Home'; 
import Navbar from './pages/Navbarse';
// import Director from './pages/Directors';  
// import About from './pages/about';
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
        </Routes>
        <Footer/>
        
        
        
        
        
        
        {/* <Incubationsoo/> */}
        
        {/* <Talks_LitsenMore/> */}
       
        {/* <Gallery/> */}
         
        {/* <Faqs/> */}
    </div>
  );
}

export default App;
