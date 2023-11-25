import React from "react";
import GrowthPartnerTopGreenLine from "../assets/images/png/growthpartnertopgreenline.png";
import GrowthPartnerBottomGreenLine from "../assets/images/png/growthpartnerbottongreenline.png";
import GrowthVideo from "../assets/videos/growthvideo.mp4";
import EarthVideo from "../assets/videos/EarthVideo.mp4";
import ProjectVideo from "../assets/videos/ProjectRadar.mp4";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Subscribe } from "./Icons";
import HomeImg from "../assets/images/png/HomeImg.webp";
import AIA from "../assets/images/png/AIA.webp";
import Lowes from "../assets/images/png/LowesImg.webp";
import Risinger from "../assets/images/png/Risinger.webp";
import Houzz from "../assets/images/png/Houzz.webp";
import CardImg from "../assets/images/png/CardImg.webp";
import { Card_arrow } from "./Icons";
import logoipsum from "../assets/images/png/LogoIpsum.webp";
import { ProjectBtn_arrow } from "./Icons";
import MapImg from "../assets/images/png/MapImg.webp";
import DotImg from "../assets/images/png/DotImg.webp";
import NavTabRedLine from "../assets/images/png/NavTabbRedLine.webp";
import RedCross from "../assets/images/png/RedCross.png";

