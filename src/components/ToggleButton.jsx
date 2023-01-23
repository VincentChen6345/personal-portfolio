import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "./ToggleButton.css";
import React, { useState } from "react";
const toggleSwitch = document.querySelector('input[type="checkbox"]');
//document.querySelector('input[attribute='='attribute-value'])
//check local storage for theme on load
const currentTheme = localStorage.getItem("theme");
console.log("the current theme is ", currentTheme);

//switch theme dynamically
const switchTheme = (e) => {
  console.log("e.target.checked", e.target.checked);

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
///////////////////
//figure out how to make the togglebutton start on 'checked' when starting in dark mode
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
  }
}
////////////////
// Event Listener
export const ToggleButton = () => {
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
