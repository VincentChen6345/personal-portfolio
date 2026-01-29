import "./ProjectSlider.css";
import React, { useRef, useEffect, useCallback, useState } from "react";
import ProjectText from "./ProjectText";
import { useProject } from "./ProjectContext";

export const ProjectSlider = () => {
  const projects = useProject();
  const [curSlide, setCurSlide] = useState(0);
  const slidesRef = useRef(); //useRef is used to access a DOM element
  const goToSlide = useCallback((slideNumber) => {
    //useCallback returns a memoised callback function- memoisation is caching a value so that it does not need to be recalculated
    const slides = slidesRef.current.querySelectorAll(".slide");
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slideNumber)}%)`),
      /*when slideNumber=0, 0%,100%,200%,300%,400% 
      when slideNumber=1, -100%,0%,100%,200%,300%
      when slideNumber=2, -200%,-100%,0%,100%,200%
      the slide at 0% gets displayed
      */
    );
  }, []);

  const nextSlide = () => {
    setCurSlide((curr) => (curr === projects.length - 1 ? 0 : curr + 1));
    goToSlide(curSlide);
  };
  const prevSlide = () => {
    setCurSlide((curr) => (curr === 0 ? projects.length - 1 : curr - 1));
    goToSlide(curSlide);
  };
  useEffect(() => {
    goToSlide(curSlide);
  }, [goToSlide, curSlide]);
  return (
    <div className="slider-container">
      <div className="js-slider" ref={slidesRef}>
        {projects.map((el, index) => (
          <div className={`slide slide--${index + 1}`} key={el.title}>
            <img src={el.images} alt={el.title} className="project-image" />
            <ProjectText project={el} />
          </div>
        ))}
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
