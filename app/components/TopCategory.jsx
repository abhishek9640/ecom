"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import custom CSS
import "./TopCategory.css";

const TopCategorySlider = () => {
  const categories = [
    { image: "https://freakins.com/cdn/shop/files/284.jpg?v=1726750219&width=600" },
    { image: "https://freakins.com/cdn/shop/files/283.jpg?v=1726750219&width=600" },
    { image: "https://freakins.com/cdn/shop/files/282.jpg?v=1726750219&width=600" },
    { image: "https://freakins.com/cdn/shop/files/285.jpg?v=1726750220&width=600" },
    { image: "https://freakins.com/cdn/shop/files/280.jpg?v=1726750220&width=600" },
    { image: "https://freakins.com/cdn/shop/files/281.jpg?v=1726750219&width=600" },
  ];

  return (
    <div className="slider-container">
    <h2 className="slider-title">Top Categories</h2>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={15}
      slidesPerView={4}
      loop={true}
      navigation
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2, // Show 1 slide per view on small screens
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2, // Show 2 slides per view on medium screens
          spaceBetween: 15,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3, // Show 3 slides per view on tablets
          spaceBetween: 20,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4, // Show 4 slides per view on larger screens
          spaceBetween: 30,
        },
      }}
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index} className="category-slide">
          <div className="category-item">
            <img src={category.image} alt={category.title} className="category-image" />
            <h3 className="category-title">{category.title}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default TopCategorySlider;
