import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blueshirtman from "../assets/images/webp/blue-shirt-man.webp";
import { Playbtn, UsLbm_icon, BtnSliderNext, BtnSliderpre } from "./Icons";
import ActualLine from "../assets/images/webp/actualbottomline.webp";
import bg_bubble from "../assets/images/webp/BubbleImg.webp";
import MenInBlackTee from "../assets/images/webp/MichaelETestomnial.webp";
const ActualResults = () => {
  const settings1 = {
    centerMode: true,
    centerPadding: "250px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider1 = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="position-relative">
      <div className="actual_bg_img position-relative pb-5 pt-5 my-5">
        <img
          src={bg_bubble}
          alt="bg_bubble"
          className="bubble_theme position-absolute top-50 start-50 translate-middle w-100"
        />
        <div className="pt-lg-4 px-4 px-lg-0">
          <h3
            className="mb-0 ff_maison_neue_light fw-light fs_xlg text-white text-center lh_normal"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            Actual businesses
          </h3>
          <h2
            className="mb-0 ff_sohne_schmal_bold fw-bold fs_xxl text-white text-center text-uppercase"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1100"
          >
            Actual results
          </h2>
          <p
            className="mb-0 ff_space_mono fw-normal fs_5sm text-white text-center pt-3 pt-lg-4 pb-5"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1200"
          >
            Businesses trust Venveo to power grow
          </p>
          <Slider ref={slider1} {...settings} >
            <div>
              <Slider {...settings1}>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <div className="position-relative">
                    <img
                      src={Blueshirtman}
                      alt="Blueshirtman"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    />
                    <div
                      className="position-absolute bottom-0 end-0 p-3 cursor_pointer"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    >
                      <Playbtn />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <div className="position-relative">
                    <img
                      src={MenInBlackTee}
                      alt="Blueshirtman"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    />
                    <div
                      className="position-absolute bottom-0 end-0 p-3"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    >
                      <Playbtn />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <div className="position-relative">
                    <img
                      src={Blueshirtman}
                      alt="Blueshirtman"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    />
                    <div
                      className="position-absolute bottom-0 end-0 p-3"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    >
                      <Playbtn />
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="d-flex align-items-center justify-content-center flex-column pt-3">
                <p
                  className="mb-0 ff_maison_neue_light fw-light fs_xlg text-black mw-640 text-white text-center pt-md-5 pt-3"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  “They are really aligned with how we are building the business
                  from a strategic standpoint and from branding, messaging and
                  cultural standpoint.”
                </p>
                <p
                  className="mb-0 text-center text-white ff_maison_neue_regular fw-normal fs_5sm pt-5 mt-md-2"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  Jon Vaughan,
                  <br />
                  REGIONAL VP-SE AT US LBM
                </p>
                <div
                  className="pt-3 pb-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  <UsLbm_icon />
                </div>
              </div>
            </div>
            <div>
              <Slider {...settings1}>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <div className="position-relative">
                    <img
                      src={Blueshirtman}
                      alt="Blueshirtman"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    />
                    <div
                      className="position-absolute bottom-0 end-0 p-3"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    >
                      <Playbtn />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <div className="position-relative">
                    <img
                      src={MenInBlackTee}
                      alt="Blueshirtman"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    />
                    <div
                      className="position-absolute bottom-0 end-0 p-3"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    >
                      <Playbtn />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <div className="position-relative">
                    <img
                      src={Blueshirtman}
                      alt="Blueshirtman"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    />
                    <div
                      className="position-absolute bottom-0 end-0 p-3"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    >
                      <Playbtn />
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="d-flex align-items-center justify-content-center flex-column pt-3">
                <p
                  className="mb-0 ff_maison_neue_light fw-light fs_xlg text-black mw-640 text-white text-center pt-md-5 pt-3"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  “They are really aligned with how we are building the business
                  from a strategic standpoint and from branding, messaging and
                  cultural standpoint.”
                </p>
                <p
                  className="mb-0 text-center text-white ff_maison_neue_regular fw-normal fs_5sm pt-5 mt-md-2"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  Jon Vaughan,
                  <br />
                  REGIONAL VP-SE AT US LBM
                </p>
                <div
                  className="pt-3 pb-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  <UsLbm_icon />
                </div>
              </div>
            </div>
            <div>
              <Slider {...settings1}>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <div className="position-relative">
                    <img
                      src={Blueshirtman}
                      alt="Blueshirtman"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    />
                    <div
                      className="position-absolute bottom-0 end-0 p-3"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <Playbtn />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <div className="position-relative">
                    <img
                      src={MenInBlackTee}
                      alt="Blueshirtman"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    />
                    <div
                      className="position-absolute bottom-0 end-0 p-3 cursor_pointer"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <Playbtn />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <div className="position-relative">
                    <img
                      src={Blueshirtman}
                      alt="Blueshirtman"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    />
                    <div
                      className="position-absolute bottom-0 end-0 p-3 cursor_pointer"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <Playbtn />
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="d-flex align-items-center justify-content-center flex-column pt-3">
                <p
                  className="mb-0 ff_maison_neue_light fw-light fs_xlg text-black mw-640 text-white text-center pt-md-5 pt-3"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  “They are really aligned with how we are building the business
                  from a strategic standpoint and from branding, messaging and
                  cultural standpoint.”
                </p>
                <p
                  className="mb-0 text-center text-white ff_maison_neue_regular fw-normal fs_5sm pt-5 mt-md-2"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  Jon Vaughan,
                  <br />
                  REGIONAL VP-SE AT US LBM
                </p>
                <div
                  className="pt-3 pb-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <UsLbm_icon />
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div
          onClick={() => slider1?.current?.slickPrev()}
          className="cursor_pointer position-absolute pre_btn d-md-block d-none"
        >
          <BtnSliderpre />
        </div>
        <div
          onClick={() => slider1?.current?.slickNext()}
          className="cursor_pointer position-absolute next_btn d-md-block d-none"
        >
          <BtnSliderNext />
        </div>
      </div>
      <img
        src={ActualLine}
        alt="ActualLine"
        className="position-absolute start-0 w-100 bottom_2"
      />
    </div>
  );
};
export default ActualResults;
