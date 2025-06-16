import nit1 from './GalleryImages/nit1.JPG';
import nit4 from './GalleryImages/nit4.JPG';
import nit6 from './GalleryImages/nit6.jpeg';
import nit10 from './GalleryImages/nit10.JPG';
import nit11 from './GalleryImages/nit11.jpeg';
import nit12 from './GalleryImages/nit12.jpeg';
import nit13 from './GalleryImages/nit13.JPG';
import nit14 from './GalleryImages/nit14.JPG';
import nit15 from './GalleryImages/nit15.JPG';
import nit17 from './GalleryImages/nit17.JPG';
import nit18 from './GalleryImages/nit18.JPG';
import nit21 from './GalleryImages/nit21.JPG';
import nit22 from './GalleryImages/nit22.JPG';
import nit23 from './GalleryImages/nit23.JPG';





import React from 'react'; 
import { useNavigate } from "react-router-dom";
import './Gallery.css';
import img from './sell_bg.png'

import { Link } from 'react-router-dom';

const Gallery = () => {
  
  const navigate = useNavigate();
  return (
    <>
    <div id="gallery" className='gallery'>
      <h1 className='h11' data-aos="fade-down"> Gallery</h1>
      <div className="gallery1">
        <div className='gallerydiv'  >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit1} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'data-aos="zoom-in">
          <img src={nit4} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'data-aos="zoom-in">
          <img src={nit6} alt="img" className='imgg'/>
          </div>
          
        </div>
        <div className='gallerydiv'   >
          <div className='imgdiv'data-aos="zoom-in">
          <img src={nit10} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'data-aos="zoom-in">
          <img src={nit11} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'data-aos="zoom-in">
          <img src={nit21} alt="img" className='imgg'/>
          </div>

          
        </div>
        <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit13} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit14} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit15} alt="img" className='imgg'/>
          </div>

          
        </div>
        
        <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit22} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit17} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit18} alt="img" className='imgg'/>
          </div>

          
        </div>
        

      </div>
    
      <div class="events_btn" data-aos="fade-left">
          <button className='btn' onClick={()=>navigate('/gallery')}> 
      View More</button> 
    </div>  
  </div>
  </>
  );
};

export default Gallery;
