import portraitShort from "../img/portrait-short.png";
import { techStack } from "../data/techStack";
import { Link } from "react-router-dom";

function SkillIcon({ element }) {
  return (
    <span className="icon-span" key={element.alt}>
      <img src={element.img} alt={element.alt} className="lang-svg" />
      <p className="lang-name">{element.name}</p>
    </span>
  );
}

export function SelfIntroduction() {
  return (
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
              <SkillIcon element={item} />
            ))}
          </div>
        </div>
        <img src={portraitShort} alt="portrait " className="portrait-photo" />
      </div>
    </header>
  );
}
