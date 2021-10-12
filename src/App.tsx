import "react-perfect-scrollbar/dist/css/styles.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";
import routes from "./routes";
import {GlobalContext} from "./GlobalContext";

const App = () => {
  const logged = localStorage.getItem("logged") || false;

  return useRoutes(routes(!!logged));
};

const AppWrapper = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalContext.Provider value={{}}>
          <GlobalStyles />
          <Router>
            <App />
          </Router>
        </GlobalContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default AppWrapper;
