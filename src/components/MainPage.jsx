import "../App.css";
import "./MainPage.css";

import { SelfIntroduction } from "./SelfIntroduction";
import { AboutMeMain } from "./AboutMeMain";
import { MyProjects } from "./MyProjects";

export const MainPage = () => {
  return (
    <>
      <SelfIntroduction />
      <AboutMeMain />
      <MyProjects />
    </>
  );
};
