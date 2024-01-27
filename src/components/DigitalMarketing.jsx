import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DigitalCard1Ing from "../assets/images/webp/digitalcard1img.webp";
import DigitalCard2Ing from "../assets/images/webp/digitalcard2img.webp";
import DigitalCard3Ing from "../assets/images/webp/digitalcard3img.webp";
import DigitalCard4Ing from "../assets/images/webp/digitalcard4img.webp";
import DigitalTopLine from "../assets/images/webp/digitalmarketingtopline.webp";
import DigitalBottomLine from "../assets/images/webp/digitalmarketingbottomline.webp";
import { LearnBtnIcon } from "./Icons";

const DigitalMarketing = () => {
  const data = [
    {
      id: 1,
      title: "My website isn’t getting enough traffic",
      content:
        "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
      description1: "Boost your presence in search results",
      description2: "Capture targeted site traffic",
      description3: "Turn site visitors into customers",
      image: DigitalCard1Ing,
    },
    {
      id: 2,
      title: "My CPL from digital ad campaigns is too high",
      content:
        "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
      description1: "Refine ad targeting",
      description2: "Engage your audience where they",
      description3: "Maximize paid ad budget",
      image: DigitalCard2Ing,
    },
    {
      id: 3,
      title: "My website isn’t generating enough leads",
      content:
        "Struggling to get qualified leads in your pipeline? Turn up the dial on your lead generation with digital marketing plans, tailored to your goals and budget.",
      description1: "Fill up your lead pipeline",
      description2: " Reach your most valuable audience",
      description3: "Maximize conversion opportunities",
      image: DigitalCard3Ing,
    },
    {
      id: 4,
      title: "My marketing and sales data is disconnected",
      content:
        "Don’t let leads slip through the cracks. Unify your sales and marketing efforts with Nutshell and MarketingCloudFX, to provide end-to-end reporting and analysis of your data.",
      description1: "Unify sales and marketing data",
      description2: "Prioritize leads with data-backed insights",
      description3: "Turn opportunities into closed deals",
      image: DigitalCard4Ing,
    },
  ];
  return (
    <>
      <div className="position-relative">
        <img
          src={DigitalTopLine}
          alt="DigitalTopLine"
          className="position-absolute top_30 z-1 w-100"
        />
        <img
          src={DigitalBottomLine}
          alt="DigitalbottomLine"
          className="position-absolute top_30 z-1 w-100"
        />
        <Container className="py-lg-5 py-3 mb-lg-5 mb-3">
          <h6
            className="ff_maison_neue_light fw-light lh_normal fs_xlg text-black text-center mb-1"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Problems we solve
          </h6>
          <h2
            className="ff_sohne_schmal_bold fw-bold fs_xxl lh_87 text-uppercase text-center mb-4"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            Digital Marketing <br />
            for today’s Business
          </h2>
          <p
            className="ff_maison_neue_regular fw-normal fs_5sm text-center lh_134 text-black letter_spacing"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1400"
          >
            We help companies scale their strategies across multiple channels
            <br /> to drive more revenue, more quickly, without cutting corners.
          </p>
          <Row className="gap-5 mt-md-5 pt-4 justify-content-center position-relative z-3 px-sm-0 px-4">
            {data.map((a, index) => (
              <Col
                sx={11}
                sm={12}
                md={10}
                lg={5}
                key={index}
                className="digitalcard cursor_pointer bg-white"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <div className="d-flex gap-3 digital_inner_card align-items-start h-100 justify-content-between">
                  <div className="w-100 h-100 mt-1 mb-3">
                    <img
                      src={a.image}
                      alt="digitalCardImg"
                      className="max_w_54"
                    />
                  </div>
                  <div className="d-flex flex-column h-100 justify-content-between">
                    <h3 className="ff_maison_neue_light fs_xlg fw-light lh_normal text-black mb-3">
                      {a.title}
                    </h3>
                    <p className="ff_maison_neue_semi_bold fw-normal">
                      {a.content}
                    </p>
                    <ul className="mb-4">
                      <li className="ff_maison_neue_bold fw-bold lh_134 fs_5sm text-black">
                        {a.description1}
                      </li>
                      <li className="ff_maison_neue_bold fw-bold lh_134 fs_5sm text-black">
                        {a.description2}
                      </li>
                      <li className="ff_maison_neue_bold fw-bold lh_134 fs_5sm text-black">
                        {a.description3}
                      </li>
                    </ul>
                    <button className="ff_maison_neue_bold fw-bold text-capitalize fs_5sm lh_134 text-black d-flex align-items-center bg-transparent border-0">
                      Explore SEO Services
                      <span className="ms-2">
                        <LearnBtnIcon />
                      </span>
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DigitalMarketing;
