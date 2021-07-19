import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorValue: 500,
      format: "hex",
    };
    this.changeColors = this.changeColors.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeColors(value) {
    this.setState({ colorValue: value });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { colorValue, format } = this.state;
    return (
      <div className="Palette">
        <Navbar
          colorValue={colorValue}
          changeColors={this.changeColors}
          showingAllColors
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">
          {colors[colorValue].map((colorObj) => (
            <ColorBox
              key={colorObj.id}
              background={colorObj[format]}
              name={colorObj.name}
              moreUrl={`/palette/${id}/${colorObj.id}`}
              showLink={true}
            />
          ))}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
