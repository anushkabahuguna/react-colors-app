import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
// WON'T USE 50 LEVEL AS ALL COLORS ARE WHITE THERE
import { generatePalette } from "./colorHelpers";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
