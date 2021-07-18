import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./PaletteList.css";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { palettes } = this.props;
    return (
      <div className="PaletteList">
        <h1>Here goes the Palette List!!</h1>
        {palettes.map((palette) => (
          <p>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}

export default PaletteList;
