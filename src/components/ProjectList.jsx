import "./ProjectList.css";
import { useProject } from "./ProjectContext";

export const ProjectList = () => {
  const numbers = [0, 1, 2, 3, 4];
  const projects = useProject();
  return numbers.map((num) => (
    <div className="list-container">
      <div className="image-container">
        <span className="btn-container">
          <a href={projects.site[num]} className="btn btn-visit btn-slide">
            Visit
          </a>
          <a href={projects.code[num]} className="btn btn-code btn-slide">
            Code
          </a>
        </span>{" "}
        <img src={projects.images[num]} alt="" className="mobile-img" />
      </div>
      <h3>{projects.title[num]}</h3>
      <ul className="language-container">
        {projects.languages[num].map((item) => (
          <li className="language" key={Math.random().toString()}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  ));
};
