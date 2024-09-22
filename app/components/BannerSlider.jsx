"use client";

import Slider from "react-slick";
import "./BannerSlider.css"; // Import the CSS for custom styles

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "20px", 
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0", padding: "0", listStyle: "none" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        {/* Placeholder for dots */}
      </button>
    ),
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://freakins.com/cdn/shop/files/2_065009ab-6c03-4ed7-9206-cd3aaa3c05f5.jpg?v=1726655558"
          alt="Banner 1"
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <img
          src="https://freakins.com/cdn/shop/files/4_53b4f414-834b-447c-bf39-8b4a353023ef.jpg?v=1726655558"
          alt="Banner 2"
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <img
          src="https://freakins.com/cdn/shop/files/1_75667e10-c7f8-410a-8b13-93e43e028b5f.jpg?v=1726655557"
          alt="Banner 3"
          style={{ width: "100%" }}
        />
      </div>
    </Slider>
  );
};

export default BannerSlider;
