import { InfoBanner } from "./components/banner";
import { Menu } from "./components/menu";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Experiences } from "./components/experiences";

function App() {
  return (
    <>
      <Menu />
      <InfoBanner name="Vitor Ramires" />
      <About />
      <Skills />
      <Projects />
      <Experiences />
    </>
  );
}

export default App;
