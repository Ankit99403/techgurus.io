import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

function Services() {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={2000}
        showThumbs={false}
        className="carousel"
      >
        <div>
          <img src={img1} alt="item1" />
          <p className="service_name">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="item2" />
          <p className="service_name">Peer-to-peer Support</p>
        </div>
        <div>
          <img src={img2} alt="item3" />
          <p className="service_name">Full Stack</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Services;
