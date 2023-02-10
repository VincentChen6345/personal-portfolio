import "./ProjectSlider.css";
import React, { useRef, useEffect, useCallback } from "react";
import ProjectText from "./ProjectText";
import { useProject } from "./ProjectContext";

export const ProjectSlider = () => {
  const projects = useProject();
  let curSlide = 0;
  const slidesRef = useRef(); //useRef is sued to access a DOM element
  const goToSlide = useCallback((slideNumber) => {
    //useCallback returns a memoised callback function- memoisation is caching a value so that it does not need to be recalculated
    const slides = slidesRef.current.querySelectorAll(".slide");
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slideNumber)}%)`)
      /*when slideNumber=0, 0%,100%,200%,300%,400% 
      when slideNumber=1, -100%,0%,100%,200%,300%
      when slideNumber=2, -200%,-100%,0%,100%,200%
      the slide at 0% gets displayed

      */
    );
  }, []);

  const nextSlide = () => {
    curSlide++;

    if (curSlide > 4) {
      curSlide = 0;
    }

    goToSlide(curSlide);
  };
  const prevSlide = () => {
    curSlide--;

    if (curSlide < 0) {
      curSlide = 4;
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
          <img
            src={projects.images[0]}
            alt="bruce lee"
            className="project-image"
          />
          <ProjectText slide={0} />
        </div>
        <div className="slide slide--2">
          <img
            src={projects.images[1]}
            alt="price toggle card"
            className="project-image"
          />
          <ProjectText slide={1} />
        </div>
        <div className="slide slide--3">
          <img
            src={projects.images[2]}
            alt="credit card validation"
            className="project-image"
          />
          <ProjectText slide={2} />
        </div>
        <div className="slide slide--4">
          <img
            src={projects.images[3]}
            alt="advice api generator"
            className="project-image"
          />
          <ProjectText slide={3} />
        </div>
        <div className="slide slide--5">
          <img
            src={projects.images[4]}
            alt="portfolio website"
            className="project-image"
          />
          <ProjectText slide={4} />
        </div>
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
