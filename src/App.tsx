import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { themeGlobal } from "./styles/themes/themeGlobal";
import { GlobalStyle } from "./styles/style";
import { Banner } from "./components/banner";

function App() {
  return (
    <>
      <ThemeProvider theme={themeGlobal}>
        <GlobalStyle />
        <Header />
        <Banner />
      </ThemeProvider>
    </>
  );
}

export default App;
