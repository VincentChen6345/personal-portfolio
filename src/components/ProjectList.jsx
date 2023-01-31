import "./ProjectList.css";
import Project1 from "../img/project-1.png";
export const ProjectList = () => {
  return (
    <div className="list-container">
      <img src={Project1} alt="" className="mobile-img" />
      <h3>Tribute To Bruce Lee</h3>
      <p>etc etc etc</p>
    </div>
  );
};
