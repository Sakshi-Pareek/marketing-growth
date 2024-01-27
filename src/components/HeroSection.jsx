import React, { useState } from "react";
import { LetArrow, SearchIcon } from "./Icons";
import GrowthGreenline from "../assets/images/webp/growthgreenline.webp";
import { Container } from "react-bootstrap";
import Blueline from "../assets/images/webp/herosectionblueline.webp";
import MadeForBrand from "../assets/images/webp/madeforcircle.webp";
import HeroVideo from "../assets/videos/herovideo.mp4";

const HeroSection = () => {
  const [show, setShow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="header_bg_img bg-color position-relative mt-0">
        <div className="position-absolute end-0 start-0 bottom_6">
          <img src={Blueline} alt="Blueline" className="w-100" />
        </div>
        <Container fluid className="d-flex justify-content-end p-0 bg_color">
          <ul className={`${show ? "right_100" : "start-0"} nav_bar`}>
            <li
              className="cursor_pointer position-relative"
              onClick={() => setShow(!show)}
            >
              <div className="fs_5sm fw-medium text-black ff_maison_neue_medium dropdown_link text-nowrap">
                How We Help <span className="fs_s fw-medium">▼</span>{" "}
              </div>
              <div id="dropcontent" className="dropdown-box">
                <a
                  href=""
                  className="mb-0 ff_maison_neue_regular fs_3sm fw-normal text-black d-flex align-items-center justify-content-center"
                >
                  About Us
                </a>
              </div>
            </li>
            <li
              className="cursor_pointer position-relative"
              onClick={() => setShow(!show)}
            >
              <div className="fs_5sm fw-medium text-black ff_maison_neue_medium dropdown_link text-nowrap">
                Who We Help <span className="fs_s fw-medium">▼</span>{" "}
              </div>
              <div id="dropcontent" className="dropdown-box">
                <a
                  href=""
                  className="mb-0 ff_maison_neue_regular fs_3sm fw-normal text-black d-flex align-items-center justify-content-center"
                >
                  Faq
                </a>
                <a
                  href=""
                  className="mb-0 ff_maison_neue_regular fs_3sm fw-normal text-black d-flex align-items-center justify-content-center"
                >
                  Roadmap
                </a>
              </div>
            </li>
            <li
              className="cursor_pointer position-relative"
              onClick={() => setShow(!show)}
            >
              <div className="fs_5sm fw-medium text-black ff_maison_neue_medium dropdown_link text-nowrap">
                Why Venveo<span className="fs_s fw-medium"> ▼</span>{" "}
              </div>
              <div id="dropcontent" className="dropdown-box">
                <a
                  href=""
                  className="mb-0 ff_maison_neue_regular fs_3sm fw-normal text-black d-flex align-items-center justify-content-center"
                >
                  More
                </a>
                <a
                  href=""
                  className="mb-0 ff_maison_neue_regular fs_3sm fw-normal text-black d-flex align-items-center justify-content-center"
                >
                  Service
                </a>
              </div>
            </li>
            <li
              className="cursor_pointer position-relative"
              onClick={() => setShow(!show)}
            >
              <div className="fs_5sm fw-medium text-black ff_maison_neue_medium dropdown_link text-nowrap">
                Resources
              </div>
              <div id="dropcontent" className="dropdown-box">
                <a
                  href=""
                  className="mb-0 ff_maison_neue_regular fs_3sm fw-normal text-black d-flex align-items-center justify-content-center"
                >
                  About Us
                </a>
                <a
                  href=""
                  className="mb-0 ff_maison_neue_regular fs_3sm fw-normal text-black d-flex align-items-center justify-content-center"
                >
                  Faq
                </a>
              </div>
            </li>
          </ul>
          <div className="bg-white d-flex align-items-center justify-content-center cursor_pointer px-3 neg_margin">
            <SearchIcon />
          </div>
          <div className="bg_green cursor_pointer px-4 py-3 d-flex align-items-center justify-content-center">
            <a
              href=""
              className="text-black fs_5sm ff_maison_neue_medium fw-medium text-nowrap"
            >
              Let’s Talk
              <span className="ms-2">
                <LetArrow />
              </span>
            </a>
          </div>
          <div
            onClick={() => setShow(!show)}
            className={`${show ? "" : "cross"} navline`}
          >
            <span className="crl_1"></span>
            <span className="crl_2"></span>
            <span className="crl_3"></span>
          </div>
        </Container>
        <Container className="d-flex justify-content-center align-items-center flex-column">
          <div className="d-flex align-items-center justify-content-center pt-5 mt-5 position-relative">
            <h2
              className="ff_sohne_schmal_bold fw-bold fs_xxxl text-white lh_87 mw_822 text-uppercase text-center"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1200"
            >
              Make marketing
              <br /> a{" "}
              <span className="position-relative">
                growth
                <img
                  src={GrowthGreenline}
                  alt="GrowthGreenline"
                  className="position-absolute bottom-0 start-0 w-100"
                />
              </span>{" "}
              machine
            </h2>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center pt-4">
            <p
              className="mw_720 fs_4md text-white fw-light ff_maison_neue_light text-center m-0 lh_125 pb-4"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1300"
            >
              We focus on results. Not just chatter. Elevate your business with
              our top-tier services and tech. Get a proposal now.
            </p>
            <div
              className="analyze_email d-flex align-items-center justify-content-center w-100"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1400"
            >
              <input
                className="analyze_input w-100 py-3 bg-transparent text-capitalize lh_134"
                type="text"
                placeholder="Enter Your Website"
              />
              <div className="cursor_pointer">
                <button className="analyze_btn text-capitalize px-4 py-3 bg-transparent ff_maison_neue_semibold fw-semibold text-white fs_5sm">
                  Analyze
                </button>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center pt-md-5 pt-4 mt-3 position-relative"
            data-aos="zoom-in-up"data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              src={MadeForBrand}
              alt="MadeForBrand"
              className="position-absolute red_ellips max_w_red_ellips ellips_rotate"
            />
            <video
              src={HeroVideo}
              muted
              autoPlay
              loop
              className="mw_871 w-100 hero_video_shadow"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
