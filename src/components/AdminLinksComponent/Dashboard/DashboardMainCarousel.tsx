import React, { Component } from "react";
import "./index.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class DashboardMainCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    return (
      <div className="dashboardMainCarousel">
        <Slider {...settings} className="first-carousel">
          <div className="fistCarousel">
            <img
              src="/assets/img/dashboardCarouselImg.png"
              className="fistCarouselImg img-fluid"
              alt=""
            />
            <div className="fistCarouselBack" />
            <div className="carouselInfo">
              <p className="carouselTitle mb-0">Акция “Лови момент”</p>
              <button className="carouselBtn">Подробно</button>
            </div>
          </div>
          <div className="fistCarousel">
            <img
              src="/assets/img/dashboardCarouselImg.png"
              className="fistCarouselImg img-fluid"
              alt=""
            />
            <div className="fistCarouselBack" />
            <div className="carouselInfo">
              <p className="carouselTitle mb-0">Акция “Лови момент”</p>
              <button className="carouselBtn">Подробно</button>
            </div>
          </div>
          <div className="fistCarousel">
            <img
              src="/assets/img/dashboardCarouselImg.png"
              className="fistCarouselImg img-fluid"
              alt=""
            />
            <div className="fistCarouselBack" />
            <div className="carouselInfo">
              <p className="carouselTitle mb-0">Акция “Лови момент”</p>
              <button className="carouselBtn">Подробно</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default DashboardMainCarousel;
