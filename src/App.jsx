import "./App.css";
import portraitShort from "./img/portrait-short.png";
import html5 from "./img/html5.svg";
import css from "./img/css3.svg";
import javascript from "./img/javascript.svg";
import { Card } from "./components/Card";
import { ToggleButton } from "./components/ToggleButton.jsx";

function App() {
  const handleClickScroll = (section) => {
    const aboutMeEl = document.getElementById("about-me-section");
    const myProjectsEl = document.getElementById("my-projects");
    const contactMeEl = document.getElementById("contact-me");
    console.log(aboutMeEl);
    if (section === 1) {
      aboutMeEl.scrollIntoView();
    }
    if (section === 2) {
      myProjectsEl.scrollIntoView();
    }
    if (section === 3) {
      contactMeEl.scrollIntoView();
    }
  };

  return (
    <body className="app-container">
      <script
        src="https://kit.fontawesome.com/bd278545d3.js"
        crossOrigin="anonymous"
      ></script>
      <header id="header">
        <nav className="nav-container">
          <ul className="nav-bar">
            <li className="signature">V.Chen</li>
            <span className="right-nav">
              <li onClick={() => handleClickScroll(1)}>About Me</li>
              <li onClick={() => handleClickScroll(2)}>Projects</li>
              <li onClick={() => handleClickScroll(3)}>Contact</li>

              <li className="toggle-btn">
                <ToggleButton />
              </li>
            </span>
          </ul>
        </nav>
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
            <a href="#" className="btn about-me">
              My Story
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
      </section>
      <section id="contact-me" className="contact-me">
        <div className="divider"></div>
        <h1 className="section-heading">Contact me</h1>
      </section>
      <footer className="footer"></footer>
    </body>
  );
}

export default App;
