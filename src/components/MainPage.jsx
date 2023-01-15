import portraitShort from "../img/portrait-short.png";
import html5 from "../img/html5.svg";
import css from "../img/css3.svg";
import javascript from "../img/javascript.svg";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import "../App.css";
import "./MainPage.css";
import { ProjectSlider } from "./ProjectSlider";

// const sendEmail = () => {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "vincent.chen6345@hotmail.com",
//     Password: "Treatyourselflikeafriend!",
//     To: "vincent.chen6345@hotmail.com",
//     From: document.getElementById("email").value,
//     Subject: "New Contact Enquiry",
//     Body: "this is the body ",
//   }).then((message) => alert(message));
// };
export const MainPage = () => {
  return (
    <>
      <header id="header">
        <div className="introduction">
          <div className="introduction-text">
            <h1 className="heading-primary">Nice to meet you!</h1>
            <h2 className="heading-primary">
              I'm <em>Vincent Chen</em>.
            </h2>
            <p className="summary">
              I'm an aspiring front-end developer passionate about creating
              great user experiences for everyone on the Internet.
            </p>
            <Link className="btn about-me link" to="/my-story">
              My Story
            </Link>
            <div className="language-icons">
              <img src={html5} alt="html5 logo" className="lang-svg" />
              <img src={css} alt="css logo" className="lang-svg" />
              <img
                src={javascript}
                alt="javascript logo"
                className="lang-svg"
              />
            </div>
          </div>
          <img src={portraitShort} alt="portrait " className="portrait-photo" />
        </div>
      </header>
      <section className="about-me-section" id="about-me-section">
        <div className="divider"></div>
        <h1 className="section-heading">About Me</h1>
        <div className="card-section">
          <Card number="1" />
          <Card number="2" />
          <Card number="3" />
        </div>
      </section>
      <section id="my-projects" className="my-projects">
        <div className="divider"></div>
        <h1 className="section-heading">My Projects</h1>
        <ProjectSlider />
      </section>
      <section id="contact-me" className="contact-me">
        <div className="divider"></div>
        <div className="form-container">
          <form className="contact-form">
            <h1 className="section-heading contact-me">Contact me</h1>
            <p className="contact-text">I would love to hear from you!</p>
            <div className="input-span">
              <input type="text" id="name" placeholder=" Name" required />
              <input type="email" id="email" placeholder="Email" required />
            </div>
            <textarea placeholder="Message" id="message" rows="4"></textarea>
            <button type="submit" className="send btn">
              Send
            </button>
          </form>
        </div>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </section>
    </>
  );
};
