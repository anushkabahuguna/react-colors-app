import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Navigation, Route, glide } from "react-tiger-transition";
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import PaletteList from "./PaletteList";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";
// WON'T USE 50th LEVEL AS ALL COLORS ARE WHITE THERE
import { generatePalette } from "./colorHelpers";
import "react-tiger-transition/styles/main.min.css";
import "./App.css";

glide({
  name: "glide-left",
});
glide({
  name: "glide-right",
  direction: "right",
});

document.getElementById("root").style.height = "100vh";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

    this.state = {
      palettes: savedPalettes || seedColors,
    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find((palette) => palette.id === id);
  }
  deletePalette(id) {
    this.setState(
      (prevSt) => ({
        palettes: prevSt.palettes.filter((palette) => palette.id !== id),
      }),
      this.syncLocalStorage
    );
  }
  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    //save palettes to local storage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    const { palettes } = this.state;
    return (
      <Switch>
        <Navigation>
          <Route exact path="/createNew">
            <NewPaletteForm
              savePalette={this.savePalette}
              palettes={palettes}
            />
          </Route>

          <Route exact path="/palette/:id">
            <Palette
              generatePalette={generatePalette}
              findPalette={this.findPalette}
              // palette={generatePalette(
              //   this.findPalette(routeProps.match.params.id)
              // )}
            />
          </Route>
          <Route exact path="/">
            <PaletteList
              palettes={palettes}
              // {...routeProps}
              deletePalette={this.deletePalette}
            />
          </Route>
          <Route exact path="/palette/:paletteId/:colorId">
            <SingleColorPalette
              generatePalette={generatePalette}
              findPalette={this.findPalette}
              // palette={generatePalette(
              //   this.findPalette(routeProps.match.params.paletteId)
              // )}
            />
          </Route>
        </Navigation>
      </Switch>
    );
  }
}

export default App;
