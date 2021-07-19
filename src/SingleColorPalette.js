import React, { Component } from "react";
// import "./SingleColorPalette.css";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { match } = this.props;
    return (
      <div className="SingleColorPalette">
        <h1>
          single color palette: palette id:{match.params.paletteId} color id:
          {match.params.colorId}
        </h1>
      </div>
    );
  }
}

export default SingleColorPalette;
