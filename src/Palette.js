import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorValue: 500,
      format:'hex'
    };
    this.changeColors = this.changeColors.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeColors(value) {
    this.setState({ colorValue: value });
  }
  changeFormat(val) {
   this.setState({format:val});
  }
  render() {
    const { colors } = this.props.palette;
    const { colorValue,format } = this.state;
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Navbar colorValue={colorValue} changeColors={this.changeColors} handleChange={this.changeFormat}/>
        <div className="Palette-colors">
          {colors[colorValue].map((colorObj, index) => (
            <ColorBox
              key={index}
              background={colorObj[format]}
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
