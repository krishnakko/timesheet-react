import CssBaseline from "@material-ui/core/CssBaseline";
import * as styles from "@material-ui/core/styles";
import React from "react";
import './App.scss';
import { Header } from "./components/shared/UIComponents/header/header";
import { SidebarDrawer } from "./components/shared/UIComponents/sideBarDrawer/sideBarDrawer";
import Apptheme from "./theme";
import { withRoot } from "./withRoot";


function App() {
  // const { window } = props;

  return (
    <styles.ThemeProvider theme={Apptheme}>
      <div className={`pageContainer`}>
        <Header />
        <CssBaseline />
        <SidebarDrawer />
        {/* <AppBar position="fixed" className={classes.appBar} color="secondary">
          <Toolbar>
            <Header />
          </Toolbar>
        </AppBar> */}
        {/* <main>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </main> */}
      </div>
    </styles.ThemeProvider>
  );
}

export default withRoot(App);

