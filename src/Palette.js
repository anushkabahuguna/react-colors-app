import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

class Palette extends Component {
  static defaultProps = {
    defaultColorValue: 500,
  };
  constructor(props) {
    super(props);
    this.state = {
      colorValue: this.props.defaultColorValue,
    };
    this.changeColors = this.changeColors.bind(this);
  }
  changeColors(value) {
    this.setState({ colorValue: value });
  }
  render() {
    const { colors } = this.props.palette;
    const { colorValue } = this.state;
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="slider">
          <Slider
            className="Palette-Slider"
            step={100}
            min={100}
            defaultValue={colorValue}
            max={900}
            
            onChange={this.changeColors}
          />
        </div>
        <div className="Palette-colors">
          {colors[colorValue].map((colorObj, index) => (
            <ColorBox
              key={index}
              background={colorObj.hex}
              name={colorObj.name}
            />
          ))}
        </div>
        {/* here comes the footer */}
      </div>
    );
  }
}

export default Palette;
