import "./ProjectSlider.css";
import project1 from "../img/project-1.png";
import project2 from "../img/project-2.png";
import project3 from "../img/project-3.png";
import project4 from "../img/project-4.png";
import React, { useRef, useEffect, useCallback } from "react";
import ProjectText from "./ProjectText";

export const ProjectSlider = () => {
  let curSlide = 0;
  const slidesRef = useRef();
  const goToSlide = useCallback((slideNumber) => {
    const slides = slidesRef.current.querySelectorAll(".slide");

    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slideNumber)}%)`)
    );
  }, []);

  const nextSlide = () => {
    console.log("nextSlide fired");

    curSlide++;

    if (curSlide > 3) {
      curSlide = 0;
    }

    goToSlide(curSlide);
  };
  const prevSlide = () => {
    console.log("prevSlide fired");

    curSlide--;

    if (curSlide < 0) {
      curSlide = 3;
    }

    goToSlide(curSlide);
  };
  useEffect(() => {
    goToSlide(curSlide);
  }, [goToSlide, curSlide]);
  return (
    <div className="slider-container">
      <div className="js-slider" ref={slidesRef}>
        <div className="slide slide--1">
          <img src={project1} alt="" className="project-image" />
          <ProjectText slide={0} />
        </div>
        <div className="slide slide--2">
          <img src={project2} alt="" className="project-image" />
          <ProjectText slide={1} />
        </div>
        <div className="slide slide--3">
          <img src={project3} alt="" className="project-image" />
          <ProjectText slide={2} />
        </div>
        <div className="slide slide--4">
          <img src={project4} alt="" className="project-image" />
          <ProjectText slide={3} />
        </div>{" "}
        <button className="slider__btn slider__btn--left" onClick={prevSlide}>
          &larr;
        </button>
        <button className="slider__btn slider__btn--right" onClick={nextSlide}>
          &rarr;
        </button>
      </div>
    </div>
  );
};
