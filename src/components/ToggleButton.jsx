import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "./ToggleButton.css";
import { useEffect } from "react";

//switch theme dynamically
const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    console.log("local storage set to dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    console.log("local storage set to light");
  }
};

////////////////
// Event Listener
export const ToggleButton = () => {
  useEffect(() => {
    //useEffect fetches items on first render (at the end of each render)
    const currentTheme = localStorage.getItem("theme");
    const toggleSwitch = document.querySelector('input[type="checkbox"]');

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }
  });
  return (
    <div>
      {/* outer rectangle box */}
      <label className="switch">
        <input type="checkbox" onChange={switchTheme} />
        {/*invisible checkbox */}
        <span className="slider"></span> {/*sliding square */}
        <FontAwesomeIcon icon={faSun} className="sun icon" />
        <FontAwesomeIcon icon={faMoon} className="moon icon" />
      </label>
    </div>
  );
};
