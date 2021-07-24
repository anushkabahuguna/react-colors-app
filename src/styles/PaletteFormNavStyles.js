import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes";
const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    marginRight: "1rem",
    display: "flex",
    gap: "2em",
    "& a": {
      width: "100%",
      textDecoration: "none",
      [sizes.down("xs")]: {
        width: "120px",
        height: "36px",
      },
      "& button": {
        width: "100%",
      },
    },
    [sizes.down("xs")]: {
      marginRight: "0.5rem",
      alignItems: "center",
    },
  },
  button: {
    margin: "0 0.5em",
    [sizes.down("xs")]: {
      margin: "0",
    },
    height: "100%",
  },

  hide: {
    display: "none",
  },
});

export default styles;
