import "./ProjectSlider.css";
import project1 from "../img/project-1.png";
import project2 from "../img/project-2.png";
import project3 from "../img/project-3.png";
import project4 from "../img/project-4.png";
import React, { useRef, useEffect, useCallback } from "react";

export const ProjectSlider = () => {
  let curSlide = 0;
  const slidesRef = useRef();
  const goToSlide = useCallback((slideNumber) => {
    const slides = slidesRef.current.querySelectorAll(".slide");

    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slideNumber)}%)`)
    );
  }, []);

  useEffect(() => {
    goToSlide(0);
  }, [goToSlide]);
  const nextSlide = () => {
    curSlide++;
    if (curSlide > 3) curSlide = 0;
    goToSlide(curSlide);
  };
  const prevSlide = () => {
    curSlide--;
    if (curSlide < 0) curSlide = 3;
    goToSlide(curSlide);
  };
  return (
    <div className="slider-container">
      <div className="js-slider" ref={slidesRef}>
        <div className="slide slide--1">
          <img src={project1} alt="" className="project-image" />
        </div>
        <div className="slide slide--2">
          <img src={project2} alt="" className="project-image" />
        </div>
        <div className="slide slide--3">
          <img src={project3} alt="" className="project-image" />
        </div>
        <div className="slide slide--4">
          <img src={project4} alt="" className="project-image" />
        </div>{" "}
        <button className="slider__btn slider__btn--left" onClick={prevSlide}>
          &larr;
        </button>
        <button className="slider__btn slider__btn--right" onClick={nextSlide}>
          &rarr;
        </button>
        <div className="project-overview hidden">
          <h3 className="project-title">Bruce Lee Tribute Page</h3>
          <ul className="language-container">
            <li className="language">HTML</li>
            <li className="language">CSS</li>
          </ul>
          <p className="paragraph-text">
            Dedicated to my late idol Bruce Lee, I created this tribute page to
            practice pure HTML and CSS.
          </p>
          <span className="btn-container">
            <a
              href="https://tribute-to-bruce-lee.netlify.app/"
              className="btn btn-visit"
            >
              Visit
            </a>
            <a
              href="https://github.com/VincentChen6345/tribute-to-bruce-lee"
              className="btn btn-code"
            >
              Code
            </a>
          </span>
        </div>
      </div>
      <div className="dots"></div>
    </div>
  );
};
