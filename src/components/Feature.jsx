import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WsjImg from "../assets/images/png/wsj.png"
import Enterpreneur from "../assets/images/png/entrepreneur.png"
import Fortune from "../assets/images/png/fortune.png"
import Forbase from "../assets/images/png/forbes.png"
import IncImg from '../assets/images/png/inc.png'
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const Feature = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container className="my-5 mt py-4 my_3">
        <h5 className="ff_space_mono fw-medium fs_5sm lh_normal text-center text-black"  data-aos="zoom-in-up"data-aos-easing="linear"
            data-aos-duration="1200">
          Featured in
        </h5>
       <div className=" mt-md-5 mt-4 feature_slide" data-aos="zoom-in-up"data-aos-easing="linear"
            data-aos-duration="1500">
       <Slider {...settings}>
          <div className="d-flex align-items-center justify-content-center">
            <img src={WsjImg} alt="WsjImg" className="max_w_50 cursor_pointer"  />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={Enterpreneur} alt="Enterpreneur" className="max_w_184 cursor_pointer" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={Fortune} alt="Fortune"  className="max_w_116 cursor_pointer" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={Forbase} alt="Forbase" className="max_w_104 cursor_pointer" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={IncImg} alt="IncImg" className="max_w_81 cursor_pointer" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={Fortune} alt="Fortune" className="max_w_116 cursor_pointer"  />
          </div>
        </Slider>
       </div>
      </Container>
    </>
  );
};

export default Feature;
