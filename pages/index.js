import FirstView from "../components/FirstView";
import AboutMe from "../components/AboutMe";
import ProjectsView from "../components/ProjectsView";
import ContactView from "../components/ContactView";

export default function Home() {
  return (
    <div>
      <FirstView />
      <AboutMe />
      <ProjectsView />
      <ContactView />
    </div>
  );
}
