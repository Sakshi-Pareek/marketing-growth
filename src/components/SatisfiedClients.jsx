import React from "react";
import ClientSectionLine from "../assets/images/webp/clients_section_line.webp";
import ClientSectionTopLine from "../assets/images/webp/clients_section_top_line.webp";
import RedLine from "../assets/images/png/redline.png";
import AmberBook from "../assets/images/png/AmberBook.png";
import FransGroup from "../assets/images/png/farnsworth.png";
import Lcm from "../assets/images/png/lbm.png";
import { LearnBtnIcon } from "./Icons";
import { Col, Row } from "react-bootstrap";

const SatisfiedClients = () => {
  return (
    <>
      <div className="position-relative overflow-hidden">
        <img
          src={ClientSectionTopLine}
          alt="ClientSectionLine"
          className="position-absulate top-0 w-100"
        />
        <img
          src={ClientSectionLine}
          alt="ClientSectionLine"
          className="position-absulate top-0 w-100"
        />
        <div className="py-5 my-lg-5 max_w_1440 mx-auto px-sm-0 px-4">
          <h5 className="ff_maison_neue_light fw-light lh_normal fs_xlg text-black mb-2 text-center" data-aos="zoom-in-down"data-aos-easing="linear"
            data-aos-duration="1000">
            Driving digital revenue for over
          </h5>
          <h2 className="ff_sohne_schmal_bold fw-bold fs_xxl lh_87 text-uppercase text-center text-black mb-5 pb-4" data-aos="zoom-in-down"data-aos-easing="linear"
            data-aos-duration="1200">
            <span className="position-relative">
              1,400+
              <img
                src={RedLine}
                alt="RedLine"
                className="position-absolute bottom-0 start-0 w-100"
              />
            </span>
            satisfied clients
          </h2>
          <Row className="justify-content-center justify-content-lg-between" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1200">
            <Col sm={10} md={6} lg={4}>
              <div className="client_card_1 pt-4 px-3 pb-3 bg_card1">
                <div className="inner_card bg-white p-4 mb-4">
                  <img
                    src={AmberBook}
                    alt="AmberBook"
                    className="mb-lg-4 mb-3 max_w_146"
                  />
                  <h4 className="ff_maison_neue_light fw-normal fs_xlg lh_normal text-black mb-3">
                    Driving digital revenue for over 1,000+ satisfied clients.
                  </h4>
                  <p className="ff_maison_neue_regular fs_5sm fw-normal lg_134 text-black mb-5 pb-3">
                    Elevate your business with our top-tier services and tech
                  </p>
                  <a
                    href=""
                    className="ff_maison_neue_medium fw-bold lh_134 fs_8sm text-black"
                  >
                    Learn more
                    <span className="ms-2">
                      {" "}
                      <LearnBtnIcon />
                    </span>
                  </a>
                </div>
                <div className="d-flex justify-content-around">
                  <div>
                    <h6 className="ff_sohne_schmal_bold fw-bold lh_87 text-uppercase fs_xl text-black mb-0">
                      80%
                    </h6>
                    <p className="ff_maison_neue_regular fw_normal fs-base lh_150 text-black mb-0">
                      Leads
                    </p>
                  </div>
                  <div>
                    <h6 className="ff_sohne_schmal_bold fw-bold lh_87 text-uppercase fs_xl text-black mb-0">
                      2X
                    </h6>
                    <p className="ff_maison_neue_regular fw_normal fs-base lh_150 text-black mb-0">
                      Ad Leads
                    </p>
                  </div>
                  <div>
                    <h6 className="ff_sohne_schmal_bold fw-bold lh_87 text-uppercase fs_xl text-black mb-0">
                      520%
                    </h6>
                    <p className="ff_maison_neue_regular fw_normal fs-base lh_150 text-black mb-0">
                      Web Traffic
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={10} md={6} lg={4} className="mt-md-0 mt-5">
              <div className="client_card_2 pt-4 px-3 pb-3 bg_card2">
                <div className="inner_card bg-white p-4 mb-4">
                  <img
                    src={FransGroup}
                    alt="FransGroup"
                    className="mb-lg-4 mb-3 max_w_166"
                  />
                  <h4 className="ff_maison_neue_light fw-normal fs_xlg lh_normal text-black mb-3">
                    Driving digital revenue for over 1,000+ satisfied clients.
                  </h4>
                  <p className="ff_maison_neue_regular fs_5sm fw-normal lg_134 text-black mb-5 pb-3">
                    Elevate your business with our top-tier services and tech
                  </p>
                  <a
                    href=""
                    className="ff_maison_neue_medium fw-bold lh_134 fs_8sm text-black mb-0"
                  >
                    Learn more
                    <span className="ms-2">
                      {" "}
                      <LearnBtnIcon />
                    </span>
                  </a>
                </div>
                <div className="d-flex justify-content-around">
                  <div>
                    <h6 className="ff_sohne_schmal_bold fw-bold lh_87 text-uppercase fs_xl text-black mb-0">
                      80%
                    </h6>
                    <p className="ff_maison_neue_regular fw_normal fs-base lh_150 text-black mb-0">
                      Leads
                    </p>
                  </div>
                  <div>
                    <h6 className="ff_sohne_schmal_bold fw-bold lh_87 text-uppercase fs_xl text-black mb-0">
                      2X
                    </h6>
                    <p className="ff_maison_neue_regular fw_normal fs-base lh_150 text-black mb-0">
                      Ad Leads
                    </p>
                  </div>
                  <div>
                    <h6 className="ff_sohne_schmal_bold fw-bold lh_87 text-uppercase fs_xl text-black mb-0">
                      520%
                    </h6>
                    <p className="ff_maison_neue_regular fw_normal fs-base lh_150 text-black mb-0">
                      Web Traffic
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={10} md={6} lg={4} className="mt-lg-0 mt-5">
              <div className="client_card_3 pt-4 px-3 pb-3 bg_card3">
                <div className="inner_card bg-white p-4 mb-4">
                  <img
                    src={Lcm}
                    alt="AmberBook"
                    className="mb-lg-4 mb-3 max_w_50"
                  />
                  <h4 className="ff_maison_neue_light fw-normal fs_xlg lh_normal text-black mb-3">
                    Driving digital revenue for over 1,000+ satisfied clients.
                  </h4>
                  <p className="ff_maison_neue_regular fs_5sm fw-normal lg_134 text-black mb-5 pb-3">
                    Elevate your business with our top-tier services and tech
                  </p>
                  <a
                    href=""
                    className="ff_maison_neue_medium fw-bold lh_134 fs_8sm text-black"
                  >
                    Learn more
                    <span className="ms-2">
                      <LearnBtnIcon />
                    </span>
                  </a>
                </div>
                <div className="d-flex justify-content-around">
                  <div>
                    <h6 className="ff_sohne_schmal_bold fw-bold lh_87 text-uppercase fs_xl text-black mb-0">
                      80%
                    </h6>
                    <p className="ff_maison_neue_regular fw_normal fs-base lh_150 text-black mb-0">
                      Leads
                    </p>
                  </div>
                  <div>
                    <h6 className="ff_sohne_schmal_bold fw-bold lh_87 text-uppercase fs_xl text-black mb-0">
                      2X
                    </h6>
                    <p className="ff_maison_neue_regular fw_normal fs-base lh_150 text-black mb-0">
                      Ad Leads
                    </p>
                  </div>
                  <div>
                    <h6 className="ff_sohne_schmal_bold fw-bold lh_87 text-uppercase fs_xl text-black mb-0">
                      520%
                    </h6>
                    <p className="ff_maison_neue_regular fw_normal fs-base lh_150 text-black mb-0">
                      Web Traffic
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default SatisfiedClients;
