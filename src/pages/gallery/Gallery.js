
import './style.css';
import img from "./sell_bg.png"
import Footer from '../footer'
import Navbar from '../Navbar';

function Gallery1() {
    const galleryImages = [
      "img1.jpg",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg",
      "img5.jpg",
      "img6.jpg",
      "img7.jpg",
      "img8.jpg"
    ]
  return (
    <>
    <Navbar/>
    <div class="container_header1">
      <div>
      <h1>Gallery</h1>
      </div>
      </div>
    <div className='hhar'> 
    <div className='text2'>
      Startups :-
      </div>

   
            {/* {professors.map((info)=>(
              <CardGallery name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
            ))}
     */}

      <div className="harshr">
        <div className="harshr-track">
          {galleryImages.map((filename, idx) => (
            <div className='harsh' key={idx}>
              <img src={`/gallery-images/ic_startups_gallery/${filename}`} alt={`gallery_${idx}`} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: "60px" }}></div>
      <div className="harshr">
        <div className="harshr-track">
          {galleryImages.map((filename, idx) => (
            <div className='harsh' key={idx}>
              <img src={`/gallery-images/ic_startups_gallery/${filename}`} alt={`gallery_${idx}`} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: "60px" }}></div>
      <div className="harshr">
        <div className="harshr-track">
          {galleryImages.map((filename, idx) => (
            <div className='harsh' key={idx}>
              <img src={`/gallery-images/ic_startups_gallery/${filename}`} alt={`gallery_${idx}`} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: "60px" }}></div>
    </div>
    <Footer/>
    </>
  );
}

export default Gallery1;
