import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// import after rc-slider import
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { colorValue, changeColors } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">react color picker</a>
          </div>
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
       
      </header>
    );
  }
}

export default Navbar;
