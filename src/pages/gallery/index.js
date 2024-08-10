import React from 'react';
import './Gallery.css';
import img from './sell_bg.png'

import { Link } from 'react-router-dom';


const Gallery = () => {
  return (
    <>
    <div id="gallery" className='gallery'>
      <h1 className='h11' data-aos="fade-down"> Gallery</h1>
      <div className="gallery1">
        <div className='gallerydiv' data-aos="fade-up">
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          
        </div>
        <div className='gallerydiv'data-aos="fade-up" data-aos-duration="1500">
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>

          
        </div>
        <div className='gallerydiv'data-aos="fade-up" data-aos-duration="1500">
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>

          
        </div>
        <div className='gallerydiv' data-aos="fade-up">
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>

          
        </div>
        

      </div>
    
  <Link to="/gallery" className="bttnn" data-aos="fade-left">View More</Link>
  </div>
  </>
  );
};

export default Gallery;
