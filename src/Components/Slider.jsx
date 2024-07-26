import React, { useEffect, useState } from "react";
import SliderImage1 from "./images/slider_imgs/img1.jpg";
import SliderImage2 from "./images/slider_imgs/img2.jpg";
import SliderImage3 from "./images/slider_imgs/img3.jpg";
import SliderImage4 from "./images/slider_imgs/img4.jpg";
import SliderImage5 from "./images/slider_imgs/img5.jpg";

export default function Slider() {
  const [images, setImages] = useState([]);

  const slideImages = [
    SliderImage1,
    SliderImage2,
    SliderImage3,
    SliderImage4,
    SliderImage5,
  ];

  useEffect(() => {
    setImages(slideImages);
  }, []);

  return (
    <div
      className="carousel slide"
      data-bs-ride="carousel"
      id="carouselExampleSlidesOnly"
      style={{ height: "600px" }}
    >
      <div className="carousel-inner h-100">
        {images &&
          images.map((image, index) => {
            return (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""} h-100`}
                data-bs-interval="2000"
              >
                <img alt="..." className="d-block w-100 h-100" src={image} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
