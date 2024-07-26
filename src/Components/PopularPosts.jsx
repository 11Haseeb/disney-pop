import React, { useEffect, useState } from "react";
import Img1 from "./images/popular-images/img1.jpg";
import Img2 from "./images/popular-images/img2.jpg";
import Img3 from "./images/popular-images/img3.jpg";
import Img4 from "./images/popular-images/img4.jpg";
import Img5 from "./images/popular-images/img5.jpg";
import Img6 from "./images/popular-images/img6.jpg";
import Img7 from "./images/popular-images/img7.jpg";
import Img8 from "./images/popular-images/img8.jpg";
import Img9 from "./images/popular-images/img9.jpg";
import Img10 from "./images/popular-images/img10.jpg";

export default function PopularPosts() {
  const [images, setImages] = useState([]);

  const slideImages = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
  ];

  useEffect(() => {
    setImages(slideImages);
  }, []);

  return (
    <div className="my-3">
      <h3 className="py-3 t-text-2xl">Popular Posts</h3>
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="carouselExampleInterval"
        style={{ height: "240px" }}
      >
        <div className="carousel-inner h-100">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""} h-100`}
                data-bs-interval="2000"
              >
                <img src={image} className="d-block w-100 h-100" alt="" />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#carouselExampleInterval"
          type="button"
        >
          <span aria-hidden="true" className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#carouselExampleInterval"
          type="button"
        >
          <span aria-hidden="true" className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
