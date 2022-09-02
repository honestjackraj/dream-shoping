import React from "react";
import "../component/Carousel.css"

function Carousel() {
    return (
        <section>
 

            <div id="carouselExampleControls " className="carousel slide total-carosal" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active  ">
      <img src="https://i.pinimg.com/originals/02/cf/cf/02cfcffac595c832c514d58704cd82ce.jpg" className="d-block w-100 caro-image-siz" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/2d/95/b4/2d95b4fc6a1d0b6aee28a1553ae70766.jpg" className="d-block w-100 caro-image-siz" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-22-LmTLHWkkY.jpg" className="d-block w-100  caro-image-siz" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </section>
    )
}


export default Carousel