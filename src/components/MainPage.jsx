import portraitShort from "../img/portrait-short.png";
import { techStack } from "../data/techStack";
import { Card } from "./Card";
import { cards } from "../data/cardContent";
import { Link } from "react-router-dom";
import "../App.css";
import "./MainPage.css";
import { ProjectSlider } from "./ProjectSlider";
import { ProjectList } from "./ProjectList";
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
              I'm a tech career changer passionate about learning how to use
              software and IT to solve real problems for people.
            </p>
            <Link className="btn about-me link btn-slide" to="/my-story">
              My Story
            </Link>
            <div className="language-icons">
              {techStack.map((item) => (
                <span className="icon-span" key={item.alt}>
                  <img src={item.img} alt={item.alt} className="lang-svg" />
                  <p className="lang-name">{item.name}</p>
                </span>
              ))}
            </div>
          </div>
          <img src={portraitShort} alt="portrait " className="portrait-photo" />
        </div>
      </header>
      <section className="about-me-section" id="about-me-section">
        <div className="divider top"></div>
        <h1 className="section-heading">About Me</h1>
        <div className="card-section">
          {cards.map((item) => (
            <Card cardData={item} />
          ))}
        </div>
      </section>
      <section id="my-projects" className="my-projects">
        <div className="divider"></div>
        <h1 className="section-heading">My Projects</h1>
        <ProjectSlider />
        <ProjectList />
      </section>
    </>
  );
};
