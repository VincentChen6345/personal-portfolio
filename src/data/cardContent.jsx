import reactIcon from "../img/undraw_react_light.svg";
import interestIcon from "../img/undraw_interests_light.svg";
import cityIcon from "../img/undraw_city_light.svg";

export const cardContent = [
  {
    number: 0,
    title: "Programmer",
    id: "image1",
    alt: "React icon",
    icon: reactIcon,
    textBlock: (
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
    ),
  },
  {
    number: 1,
    title: "Problem Solver",
    id: "image2",
    alt: "city icon",
    icon: cityIcon,
    textBlock: (
      <p>
        Went to uni to learn how to build buildings, came out wanting to build
        websites ... oops.
        <br />
        <br />
        Coming from a background in construction as a site-engineer, I have
        quite a few transferable skills:
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
    ),
  },
  {
    number: 2,
    title: "Interests",
    id: "image3",
    alt: "music icon",
    icon: interestIcon,
    textBlock: (
      <p>
        Life isn't all about coding. I think it's important to have interests
        outside of work to give yourself a break and relax.
        <br />
        <br />
        Besides working and learning to code, my main hobbies include going to
        the gym, hiking around Sydney and learning Korean!
        <br />
        <br />
      </p>
    ),
  },
];
