import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import PaletteList from "./PaletteList";
import NewPaletteForm from "./NewPaletteForm";

import seedColors from "./seedColors";
// WON'T USE 50 LEVEL AS ALL COLORS ARE WHITE THERE
import { generatePalette } from "./colorHelpers";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          {/* this route should come on top as we have one more route which mathces this */}
          <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList palettes={seedColors} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={(routeProps) => (
              <SingleColorPalette
                {...routeProps}
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
