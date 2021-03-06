import React, { Component } from "react";
// utilities
import { withStyles } from "@material-ui/core/styles";
//components
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// styles
import "rc-slider/assets/index.css";
// import after rc-slider
import styles from "./styles/NavbarStyles";
import { Link } from "react-tiger-transition";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false,
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(evt) {
    this.setState({ format: evt.target.value, open: true }, () => {
      this.props.handleChange(this.state.format);
    });
  }
  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { colorValue, changeColors, showingAllColors, classes } = this.props;
    const { format, open } = this.state;
    return (
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <Link to="/" transition="glide-right">
            react color picker
          </Link>
        </div>

        {showingAllColors && (
          <div>
            <span className="slider-text">Level: {colorValue}</span>
            <div className={classes.slider}>
              <Slider
                className="Palette-Slider"
                step={100}
                min={100}
                defaultValue={500}
                max={900}
                onChange={changeColors}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
          message={
            <span id="message-id">
              Format Changed To {format.toUpperCase()}!
            </span>
          }
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
