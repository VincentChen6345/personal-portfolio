import reactIcon from "../img/undraw_react_light.svg";
import interestIcon from "../img/undraw_interests_light.svg";
import cityIcon from "../img/undraw_city_light.svg";

import "./Card.css";
export const Card = (props) => {
  const textBlock1 = (
    <p>
      What excites me the most about coding front-end is seeing my website take
      shape before my eyes.
      <br />
      <br />
      I've been teaching myself HTML,CSS,Javscript and REACT.js from Udemy
      courses and Youtube tutorials. My general learning strategy is to learn a
      new concept from an online course, take that concept and immediately build
      something interesting that incorporates it. Then I'll go learn the next
      concept.
      <br />
      <br />
      Have a look at my projects in the section below!
    </p>
  );

  const textBlock2 = (
    <p>
      Went to uni to learn how to build buildings, came out wanting to build
      websites ... oops.
      <br />
      <br />
      Coming from a background in construction as a site-engineer, I have quite
      a few transferable skills:
      <br />
      <br />
      <ul className="card-list">
        <li> 1. Attention-to-detail</li>
        <li> 2. Problem solving</li>
        <li> 3. Communication</li>
        <li> 4. Organisation</li>
      </ul>
      <br />
      I'm sure I can bring these skills into my web development career to
      support your team!
    </p>
  );
  const textBlock3 = (
    <p>
      Life isn't all about coding. I think it's important to have interests
      outside of work to give yourself a break and relax.
      <br />
      <br />
      Besides working and learning to code, my main hobbies include going to the
      gym and learning Wing Chun Kung Fu.
      <br />
      <br />
      I'm also currently documenting my journey of becoming a self-taught web
      developer by uploading videos to my coding channel -
      <a href="https://www.youtube.com/channel/UCCGDEl1BE_1lJ1JR6kk653w">
        Coder Vince
      </a>
      ! Check it out!
    </p>
  );
  const content = {
    "title-1": "Web Developer",
    "title-2": "Problem Solver",
    "title-3": "Interests",
    "svg-1": reactIcon,
    "svg-2": cityIcon,
    "svg-3": interestIcon,
    "textBlock-1": textBlock1,

    "textBlock-2": textBlock2,
    "textBlock-3": textBlock3,
  };
  return (
    <div className="card-container">
      <h2 className="card-heading">{content[`title-${props.number}`]}</h2>
      <img
        id={`image${props.number}`}
        src={content[`svg-${props.number}`]}
        alt="react icon"
        className="card-icon"
      />
      <div className="description hidden">
        {content[`textBlock-${props.number}`]}
      </div>
    </div>
  );
};
