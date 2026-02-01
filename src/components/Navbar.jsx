import { ToggleButton } from "./ToggleButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { routerData } from "../data/routerLinkData.jsx";

export const Navbar = () => {
  useEffect(() => {
    //useEffect = when component renders do X, when it disappears, undo X
    //1. define handler
    const handleClick = (e) => {
      const dropDownMenu = document.querySelector(".drop-down");
      const hamburgerIcon = document.querySelector(".hamburger");
      //if user clicks outside the hamburger icon and dropdown menu while the dropdown menu is open, switch off the dropdown menu
      if (
        dropDownMenu.style.display === "flex" &&
        !dropDownMenu.contains(e.target) &&
        !hamburgerIcon.contains(e.target) &&
        window.innerWidth <= 820
      ) {
        dropDownMenu.style.display = "none";
        console.log("none triggered");
      }
    };
    //2. attach listener
    document.addEventListener("click", handleClick);
    //3. cleanup
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

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

  const displayMenu = () => {
    const dropDownMenu = document.querySelector(".drop-down");
    dropDownMenu.style.display =
      dropDownMenu.style.display === "flex" ? "none" : "flex";
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
          {routerData.map((item) => (
            <Link to={item.path}>
              <li
                className="li btn btn-slide"
                onClick={() => handleClickScroll(item.onClick)}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <ToggleButton />
      <button className="hamburger" onClick={displayMenu}>
        <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
      </button>
    </nav>
  );
};
