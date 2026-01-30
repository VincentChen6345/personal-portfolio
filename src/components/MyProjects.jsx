import { ProjectSlider } from "./ProjectSlider";
import { ProjectList } from "./ProjectList";

export const MyProjects = () => {
  return (
    <section id="my-projects" className="my-projects">
      <div className="divider"></div>
      <h1 className="section-heading">My Projects</h1>
      <ProjectSlider />
      <ProjectList />
    </section>
  );
};
