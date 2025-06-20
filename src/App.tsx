import { InfoBanner } from "./components/banner";
import { Menu } from "./components/menu";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";

function App() {
  return (
    <>
      <Menu />
      <InfoBanner />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
