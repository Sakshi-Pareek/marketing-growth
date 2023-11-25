import React from "react";
import { Container } from "react-bootstrap";
import { LetArrow } from "./Icons";

const ReadyToHit = () => {
  return (
    <>
      <div className="ready_bg py-lg-5 py-3">
          <Container className="d-md-flex justify-content-center align-items-center gap-5 my-4 text-md-start text-center">
            <h2 className="ff_maison_neue_light fw-light fs_lg text-white mb-md-0 mb-4 lh_normal"data-aos="zoom-in-right"data-aos-easing="linear"
            data-aos-duration="1000">
              Ready to hit your goals?
            </h2>
            <button className="text-black fs_5sm lh_normal ff_maison_neue_medium fw-medium book_btn" data-aos="zoom-in-left" data-aos-easing="linear"
            data-aos-duration="1000">
              Book a Strategy Call{" "}
              <span className="ms-2">
                <LetArrow />
              </span>
            </button>
          </Container>
      </div>
    </>
  );
};

export default ReadyToHit;
