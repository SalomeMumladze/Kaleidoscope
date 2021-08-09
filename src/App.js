import React from "react";
import Home from "Home";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "Theme";
import Layout from "./Layout";
import Api from "./api";

function App() {
  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Layout>
          <Home />
        </Layout>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
