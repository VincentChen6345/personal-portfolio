import reactIcon from "../img/undraw_react_light.svg";
import interestIcon from "../img/undraw_interests_light.svg";
import cityIcon from "../img/undraw_city_light.svg";

import "./Card.css";
export const Card = (props) => {
  const textBlock1 = (
    <p>
      Nothing can match that exhilirating feeling of jumping out your chair
      after finalling solving a tough programming problem.
      <br />
      <br />
      I've been teaching myself HTML,CSS,Javscript and REACT.js from Udemy
      courses and Youtube tutorials. I've also learned the basics of C and
      Python from my uni courses.
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
      I'm sure I can bring these skills into any tech company to support your
      team!
    </p>
  );
  const textBlock3 = (
    <p>
      Life isn't all about coding. I think it's important to have interests
      outside of work to give yourself a break and relax.
      <br />
      <br />
      Besides working and learning to code, my main hobbies include going to the
      gym, hiking around Sydney and learning Korean!
      <br />
      <br />
      I'm also currently documenting my career change into tech through my
      Youtube channel -
      <a href="https://www.youtube.com/channel/UCCGDEl1BE_1lJ1JR6kk653w">
        Cyber Vince
      </a>
      ! Check it out!
    </p>
  );
  const content = {
    "title-1": "Programmer",
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
    <div className={`card-container num${props.number}`}>
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
