import React, { useContext } from "react";
import PkmImg from "../img/project-1.png";
import PriceCardImg from "../img/project-2.png";
import ValidationFormImg from "../img/project-3.png";
import BruceLeeImg from "../img/project-4.png";
import PortfolioImg from "../img/project-5.png";
import KoreanFlashcardImg from "../img/flashcard-img.png";
const ProjectContext = React.createContext();

export function useProject() {
  return useContext(ProjectContext);
}
export const ProjectProvider = ({ children }) => {
  const content = [
    {
      title: "Korean Alphabet Flashcards",
      images: KoreanFlashcardImg,
      languages: ["HTML", "CSS", "JS", "REACT"],
      paragraph:
        "I'm learning Korean as a hobby! I tried using Duolingo but realised that Duolingo doesn't teach you the alphabet. That's why I created a flashcard app to help me learn the Korean alphabet. In the future, this may turn into the ultimate Korean tutorial for beginners!",
      site: "https://koreanbeginner.netlify.app/",
      code: "https://github.com/VincentChen6345/korean-hangul-flashcards",
    },
    {
      title: "Pokemon Pokedex",
      images: PkmImg,
      languages: ["HTML", "CSS", "JS", "API"],
      paragraph:
        "My favourite personal project to date. I created a Pokedex that displays all original 151 Kanto Pokemon via fetch API calls and DOM manipulation.",
      site: "https://beamish-sopapillas-b9c130.netlify.app/",
      code: "https://github.com/VincentChen6345/pokedex",
    },
    {
      title: "Pricing Toggle Button",
      images: PriceCardImg,
      languages: ["HTML", "CSS", "JS", "REACT"],
      paragraph:
        "This is a challenge project from FrontEndMentor.io that I built on my own. The toggle button uses state to change the pricing details of each plan.",
      site: "https://gleeful-bublanina-d35e0e.netlify.app/",
      code: "https://github.com/VincentChen6345/toggle-master",
    },
    {
      title: "Credit Card Validation Form",
      images: ValidationFormImg,
      languages: ["HTML", "CSS", "JS", "REACT"],
      paragraph:
        "This is a challenge project from FrontEndMentor.io that I built on my own. When all inputs are valid, clicking confirm will print your details on the card images. I prop propagation, useState and string manipulation to build the validation logic. Note* You may get a dangerous site warning but I promise it's a harmless front-end credit card form haha. ",
      site: "https://interactive-credit-card-form.netlify.app/",
      code: "https://github.com/VincentChen6345/interactive-credit-card-form",
    },
    {
      title: "Bruce Lee Tribute Page",
      images: BruceLeeImg,
      languages: ["HTML", "CSS", "SASS"],
      paragraph:
        " Dedicated to my late idol Bruce Lee, I created this tribute page to practice pure HTML and CSS. ",
      site: "https://tribute-to-bruce-lee.netlify.app/",
      code: "https://github.com/VincentChen6345/tribute-to-bruce-lee",
    },
    {
      title: "Personal Portfolio Page",
      images: PortfolioImg,
      languages: ["HTML", "CSS", "JS", "REACT"],
      paragraph:
        "You're currently on it! This portfolio page is a culmination of all the front-end tricks and techniques I've learned so far in my coding journey. Take a look at how I coded it!",
      site: "https://personal-portfolio-age.netlify.app/",
      code: "https://github.com/VincentChen6345/personal-portfolio",
    },
  ];

  return (
    <ProjectContext.Provider value={content}>
      {children}
    </ProjectContext.Provider>
  );
};
