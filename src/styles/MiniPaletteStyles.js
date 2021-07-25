import sizes from "./sizes";
const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid black",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",

    "&:hover svg ": {
      opacity: "1",
    },
    "&:hover a ": {
      opacity: "1",
    },

    transition: "all 0.3s ease-in-out",
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
    "&:hover": {
      opacity: "50%",
    },
    transition: "all 0.3s ease-in-out",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-4px",
  },
  delete: {},
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    top: "0px",
    position: "absolute",
    right: "0px",
    padding: "10px",
    zIndex: "10",
    opacity: "0",
    transition: "all 0.3s ease-in-out",
  },
  overlay: {
    backgroundColor: "yellow",
    position: "absolute",
    zIndex: "10",
    height: "0",
    width: "100%",
    top: "74px",
    textAlign: "center",
  },
  link: {
    opacity: 0,
    transition: "all 0.3s ease-in-out",
    textDecoration: "none",
    padding: "0.5rem 2rem",
    fontWeight: "400",
    marginLeft: "-10px",
    color: "white",
    borderRadius: "5px",
    backgroundColor: "#f50057",
    [sizes.down("xs")]: {
      padding: "0.5rem",
    },
  },
};

export default styles;
