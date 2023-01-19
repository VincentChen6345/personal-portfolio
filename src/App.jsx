import "./App.css";
import { ToggleButton } from "./components/ToggleButton.jsx";
import { Link, Routes, Route } from "react-router-dom";
import { MyStory } from "./components/MyStory";
import { MainPage } from "./components/MainPage";

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
    </body>
  );
}

export default App;
