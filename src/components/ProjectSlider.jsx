import "./ProjectSlider.css";
import project1 from "../img/project-1.png";
import project2 from "../img/project-2.png";
import project3 from "../img/project-3.png";
import project4 from "../img/project-4.png";

export const ProjectSlider = () => {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  let curSlide = 0;
  const maxSlide = slides.length;
  const goToSlide = (slideNumber) => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slideNumber)}%)`)
    );
  };
  goToSlide(0);
  const nextSlide = (side) => {
    if (side === "left") curSlide--;
    if (side === "right") curSlide++;
    if (curSlide < 0) curSlide = 3;
    if (curSlide > maxSlide - 1) curSlide = 0;
    goToSlide(curSlide);
  };
  return (
    <div className="slider-container">
      <div className="js-slider">
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
        <button
          className="slider__btn slider__btn--left"
          onClick={() => nextSlide("left")}
        >
          &larr;
        </button>
        <button
          className="slider__btn slider__btn--right"
          onClick={() => nextSlide("right")}
        >
          &rarr;
        </button>
      </div>

      <div className="dots"></div>
    </div>
  );
};
