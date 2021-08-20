import React, { FunctionComponent, Props, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Apptheme from "./theme";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { withRoot } from "./withRoot";
import { Route, Router, Switch, useHistory, useLocation } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import { Header } from "./components/shared/UIComponents/header/header";
import { SidebarDrawer } from "./components/shared/UIComponents/sideBarDrawer/sideBarDrawer";


const drawerWidth = 280;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("md")]: {
        // width: `calc(100% - ${drawerWidth}px)`,
        // marginLeft: drawerWidth,
        zIndex: 9999,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#EBEBE6",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

function MainContent() {
  return (
    <div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
    </div>
  )
}

function App() {
  let location = useLocation();
  // const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isSysAdmin, setisSysAdmin] = React.useState(false);
  const [isOrgAdmin, setisOrgAdmin] = React.useState(false);
  const [isNormalUser, setisNormalUser] = React.useState(false);
  const [showSideBar, setshowSideBar] = React.useState(true);
  const [checkUserDetails, setcheckUserDetails] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <ThemeProvider theme={Apptheme}>
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
    </ThemeProvider>
  );
}

export default withRoot(App);

