import { ToggleButton } from "./ToggleButton.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export const Navbar = () => {
  const handleClickScroll = (section) => {
    const headerEl = document.getElementById("header");
    const aboutMeEl = document.getElementById("about-me-section");
    const myProjectsEl = document.getElementById("my-projects");
    if (section === 1) {
      headerEl.scrollIntoView();
    }
    if (section === 2) {
      aboutMeEl.scrollIntoView();
    }
    if (section === 3) {
      myProjectsEl.scrollIntoView();
    }
  };
  document.addEventListener("click", function (e) {
    const dropDownMenu = document.querySelector(".drop-down");
    const hamburgerIcon = document.querySelector(".hamburger");

    if (
      dropDownMenu.style.display === "flex" &&
      !dropDownMenu.contains(e.target) &&
      !hamburgerIcon.contains(e.target) &&
      window.innerWidth <= 820
    ) {
      dropDownMenu.style.display = "none";
    }
  });
  window.addEventListener("resize", () => {
    const dropDownMenu = document.querySelector(".drop-down");

    if (window.innerWidth > 820) {
      console.log("add display");

      dropDownMenu.style.display = "flex";
    } else {
      console.log("remove display");

      dropDownMenu.style.removeProperty("display");
    }
  });

  const displayMenu = () => {
    console.log("clicked");
    const dropDownMenu = document.querySelector(".drop-down");
    if (dropDownMenu.style.display === "flex") {
      dropDownMenu.style.display = "none";
    } else {
      dropDownMenu.style.display = "flex";
    }
  };

  return (
    <nav className="nav-container">
      <div className="brand-container">
        <span onClick={() => handleClickScroll(1)}>
          <Link to="/" className="signature link">
            V.Chen
          </Link>
        </span>
      </div>
      <div className="nav-bar">
        <ul className=" drop-down" id="drop-down">
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

      <button className="hamburger" onClick={displayMenu}>
        <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
      </button>
    </nav>
  );
};
