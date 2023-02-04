import { useProject } from "./ProjectContext";

const ProjectText = (props) => {
  const projects = useProject();
  return (
    <div className="project-overview">
      <h3 className="project-title">{projects.title[props.slide]}</h3>
      <ul className="language-container">
        {projects.languages[props.slide].map((item) => (
          <li className="language" key={Math.random().toString()}>
            {item}
          </li>
        ))}
      </ul>
      <p className="paragraph-text">{projects.paragraph[props.slide]}</p>
      <span className="btn-container">
        <a
          href={projects.site[props.slide]}
          className="btn btn-visit btn-slide"
        >
          Visit
        </a>
        <a href={projects.code[props.slide]} className="btn btn-code btn-slide">
          Code
        </a>
      </span>
    </div>
  );
};
export default ProjectText;
