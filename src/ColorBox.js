import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, background } = this.props;

    return (
      <div className="ColorBox" style={{ background }}>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-btn">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}

export default ColorBox;
