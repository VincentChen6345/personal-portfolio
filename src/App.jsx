import "./App.css";
import { ToggleButton } from "./components/ToggleButton.jsx";
import { Link, Routes, Route } from "react-router-dom";
import { MyStory } from "./components/MyStory";
import { MainPage } from "./components/MainPage";
import portraitSmall from "./img/portrait-small.png";
import youtube from "./img/youtube.svg";
import github from "./img/github.svg";
import linkedIn from "./img/linkedin.svg";

function App() {
  const handleClickScroll = (section) => {
    const headerEl = document.getElementById("header");
    const aboutMeEl = document.getElementById("about-me-section");
    const myProjectsEl = document.getElementById("my-projects");
    const contactMeEl = document.getElementById("contact-me");
    console.log(aboutMeEl);
    if (section === 1) {
      headerEl.scrollIntoView();
    }
    if (section === 2) {
      aboutMeEl.scrollIntoView();
    }
    if (section === 3) {
      myProjectsEl.scrollIntoView();
    }
    if (section === 4) {
      contactMeEl.scrollIntoView();
    }
  };

  return (
    <body className="app-container">
      <nav className="nav-container">
        <ul className="nav-bar">
          <li onClick={() => handleClickScroll(1)}>
            <Link to="/" className="signature link">
              V.Chen
            </Link>
          </li>
          <span className="right-nav">
            <li>
              <Link to="/my-story" className="link">
                My Story
              </Link>
            </li>
            <li onClick={() => handleClickScroll(2)}>About Me</li>
            <li onClick={() => handleClickScroll(3)}>Projects</li>

            <li className="toggle-btn">
              <ToggleButton />
            </li>
          </span>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/my-story" element={<MyStory />} />
      </Routes>
      <div className="divider"></div>

      <footer className="footer">
        <div className="footer-left">
          <h3>Contact</h3>
          <p>Feel free to contact me via email</p>
          <span>vincent.chen6345@hotmail.com.</span>
        </div>
        <div className="footer-center">
          <img
            className="footer-image"
            src={portraitSmall}
            alt="small portrait "
          />
        </div>
        <div className="footer-right">
          <span className="signature link">V.Chen</span>
          <span className="icon-span">
            <a href="https://www.youtube.com/channel/UCCGDEl1BE_1lJ1JR6kk653w">
              <img
                src={youtube}
                alt="youtube icon"
                className="youtube social-icon"
              />
            </a>
            <a href="https://github.com/VincentChen6345">
              <img
                src={github}
                alt="github icon"
                className="github social-icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/vincentchen02/">
              <img
                src={linkedIn}
                alt="linkedIn icon"
                className="linkedIn social-icon"
              />
            </a>
          </span>
        </div>
      </footer>
    </body>
  );
}

export default App;
