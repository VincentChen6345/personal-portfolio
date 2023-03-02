import React, { useContext } from "react";
import Project1 from "../img/project-1.png";
import Project2 from "../img/project-2.png";
import Project3 from "../img/project-3.png";
import Project4 from "../img/project-4.png";
import Project5 from "../img/project-5.png";
const ProjectContext = React.createContext();

export function useProject() {
  return useContext(ProjectContext);
}
export const ProjectProvider = ({ children }) => {
  const content = {
    images: [Project1, Project2, Project3, Project4, Project5],
    title: [
      "Pokemon Pokedex",
      "Pricing Toggle Button",
      "Credit Card Validation Form",
      "Bruce Lee Tribute Page",
      "Personal Portfolio Page",
    ],
    languages: [
      ["HTML", "CSS", "JS", "API"],
      ["HTML", "CSS", "JS", "REACT"],
      ["HTML", "CSS", "JS", "REACT"],
      ["HTML", "CSS", "SASS"],
      ["HTML", "CSS", "JS", "REACT"],
    ],
    paragraph: [
      "My favourite personal project to date. I created a Pokedex that displays all original 151 Kanto Pokemon via fetch API calls and DOM manipulation.",
      "This is a challenge project from FrontEndMentor.io that I built on my own. The toggle button uses state to change the pricing details of each plan.",
      "This is a challenge project from FrontEndMentor.io that I built on my own. When all inputs are valid, clicking confirm will print your details on the card images. I prop propagation, useState and string manipulation to build the validation logic. Note* You may get a dangerous site warning but I promise it's a harmless front-end credit card form haha. ",
      " Dedicated to my late idol Bruce Lee, I created this tribute page to practice pure HTML and CSS. ",
      "You're currently on it! This portfolio page is a culmination of all the front-end tricks and techniques I've learned so far in my coding journey. Take a look at how I coded it!",
    ],
    site: [
      "https://beamish-sopapillas-b9c130.netlify.app/",
      "https://gleeful-bublanina-d35e0e.netlify.app/",
      "https://interactive-credit-card-form.netlify.app/",
      "https://tribute-to-bruce-lee.netlify.app/",
      "https://personal-portfolio-age.netlify.app/",
    ],
    code: [
      "https://github.com/VincentChen6345/pokedex",
      "https://github.com/VincentChen6345/toggle-master",
      "https://github.com/VincentChen6345/interactive-credit-card-form",
      "https://github.com/VincentChen6345/tribute-to-bruce-lee",
      "https://github.com/VincentChen6345/personal-portfolio",
    ],
  };
  return (
    <ProjectContext.Provider value={content}>
      {children}
    </ProjectContext.Provider>
  );
};
