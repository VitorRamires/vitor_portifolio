import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { themeGlobal } from "./styles/themes/themeGlobal";
import { GlobalStyle } from "./styles/style";

function App() {
  return (
    <>
      <ThemeProvider theme={themeGlobal}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
