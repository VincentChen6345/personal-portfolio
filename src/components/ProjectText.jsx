const content = {
  title: [
    "Bruce Lee Tribute Page",
    "Pricing Toggle Button",
    "Credit Card Validation Form",
    "Life Advice Generator",
  ],
  languages: [
    ["HTML", "CSS", "SASS"],
    ["HTML", "CSS", "JS", "REACT"],
    ["HTML", "CSS", "JS", "REACT"],
    ["HTML", "CSS", "JS", "REACT"],
  ],
  paragraph: [
    "   Dedicated to my late idol Bruce Lee, I created this tribute page to practice pure HTML and CSS.",
    "This is a challenge project from FrontEndMentor.io that I built on my own. The toggle button uses state to change the pricing details of each plan.",
    "This is a challenge project from FrontEndMentor.io that I built on my own. When all inputs are valid, clicking confirm will print your details on the card images. I prop propagation, useState and string manipulation to build the validation logic. Note* You may get a dangerous site warning but I promise it's a harmless front-end credit card form haha. ",
    " This is a challenge project from FrontEndMentor.io that I built on my own. A simple life advice generator which fetches data from an api when the button is clicked and renders it. ",
  ],
  site: [
    "https://tribute-to-bruce-lee.netlify.app/",
    "https://gleeful-bublanina-d35e0e.netlify.app/",
    "https://interactive-credit-card-form.netlify.app/",
    "https://zesty-alfajores-911695.netlify.app/",
  ],
  code: [
    "https://github.com/VincentChen6345/tribute-to-bruce-lee",
    "https://github.com/VincentChen6345/toggle-master",
    "https://github.com/VincentChen6345/interactive-credit-card-form",
    "https://github.com/VincentChen6345/advice-generator",
  ],
};

const ProjectText = (props) => {
  return (
    <div className="project-overview">
      <h3 className="project-title">{content.title[props.slide]}</h3>
      <ul className="language-container">
        {content.languages[props.slide].map((item) => (
          <li className="language" key={Math.random().toString()}>
            {item}
          </li>
        ))}
      </ul>
      <p className="paragraph-text">{content.paragraph[props.slide]}</p>
      <span className="btn-container">
        <a href={content.site[props.slide]} className="btn btn-visit btn-slide">
          Visit
        </a>
        <a href={content.code[props.slide]} className="btn btn-code btn-slide">
          Code
        </a>
      </span>
    </div>
  );
};
export default ProjectText;
