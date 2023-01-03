import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "./ToggleButton.css";

export const ToggleButton = () => {
  return (
    <div>
      {/* outer rectangle box */}
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
        <FontAwesomeIcon icon={faSun} className="sun icon" />
        <FontAwesomeIcon icon={faMoon} className="moon icon" />
      </label>
    </div>
  );
};
