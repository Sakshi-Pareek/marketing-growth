import React from "react";
import EarningBg from "../assets/images/webp/earning_bg_img.webp";
import EarnArrow from "../assets/images/webp/earnSectionArrow.webp";
import { Container } from "react-bootstrap";

const StartEarning = () => {
  return (
    <>
      <div className="earning_bg py-2 position-relative overflow-hidden">
        <img
          src={EarningBg}
          alt="EarningBg"
          className="w-100 max_w_463 ms-5 ps-5 h-100 img_motion d-inline-block position-absolute start-0 z-1"
        />
        <img
          src={EarningBg}
          alt="EarningBg"
          className="w-100 max_w_463 img_motion position-absolute d-inline-block end-0 me-5 pe-5 z-1 h-100"
        />
        <Container>
          <div className="position-relative z-3 py-5 my-2 d-xl-flex justify-content-xl-between justify-content-center align-items-center"data-aos="zoom-in"data-aos-easing="linear"
            data-aos-duration="1200">
            <div className="max_w_1024 mx-auto">
              <h6 className="ff_space_mono fw-semibold lh_normal fs_5sm text-black pt-2 mb-2 text-xl-start text-center">
                Get Your Custom Marketing Plan
              </h6>
              <h2 className="ff_maison_neue_light fw-light fs_lg text-black text-xl-start text-center mb-0">
                Start earning more money now
              </h2>
            </div>
            <div className="email_box bg-white w-100 mx-auto d-flex justify-content-between align-items-center text-xl-start text-center mt-xl-0 mt-4 position-relative">
            <img src={EarnArrow} alt="EarnArrow" className="position-absolute w-100 max_w_135 arrow"/>
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="submit_input w-100 ff_poppins fw_400 fs_20 py-3"
                />
              </div>
              <a
                href=""
                className="px-4 py-3 text-black ff_maison_neue_semibold fw-semibold lh_134 text-capitalize fs_5sm text-right submit_btn"
              >
                Submit
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default StartEarning;
