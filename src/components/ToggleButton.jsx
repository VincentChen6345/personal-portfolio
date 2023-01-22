import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "./ToggleButton.css";
//modeSwitch
const modeSwitch = (mode) => {
  //nav background color
  //toggle sun/moon color
  //undraw image color
};

//switch theme dynamically
const switchTheme = (e) => {
  console.log("e.target.checked", e.target.checked);

  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    //modeSwitch('dark')
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    //modeSwitch('light')
  }
};
// Event Listener
export const ToggleButton = () => {
  return (
    <div>
      {/* outer rectangle box */}
      <label className="switch">
        <input type="checkbox" onChange={switchTheme} />{" "}
        {/*invisible checkbox */}
        <span className="slider"></span> {/*sliding square */}
        <FontAwesomeIcon icon={faSun} className="sun icon" />
        <FontAwesomeIcon icon={faMoon} className="moon icon" />
      </label>
    </div>
  );
};
