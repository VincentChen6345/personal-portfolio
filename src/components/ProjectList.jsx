import "./ProjectList.css";
import { useProject } from "./ProjectContext";

export const ProjectList = () => {
  const projects = useProject();
  return projects.map((el) => (
    <div className="list-container" key={el.title}>
      <div className="image-container">
        <span className="btn-container">
          <a href={el.site} className="btn btn-visit btn-slide">
            Visit
          </a>
          <a href={el.code} className="btn btn-code btn-slide">
            Code
          </a>
        </span>
        <img src={el.images} alt={el.title} className="mobile-img" />
      </div>
      <h3>{el.title}</h3>
      <ul className="language-container">
        {el.languages.map((item) => (
          <li className="language" key={Math.random().toString()}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  ));
};
