import "./App.css";
import portraitShort from "./img/portrait-short.png";
import html5 from "./img/html5.svg";
import css from "./img/css3.svg";
import javascript from "./img/javascript.svg";

import { ToggleButton } from "./components/ToggleButton.jsx";

function App() {
  return (
    <body className="app-container">
      <script
        src="https://kit.fontawesome.com/bd278545d3.js"
        crossorigin="anonymous"
      ></script>
      <header id="header">
        <nav className="nav-container">
          <ul className="nav-bar">
            <li>V.CHEN</li>
            <span className="right-nav">
              <li>About Me</li>
              <li>Projects</li>
              <li>Contact</li>

              <li className="toggle-btn">
                <ToggleButton />
              </li>
            </span>
          </ul>
        </nav>
        <div className="introduction">
          <div className="introduction-text">
            <h1 className="heading-primary">Nice to meet you!</h1>
            <h2 className="heading-primary">I'm Vincent Chen.</h2>
            <p className="summary">
              I'm an aspiring front-end developer passionate about creating
              great user experiences for everyone on the Internet.
            </p>
            <a href="#" className="btn about-me">
              About Me
            </a>
            <div className="language-icons">
              <img src={html5} alt="html5 logo" className="lang-svg" />
              <img src={css} alt="css logo" className="lang-svg" />
              <img
                src={javascript}
                alt="javascript logo"
                className="lang-svg"
              />
            </div>
          </div>
          <img src={portraitShort} alt="portrait " className="portrait-photo" />
        </div>
      </header>
      <section className="skill-section">
        <h1>my skills</h1>
      </section>
      <section id="my-projects" className="my-projects">
        <h1>My Projects</h1>
      </section>
      <section id="contact-me" className="contact-me">
        <h1>Contact me</h1>
      </section>
      <footer className="footer"></footer>
    </body>
  );
}

export default App;
