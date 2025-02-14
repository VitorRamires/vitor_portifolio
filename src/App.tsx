import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { themeGlobal } from "./styles/themes/themeGlobal";
import { Centralize, GlobalStyle } from "./styles/style";
import { Banner } from "./components/banner";
import { About } from "./components/about";
import { Projects } from "./components/projects";

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
        </Centralize>
      </ThemeProvider>
    </>
  );
}

export default App;
