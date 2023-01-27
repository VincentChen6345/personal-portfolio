import "./App.css";

import { Routes, Route } from "react-router-dom";
import { MyStory } from "./components/MyStory";
import { MainPage } from "./components/MainPage";
import portraitSmall from "./img/portrait-small.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <body className="app-container">
      <Navbar />
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
              <FontAwesomeIcon
                icon={faYoutube}
                alt="youtube icon"
                className="youtube social-icon"
              ></FontAwesomeIcon>
            </a>
            <a href="https://github.com/VincentChen6345">
              <FontAwesomeIcon
                icon={faGithub}
                alt="github icon"
                className="github social-icon"
              ></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/vincentchen02/">
              <FontAwesomeIcon
                icon={faLinkedin}
                alt="linkedIn icon"
                className="linkedIn social-icon"
              ></FontAwesomeIcon>
            </a>
          </span>
        </div>
      </footer>
    </body>
  );
}

export default App;
