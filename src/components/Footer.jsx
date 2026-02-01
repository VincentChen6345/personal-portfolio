import portraitSmall from "../img/portrait-small.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <>
      <div className="divider"></div>
      <footer className="footer">
        <div className="footer-left">
          <h3>Have a great day!</h3>
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
            <a href="https://github.com/VincentChen6345">
              <FontAwesomeIcon
                icon={faGithub}
                alt="github icon"
                className="github social-icon"
              />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};
