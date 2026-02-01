import "./App.css";

import { Routes, Route } from "react-router-dom";
import { MyStory } from "./components/MyStory";
import { MainPage } from "./components/MainPage";
import { Navbar } from "./components/Navbar";
import { ProjectProvider } from "./components/ProjectContext";
import { Footer } from "./components/Footer";
function App() {
  return (
    <ProjectProvider>
      <body className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/my-story" element={<MyStory />} />
        </Routes>
        <Footer />
      </body>
    </ProjectProvider>
  );
}

export default App;
