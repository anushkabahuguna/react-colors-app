import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorValue: 500,
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
        <Navbar colorValue={colorValue} changeColors={this.changeColors} />
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
