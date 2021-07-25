import sizes from "./sizes";
import background from "./bg.svg";
const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    /* background by SVGBackgrounds.com*/
    backgroundColor: "#ffc6d7",
    width: "100%",
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll",
  },
  heading: {
    fontSize: "1.6rem",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "75%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",

    justifyContent: "space-between",
    color: "black",
    alignItems: "center",
    "& a": {
      color: "black",
      textDecoration: "none",
    },
    "& a:hover": {
      textDecoration: "underline",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1,100%)",
      gridGap: "1.4rem",
    },
  },
};

export default styles;
