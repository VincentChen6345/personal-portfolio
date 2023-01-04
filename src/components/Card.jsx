import reactIcon from "../img/undraw_react_dark.svg";
import interestIcon from "../img/undraw_interests_dark.svg";
import cityIcon from "../img/undraw_city_dark.svg";

import "./Card.css";
export const Card = (props) => {
  const textBlock1 = ` What excites me the most about coding front-end is seeing my website take shape before my eyes. I've been teaching myself HTML,CSS,Javscript and REACT.js from Udemy courses and Youtube tutorials.

My general learning strategy is to learn a new concept from an online course, take that concept and immediately build something interesting that incorporates it. Then I'll go learn the next concept.
    
Have a look at my projects in the section below!`;

  const textBlock2 = `Went to uni to learn how to build buildings, came out wanting to build websites ... oops.
  
Coming from a background in construction as a site-engineer, I've noticed that there are quite a few transferable skills:

1. Attention-to-detail 
2. Problem solving
3. Communication
4. Organisation

to name a few. I delve into these points further in the 'my story' page.
`;
  const textBlock3 = `Life isn't all about coding. I think it's important to have interests outside of work to give yourself a break and relax.
  
Besides working and learning to code, my main hobbies include going to the gym and learning Wing Chun Kung Fu.

I'm also currently documenting my journey of becoming a self-taught web developer by uploading videos to my coding channel - Coder Vince! Check it out when you have a minute!`;
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
