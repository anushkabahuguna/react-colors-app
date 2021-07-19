import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
// import after rc-slider
import "./Navbar.css";

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
    const { colorValue, changeColors, showingAllColors } = this.props;
    const { format, open } = this.state;
    return (
      <nav className="Navbar">
        <div className="logo">
          <Link to="/">react color picker</Link>
        </div>

        {showingAllColors && (
          <div className="slider-container">
            <span className="slider-text">Level: {colorValue}</span>
            <div className="slider">
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

        <div className="select-container">
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

export default Navbar;
