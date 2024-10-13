
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import style from "../ImageCarousel/ImageCarousel.module.css"

const ImageCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,  
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={`${style.container}`}>
      <div className="row align-items-left container-fluid">
    <div className="col-md-8">
              <div className={`${style.details}`}>
                <h3 className="h3">50+ Beautiful products inspiration</h3>
                <p className="text-wrap fs-6 fw-medium">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
              <button className="btn btn-danger text-main-light w-25 btn-md">
                Explore More
              </button>
            </div>
    </div>
    <div className="col-md-4">
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="carousel-item">
            <img src={product.image} alt={product.title} className={`${style.carouselimage}`}/>
          </div>
        ))}
      </Slider>
    </div>
      </div>

  </div>
  );
};

export default ImageCarousel;
