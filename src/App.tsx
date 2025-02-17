import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { themeGlobal } from "./styles/themes/themeGlobal";
import { Centralize, GlobalStyle } from "./styles/style";
import { Banner } from "./components/banner";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

function App() {
  return (
    <>
      <ThemeProvider theme={themeGlobal}>
        <GlobalStyle />
        <Header />
        <Centralize>
          <Banner />
          <About />
          <Projects />
          <Skills />
        </Centralize>
      </ThemeProvider>
    </>
  );
}

export default App;