const GrowthPartner = () => {
  return (
    <>
      <div className="position-relative pb-4">
        <img
          src={GrowthPartnerTopGreenLine}
          alt="GrowthPartnerTopGreenLine"
          className="position-absolute start-0 w-100 bottom_6"
        />
        <img
          src={GrowthPartnerBottomGreenLine}
          alt="GrowthPartnerBottomGreenLine"
          className="position-absolute start-0 w-100 bottom-0"
        />
        <h2
          className="ff_sohne_schmal_bold fw-bold fs_xxl text-black text-center mb-0 text-uppercase mt-5 pt-lg-5 pt-4 lh_87"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          The growth partner{" "}
        </h2>
        <p
          className="ff_maison_neue_light fw-light fs_xlg text-center mb-0 pb-lg-4 mt-lg-3 pb-3 lh_normal"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          you’ve been looking for
        </p>
        <p
          className="ff_maison_neue_regular fw-normal fs_5sm text-center text-black pb-lg-5 mb-lg-4 pb-3 lh_134"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1400"
        >
          Businesses trust Venveo to power grow
        </p>
        <Container>
          <ul
            className="nav nav-pills mb-3 d-flex justify-content-center"
            id="pills-tab"
            role="tablist"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active position-relative"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <p className="fs_8sm fw-medium ff_maison_neue_medium mb-0 pb-2">
                  Industry Expertise
                </p>
                <img
                  src={NavTabRedLine}
                  alt="NavTabRedLine"
                  className="position-absolute bottom-0 start-0 w-100 end-0"
                />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link position-relative"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <p className="fs_8sm fw-medium ff_maison_neue_medium mb-0 pb-2">
                  ROI Focused
                </p>
                <img
                  src={NavTabRedLine}
                  alt="NavTabRedLine"
                  className="position-absolute bottom-0 start-0 w-100 end-0"
                />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link position-relative"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <p className="fs_8sm fw-medium ff_maison_neue_medium mb-0 pb-2">
                  Proprietary Technology
                </p>
                <img
                  src={NavTabRedLine}
                  alt="NavTabRedLine"
                  className="position-absolute bottom-0 start-0 w-100 end-0"
                />
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active position-relative layer overflow-x-hidden"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex="0"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <video
                loop
                autoPlay
                muted
                src={GrowthVideo}
                className="bg_growthvideo"
              />
              <Row className="position-absolute z-2 top-0 start-0 end-0 bottom-0 align-items-center justify-content-center px-4">
                <Col
                  xl={5}
                  className="mb-4 mb-xl-0 d-flex flex-column align-items-center align-items-xl-start justify-content-center justify-content-lg-start mt-xl-0 mt-5"
                >
                  <h3 className="text-white fs_xl text-lg-start text-center fw-bold text-uppercase ff_sohne_schmal_bold mb-0">
                    the smartest{" "}
                    <span className="d-xl-block">minds in the</span> industry
                  </h3>
                  <p className="text-white ff_maison_neue_light fw-light lh_normal fs_xlg pb-4 mb-0 text-lg-start text-center">
                    Answer our questions and listen to our answers.
                  </p>
                  <p className="ff_space_mono fw-light fs_5sm word_wrap text-white lh_133 opacity_70 mb-0 mb-lg-2 pb-lg-5 pb-4 mw_360 text-xl-start text-center">
                    This is placeholder but can add more the business of
                    building, some epic fails (and how to avoid them) and
                    everything building science.
                  </p>
                  <button className="Subscribe_btn">
                    <div className="d-flex gap-2">
                      <Subscribe />
                      <p className="text-white mb-0 ff-maison_neue_regular fw-normal fs_5sm">
                        Subscribe to Podcast{" "}
                        <span className="ff_maison_neue_semi_bold fw-semibold fs_s">
                          ▼
                        </span>
                      </p>
                    </div>
                  </button>
                </Col>
                <Col
                  xl={2}
                  className="overflow-x-scroll Card_scroll mb-xl-0 mb-3"
                >
                  <div className="d-flex align-items-center justify-content-center gap-5 flex-xl-column">
                    <div>
                      <img src={HomeImg} alt="HomeImg" />
                    </div>
                    <div className="position-relative">
                      <img src={RedCross} alt="RedCross" className="position-absolute Red_line" />
                      <img src={AIA} alt="AIA" />
                    </div>
                    <div>
                      <img src={Lowes} alt="Lowes" />
                    </div>
                    <div>
                      <img src={Risinger} alt="Risinger" />
                    </div>
                    <div>
                      <img src={Houzz} alt="Houzz" />
                    </div>
                  </div>
                </Col>
                <Col
                  xl={5}
                  lg={9}
                  sm={12}
                  className="overflow-y-scroll mh_668 Card_scroll d-flex flex-column align-items-center justify-content-center"
                >
                  <div className="Interview_card cursor_pointer">
                    <img
                      src={CardImg}
                      alt="CardImg"
                      className="w-100 rounded-4 mb-lg-4"
                    />
                    <p className="ff_maison_neue_light fw-light text-black fs_xlg mb-0 pb-2 lh_normal pt-3">
                      Matt Risinger on How to Develop Lasting Relationships with
                      Builders
                    </p>
                    <p className=" text-black ff_space_mono fw-normal fs_5sm pb-4 ">
                      Chief Builder of Rising Build and founder of the{" "}
                      <span className="text-decoration-underline">
                        Build Show Network
                      </span>
                    </p>
                    <div className="d-flex align-items-center gap-2 cursor_pointer">
                      <p className=" text-black ff_maison_neue_medium fw-medium fs_5sm text-capitalize mb-0">
                        Listen to Interview
                      </p>
                      <Card_arrow />
                    </div>
                  </div>
                  <div className="Interview_card cursor_pointer my-5">
                    <img
                      src={CardImg}
                      alt="CardImg"
                      className="w-100 rounded-4 mb-lg-4"
                    />
                    <p className="ff_maison_neue_light fw-light text-black fs_xlg mb-0 pb-2 lh_normal pt-3">
                      Matt Risinger on How to Develop Lasting Relationships with
                      Builders
                    </p>
                    <p className="text-black ff_space_mono fw-normal fs_5sm pb-4 ">
                      Chief Builder of Rising Build and founder of the{" "}
                      <span className="text-decoration-underline">
                        Build Show Network
                      </span>
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-black ff_maison_neue_medium fw-medium fs_5sm text-capitalize mb-0 cursor_pointer">
                        Listen to Interview
                      </p>
                      <Card_arrow />
                    </div>
                  </div>
                  <div className="Interview_card cursor_pointer mb-4">
                    <img
                      src={CardImg}
                      alt="CardImg"
                      className="w-100 rounded-4 mb-lg-4"
                    />
                    <p className="ff_maison_neue_light fw-light text-black fs_xlg mb-0 pb-2 lh_normal pt-3">
                      Matt Risinger on How to Develop Lasting Relationships with
                      Builders
                    </p>
                    <p className="text-black ff_space_mono fw-normal fs_5sm pb-4 ">
                      Chief Builder of Rising Build and founder of the{" "}
                      <span className="text-decoration-underline">
                        Build Show Network
                      </span>
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-black ff_maison_neue_medium fw-medium fs_5sm text-capitalize mb-0 cursor_pointer">
                        Listen to Interview
                      </p>
                      <Card_arrow />
                    </div>
                  </div>
                  <div className="Interview_card cursor_pointer mb-4">
                    <img
                      src={CardImg}
                      alt="CardImg"
                      className="w-100 rounded-4 mb-lg-4"
                    />
                    <p className="ff_maison_neue_light fw-light text-black fs_xlg mb-0 pb-2 lh_normal pt-3">
                      Matt Risinger on How to Develop Lasting Relationships with
                      Builders
                    </p>
                    <p className="text-black ff_space_mono fw-normal fs_5sm pb-4 ">
                      Chief Builder of Rising Build and founder of the{" "}
                      <span className="text-decoration-underline">
                        Build Show Network
                      </span>
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-black ff_maison_neue_medium fw-medium fs_5sm text-capitalize mb-0 cursor_pointer">
                        Listen to Interview
                      </p>
                      <Card_arrow />
                    </div>
                  </div>
                  <div className="Interview_card cursor_pointer">
                    <img
                      src={CardImg}
                      alt="CardImg"
                      className="w-100 rounded-4 mb-lg-4"
                    />
                    <p className="ff_maison_neue_light fw-light text-black fs_xlg mb-0 pb-2 lh_normal pt-3">
                      Matt Risinger on How to Develop Lasting Relationships with
                      Builders
                    </p>
                    <p className="text-black ff_space_mono fw-normal fs_5sm pb-4 ">
                      Chief Builder of Rising Build and founder of the{" "}
                      <span className="text-decoration-underline">
                        Build Show Network
                      </span>
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-black ff_maison_neue_medium fw-medium fs_5sm text-capitalize mb-0 cursor_pointer">
                        Listen to Interview
                      </p>
                      <Card_arrow />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className="tab-pane fade overflow-x-hidden background_circle position-relative"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex="0"
            >
              <video
                loop
                autoPlay
                muted
                src={EarthVideo}
                className="EarthVideo"
              />
              <Row className="position-absolute z-2 top-0 start-0 end-0">
                <h2 className="text-white text-uppercase ff_sohne_schmal_bold fw-bold fs_xxl pt-5 ps-5 mb-0">
                  Proven Results
                </h2>
                <p className="text-white ps-5 mb-0 ff_maison_neue_light fw-light fs_xlg">
                  Not hopes and prayers.
                </p>
              </Row>
            </div>
            <div
              className="tab-pane fade overflow-hidden position-relative"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabIndex="0"
            >
              <video
                loop
                autoPlay
                muted
                src={ProjectVideo}
                className="bg_growthvideo"
              />
              <Row className="position-absolute z-2 top-0 start-0 end-0 bottom-0 align-items-center justify-content-center px-4">
                <Col xl={5} className="col-12">
                  <div className="d-flex flex-column justify-content-between">
                    <div className="mb-5 text-xl-start text-center">
                      <h2 className="text-white text-uppercase ff_sohne_schmal_bold fw-bold fs_xxl pt-5 ps-xl-5 px-3 mb-0">
                        Project radar
                      </h2>
                      <img
                        src={logoipsum}
                        alt="logoipsum"
                        className="ps-xl-5 px-3"
                      />
                    </div>
                    <div className="pt-5  text-xl-start text-center">
                      <p className="ff_maison_neue_light fw-light fs_xlg text-white ps-xl-5 px-2 mb-0 mw_392 lh_normal mb-3 text-xl-start text-center">
                        Lorem ipsum what this product actually does.
                      </p>
                      <p className="text-white ps-xl-5 px-3 mb-0 ff_space_mono fw-normal ls_1 fs_5sm mw_461 text-xl-start text-center">
                        This is placeholder but can add more the business of
                        building, some epic fails (and how to avoid them) and
                        everything building science.
                      </p>
                      <button className="Project_btn ms-xl-5 ms-0 mt-5">
                        <div className="d-flex align-items-center gap-2">
                          <p className="fs_5sm mb-0 ff_maison_neue_medium fw-medium text-black">
                            Call to Action Somewhere
                          </p>
                          <ProjectBtn_arrow />
                        </div>
                      </button>
                    </div>
                  </div>
                </Col>
                <Col sm={1} className="text-center my-auto d-xl-block d-none">
                  <img src={DotImg} alt="DotImg" />
                </Col>
                <Col
                  xl={5}
                  sm={10}
                  className="pe-xl-5 pe-0 pt-5 col-11 overflow-y-scroll mh_668 Card_scroll d-flex flex-column justify-content-center align-items-center gap-5 mt-5 mt-xl-0 py-5"
                >
                  <div className="project_card">
                    <img
                      src={MapImg}
                      alt="MapImg"
                      className="w-100 border_r_24 mb-3"
                    />
                    <p className="pt-lg-4 text-black fs_xlg ff_maison_neue_medium fw-medium mb-0 pb-3 lh_normal">
                      Feature goes here one particular feature can go here of
                      course
                    </p>
                    <p className=" text-black lh_normal ff_space_mono fw-normal mb-0 pb-4">
                      Secondary line to describe what this is in further detail
                      of course
                    </p>
                    <div className="d-flex align-items-center gap-2 cursor_pointer">
                      <p className="mb-0 fw-medium ff_maison_neue_medium fs_5sm text-black text-capitalize">
                        Learn more
                      </p>
                      <Card_arrow />
                    </div>
                  </div>
                  <div className="project_card">
                    <img
                      src={MapImg}
                      alt="MapImg"
                      className="w-100 border_r_24 mb-3"
                    />
                    <p className="pt-lg-4 text-black fs_xlg ff_maison_neue_medium fw-medium mb-0 pb-3 lh_normal">
                      Feature goes here one particular feature can go here of
                      course
                    </p>
                    <p className=" text-black lh_normal ff_space_mono fw-normal mb-0 pb-4">
                      Secondary line to describe what this is in further detail
                      of course
                    </p>
                    <div className="d-flex align-items-center gap-2 cursor_pointer">
                      <p className="mb-0 fw-medium ff_maison_neue_medium fs_5sm text-black text-capitalize">
                        Learn more
                      </p>
                      <Card_arrow />
                    </div>
                  </div>
                  <div className="project_card">
                    <img
                      src={MapImg}
                      alt="MapImg"
                      className="w-100 border_r_24 mb-3"
                    />
                    <p className="pt-lg-4 text-black fs_xlg ff_maison_neue_medium fw-medium mb-0 pb-3 lh_normal">
                      Feature goes here one particular feature can go here of
                      course
                    </p>
                    <p className=" text-black lh_normal ff_space_mono fw-normal mb-0 pb-4">
                      Secondary line to describe what this is in further detail
                      of course
                    </p>
                    <div className="d-flex align-items-center gap-2 cursor_pointer">
                      <p className="mb-0 fw-medium ff_maison_neue_medium fs_5sm text-black text-capitalize">
                        Learn more
                      </p>
                      <Card_arrow />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default GrowthPartner;
