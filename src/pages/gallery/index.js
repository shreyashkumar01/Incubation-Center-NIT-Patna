import React from 'react';
import './Gallery.css';
import img from '../../img/background_img/IMG20230921194023.jpg'
import { Link } from 'react-router-dom';

const photos = [
  "https://images.unsplash.com/photo-1720774531704-dff00e791a55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1720774531704-dff00e791a55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1720774531704-dff00e791a55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ,"https://images.unsplash.com/photo-1721296352946-9386ed562323?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1720774531704-dff00e791a55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ,"https://images.unsplash.com/photo-1721296352946-9386ed562323?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ,"https://images.unsplash.com/photo-1721296352946-9386ed562323?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
,"https://images.unsplash.com/photo-1721296378610-2d107840144f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
,"https://images.unsplash.com/photo-1720774531704-dff00e791a55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
,"https://images.unsplash.com/photo-1721296378610-2d107840144f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
,"https://images.unsplash.com/photo-1721296352946-9386ed562323?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1720774531704-dff00e791a55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 , 
  // Add more images here
];

const Gallery = () => {
  return (
    <>
    <h1>Gallery</h1>
    <div className="gallery">
    {photos.map((photo, index) => (
      <div key={index} className="gallery-item">
        <img src={photo} alt={`Gallery item ${index + 1}`} />
      </div>
    ))}
  </div>
  <Link to="/gallery" className="bttnn">View More</Link>
  </>
  );
};

export default Gallery;
