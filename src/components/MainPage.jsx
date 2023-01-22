import portraitShort from "../img/portrait-short.png";
import html5 from "../img/html5.svg";
import css from "../img/css3.svg";
import javascript from "../img/javascript.svg";
import react from "../img/react.svg";

import { Card } from "./Card";
import { Link } from "react-router-dom";
import "../App.css";
import "./MainPage.css";
import { ProjectSlider } from "./ProjectSlider";

export const MainPage = () => {
  return (
    <>
      <header id="header">
        <div className="introduction">
          <div className="introduction-text">
            <h1 className="heading-primary">Nice to meet you!</h1>
            <h2 className="heading-primary">
              I'm <em>Vincent Chen</em>.
            </h2>
            <p className="summary">
              I'm an aspiring front-end developer passionate about creating
              great user experiences for everyone on the Internet.
            </p>
            <Link className="btn about-me link btn-slide" to="/my-story">
              My Story
            </Link>
            <div className="language-icons">
              <span className="icon-span">
                <img src={html5} alt="html5 logo" className="lang-svg" />
                <p className="lang-name">HTML</p>
              </span>
              <span className="icon-span">
                <img src={css} alt="css logo" className="lang-svg" />
                <p className="lang-name">CSS</p>
              </span>
              <span className="icon-span">
                <img
                  src={javascript}
                  alt="javascript logo"
                  className="lang-svg"
                />
                <p className="lang-name">JavaScript</p>
              </span>

              <span className="icon-span">
                <img src={react} alt="react logo" className="lang-svg" />
                <p className="lang-name">React.js</p>
              </span>
            </div>
          </div>
          <img src={portraitShort} alt="portrait " className="portrait-photo" />
        </div>
      </header>
      <section className="about-me-section" id="about-me-section">
        <div className="divider"></div>
        <h1 className="section-heading">About Me</h1>
        <div className="card-section">
          <Card number="1" />
          <Card number="2" />
          <Card number="3" />
        </div>
      </section>
      <section id="my-projects" className="my-projects">
        <div className="divider"></div>
        <h1 className="section-heading">My Projects</h1>
        <ProjectSlider />
      </section>
    </>
  );
};
