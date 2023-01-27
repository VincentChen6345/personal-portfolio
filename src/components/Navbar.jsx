import { ToggleButton } from "./ToggleButton.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export const Navbar = () => {
  const handleClickScroll = (section) => {
    const headerEl = document.getElementById("header");
    const aboutMeEl = document.getElementById("about-me-section");
    const myProjectsEl = document.getElementById("my-projects");
    const contactMeEl = document.getElementById("contact-me");
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
  const displayMenu = () => {};
  return (
    <nav className="nav-container">
      <div className="brand-container">
        <li onClick={() => handleClickScroll(1)}>
          <Link to="/" className="signature link">
            V.Chen
          </Link>
        </li>
      </div>
      <div className="nav-bar">
        <ul className=" drop-down">
          <Link to="/my-story" className="link">
            <li className="li btn btn-slide">My Story</li>
          </Link>

          <Link to="/">
            <li
              className="li btn btn-slide"
              onClick={() => handleClickScroll(2)}
            >
              About Me
            </li>
          </Link>
          <Link to="/">
            <li
              className="li btn btn-slide"
              onClick={() => handleClickScroll(3)}
            >
              Projects
            </li>
          </Link>

          <a href="https://www.youtube.com/channel/UCCGDEl1BE_1lJ1JR6kk653w">
            <li className="li btn btn-slide">Youtube</li>
          </a>
        </ul>{" "}
      </div>

      <ToggleButton />

      <a href="javascript:void(0)" className="hamburger" onClick={displayMenu}>
        <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
      </a>
    </nav>
  );
};
