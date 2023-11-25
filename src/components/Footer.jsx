import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Fb_icon,
  Insta_icon,
  Linkedin_icon,
  Twitter_icon,
  Utube_icon,
} from "./Icons";

const Footer = () => {
  return (
    <>
      <div className="bg_color py-md-4">
        <Container className="py-5 px-sm-0 px-4 ">
          <Row className="justify-content-between align-items-start flex-column-reverse flex-xl-row">
            <Col xl={8} xs={12} className="mt-xl-0 mt-5">
              <Row className="justify-content-between align-items-baseline">
                <Col lg={3} md={4} sm={6}>
                  <ul className="ps-0">
                    <li className="mb-4 ff_maison_neue_medium fw-medium fs_2sm text-white lh_107 text-uppercase list-unstyled">
                      how we help
                    </li>
                    <li className="list-unstyled">
                      <a className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize cursor_pointer under_line position-relative">
                        Drive More Awareness
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize cursor_pointer under_line position-relative">
                        Get more Customers
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize cursor_pointer under_line position-relative">
                        Build Your Brand
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize  cursor_pointer under_line position-relative">
                        Improve your reputation
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize cursor_pointer under_line position-relative">
                        Track Results
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <ul className="ps-0">
                    <li className="mb-4 ff_maison_neue_medium fw-medium fs_2sm text-white lh_107 text-uppercase list-unstyled">
                      who we help
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        {" "}
                        Digital Advertising
                      </a>
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        Search Engine Ranking
                      </a>
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under-line position-relative"
                      >
                        Content Marketing
                      </a>
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        Programic Advertising
                      </a>
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        Email Marketing
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <ul className="ps-0">
                    <li className="mb-4 ff_maison_neue_medium fw-medium fs_2sm text-white lh_107 text-uppercase list-unstyled">
                      why venveo
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        {" "}
                        About Us
                      </a>
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        Growth Studies
                      </a>
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={4} sm={6} className="mt-xl-0 mt-5">
                  <ul className="ps-0">
                    <li className="mb-4 ff_maison_neue_medium fw-medium fs_2sm text-white lh_107 text-uppercase list-unstyled">
                      resources
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        Articles
                      </a>
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        {" "}
                        News
                      </a>
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        Webinars
                      </a>
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        eBooks
                      </a>
                    </li>
                    <li className="list-unstyled cursor_pointer">
                      <a
                        href=""
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize under_line position-relative"
                      >
                        Podcast
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={4} sm={6} className="d-lg-none d-block">
                  <ul className="ps-0">
                    <li className="mb-4 pb-2 ff_maison_neue_medium fw-medium fs_2sm text-white lh_107 text-uppercase list-unstyled">
                      Visit
                    </li>
                    <li className="list-unstyled">
                      <a
                        href="https://www.google.com/maps/place/100+N+Main+St+%23201,+Blacksburg,+VA+24060,+USA/@37.2295101,-80.4139482,17z/data=!3m1!4b1!4m6!3m5!1s0x884d9574c4a3c95b:0x57c47fc09b8eedc0!8m2!3d37.2295101!4d-80.4139482!16s%2Fg%2F11nssw2hr_?entry=ttu"
                        target="_blank"
                        className="mb-4 ff_maison_neue_light fw-light fs_5sm text-white lh_107 text-capitalize"
                      >
                        100 N Main Street
                        <br /> #201 <br /> Blacksburg, VA 24060
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={4} sm={6} className="d-lg-none d-block">
                  <ul className="ps-0">
                    <li className="mb-4 pb-2 ff_maison_neue_medium fw-medium fs_2sm text-white lh_107 text-uppercase list-unstyled">
                      contact
                    </li>
                    <li className="cursor_pointer ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize list-unstyled text-nowrap footer_link">
                      info@venveo.com
                    </li>
                    <li className="list-unstyled text-nowrap">
                      <a
                        href="tel: 1 · 800 · 123 · 4567"
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize footer_link"
                      >
                        1 · 800 · 123 · 4567
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row className="justify-content-between mt-xl-5 pt-lg-5 pt-3">
                <Col lg={6} md={12} className="d-flex align-items-end">
                  <p className="text-white fs_3sm fw_normal ff_maison_neue_light lh_150 max_w_312">
                    Venveo is an award-winning digital marketing solutions
                    provider. Since 2003.
                    <br /> ©2023 Venveo
                  </p>
                </Col>
                <Col lg={3} md={6} className="d-lg-block d-none">
                  <ul className="ps-0">
                    <li className="mb-4 pb-2 ff_maison_neue_medium fw-medium fs_2sm text-white lh_107 text-uppercase list-unstyled">
                      Visit
                    </li>
                    <li className="list-unstyled">
                      <li>
                        <a
                          href="https://www.google.com/maps/place/100+N+Main+St+%23201,+Blacksburg,+VA+24060,+USA/@37.2295101,-80.4139482,17z/data=!3m1!4b1!4m6!3m5!1s0x884d9574c4a3c95b:0x57c47fc09b8eedc0!8m2!3d37.2295101!4d-80.4139482!16s%2Fg%2F11nssw2hr_?entry=ttu"
                          target="_blank"
                          className="mb-4 ff_maison_neue_light fw-light fs_5sm text-white lh_107 text-capitalize"
                        >
                          100 N Main Street
                          <br /> #201 <br /> Blacksburg, VA 24060
                        </a>
                      </li>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={6} className="d-lg-block d-none">
                  <ul className="ps-0">
                    <li className="mb-4 pb-2 ff_maison_neue_medium fw-medium fs_2sm text-white lh_107 text-uppercase list-unstyled">
                      contact
                    </li>
                    <li className="cursor_pointer ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalize list-unstyled text-nowrap footer_link">
                      info@venveo.com
                    </li>
                    <li className="list-unstyled text-nowrap">
                      <a
                        href="tel: 1 · 800 · 123 · 4567"
                        className="ff_maison_neue_light fw-light fs_5sm text-white lh_200 text-capitalizeF footer_link"
                      >
                        1 · 800 · 123 · 4567
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col xl={4} className="mb-xl-0 mb-md-5 mb-2">
              <div className="flex-xl-column d-md-flex justify-content-between align-items-xl-end align-items-center">
                <div>
                  <h2 className="text-white ff-maison_neue_light fw-light fs_xlg lh_normal mb-xl-4 pb-3">
                    Get weekly data — and insights.
                  </h2>
                  <div className="analyze_email d-flex align-items-center justify-content-center w-100">
                    <input
                      className="start_input w-100 py-3 bg-transparent text-capitalize lh_134"
                      type="text"
                      placeholder="Enter Your Email"
                    />
                    <div className="cursor_pointer">
                      <button className="analyze_btn text-capitalize px-4 py-3 bg-transparent ff_maison_neue_semibold fw-semibold text_lightgreen fs_5sm text-nowrap">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-md-end mt_200 pt-md-0 pt-4">
                  <a
                    href=""
                    className=" text-white ff_maison_neue_light fw-normal fs_3sm lh_150 text-capitalize"
                  >
                    All Rights Reserved
                  </a>
                  <a
                    href=""
                    className=" text-white ff_maison_neue_light fw-normal fs_3sm lh_150 text-capitalize ms-3 ps-3"
                  >
                    Privacy Policy
                  </a>
                  <div className="d-flex gap-xl-5 gap-4 mt-xl-4 mt-2 pt-2">
                    <a
                      href="https://facebook.com"
                      target="_blank "
                      className="icon_zoom"
                    >
                      <Fb_icon />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      className="icon_zoom"
                    >
                      <Insta_icon />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      className="icon_zoom"
                    >
                      <Twitter_icon />
                    </a>
                    <a
                      href="http://ca.linkedin.com"
                      target="_blank"
                      className="icon_zoom"
                    >
                      <Linkedin_icon />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      className="icon_zoom"
                    >
                      <Utube_icon />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
