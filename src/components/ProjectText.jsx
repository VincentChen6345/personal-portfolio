import { useProject } from "./ProjectContext";

const ProjectText = ({ project }) => {
  const projects = useProject();

  return (
    <div className="project-overview">
      <h3 className="project-title">{project.title}</h3>
      <ul className="language-container">
        {project.languages.map((item) => (
          <li className="language" key={Math.random().toString()}>
            {item}
          </li>
        ))}
      </ul>
      <p className="paragraph-text">{project.paragraph}</p>
      <span className="btn-container">
        <a href={project.site} className="btn btn-visit btn-slide">
          Visit
        </a>
        <a href={project.code} className="btn btn-code btn-slide">
          Code
        </a>
      </span>
    </div>
  );
};
export default ProjectText;
