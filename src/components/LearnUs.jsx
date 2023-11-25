import React from "react";
import { LearnBtnIcon } from "./Icons";
import { Col, Container, Row } from "react-bootstrap";
import MadeForBrand from "../assets/images/png/madeforcircle.png";

const LearnUs = () => {
  const items = [
    // {
    //   id: 1,
    //   heading: "guides",
    //   content: "Marketing to Contractors and Installers: The Ultimate Guide",
    //   para: "Understanding the process and maximize the opportunities",
    //   button: "Read More",
    //   imagearrow: <svg
    //       width="10"
    //       height="10"
    //       viewBox="0 0 10 10"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
    //     </svg>,
    //   bg_img: LearnUsBg,
    // },
    {
      id: 1,
      heading: "multi-channel marketing",
      content: "How to Get Your Product into Lowe’s",
      para: "Understanding the process and maximize the opportunities",
      button: "Read More",
      imagearrow: (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
        </svg>
      ),
      bgImg: `url(${require("../assets/images/png/learnus1.png")})`,
    },
    {
      id: 2,
      heading: "lead-gen",
      content: "Get Your Sales Team Ready for Digital Leads",
      para: "unlock substantial business growth by enhancing collaboration skills and digital marketing expertise",
      button: "Read More",
      imagearrow: (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
        </svg>
      ),
      bgImg: `url(${require("../assets/images/png/learnus2.png")})`,
    },
    {
      id: 3,
      heading: "ecommerce",
      content: "How to Sell building Materials Online",
      para: "Explore how selling building materials online opens up wider audiences, efficient sales and insightful data,",
      button: "Read More",
      imagearrow: (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
        </svg>
      ),
      bgImg: `url(${require("../assets/images/png/learnus3.png")})`,
    },
  ];
  return (
    <>
      <div className="my-5 pt-xl-5 pt-3 text-center">
        <h2 className="ff_sohne_schmal_bold fs_xxl fw_bold lh_87 text-uppercase text-center text-black mb-2 pb-1"data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1000">
          Learn from us
        </h2>
        <p className="ff_space_mono fw-light fs_5sm text-black lh_134 text-center mb-4 pb-2"data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1200">
          Digital marketing resources from Venveo to help you grow
        </p>
        <button className="bg-transparent border-0 ff_maison_neue_medium fw-semibold fs_5sm text-black lh_134 text-capitalize"data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1400">
          See All{" "}
          <span className="ms-2">
            <LearnBtnIcon />
          </span>
        </button>
      </div>
      <Container className="my-5 position-relative"data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000">
        <img
          src={MadeForBrand}
          alt="MadeForBrand"
          className="position-absolute learn_red_ellips ellips_rotate max_w_red_ellips"
        />
        <div className="mb-2 learn_bg min_vh_100 position-relative mx-sm-0 mx-3">
          <div className="px-4 pb-4 position-absolute start-0 bottom-0 max_w_440">
            <div className=" learn_us_inner_card px-4 pt-4 m-1 pb-3 border_r_24 bg-white h-100 d-flex flex-column justify-content-between cursor_pointer">
              <h4 className="ff_maison_neue_medium fw-medium lh_134 fs_5sm text-uppercase text_blue">
                guides
              </h4>
              <h2 className="ff_maison_neue_light fw-light fs_xlg lh_normal text-black align-self-stretch">
                Marketing to Contractors and Installers: The Ultimate Guide
              </h2>
              <p className="ff_maison_neue_semi_bold fw-normal fs_5sm lh_134 text-black align-self-stretch">
                Understanding the process and maximize the opportunities
              </p>
              <button className="ff_maison_neue_bold fw-bold text-capitalize fs_5sm lh_134 text-black d-flex align-items-center bg-transparent border-0">
                Read More
                <span className="ms-3">
                  <LearnBtnIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Row className="max_w_1440 mx-auto gap-xl-0 gap-lg-5  gap-3 justify-content-center mb-5"data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1200">
        {items.map((x) => (
          <Col xs={11} sm={9} xl={4} lg={5} md={7}>
            <div
              className="bg_learn_us_card px-4 pb-4 w-100 h-100 pt_250"
              style={{ backgroundImage: `${x.bgImg}` }}
            >
              <div className=" learn_us_inner_card px-4 pt-4 m-1 pb-3 border_r_24 bg-white h-100 d-flex flex-column justify-content-between cursor_pointer">
                <h4 className="ff_maison_neue_medium fw-medium lh_134 fs_5sm text-uppercase text_blue">
                  {x.heading}
                </h4>
                <h2 className="ff_maison_neue_light fw-light fs_xlg lh_normal text-black align-self-stretch">
                  {x.content}
                </h2>
                <p className="ff_maison_neue_semi_bold fw-normal fs_5sm lh_134 text-black align-self-stretch">
                  {x.para}
                </p>
                <button className="ff_maison_neue_bold fw-bold text-capitalize fs_5sm lh_134 text-black d-flex align-items-center bg-transparent border-0">
                  {x.button}
                  <span className="ms-3">{x.imagearrow}</span>
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default LearnUs;
