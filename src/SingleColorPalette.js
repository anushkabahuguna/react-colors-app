import React, { Component } from "react";
import { Link } from "react-tiger-transition";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/PaletteStyles";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    const { generatePalette, findPalette } = this.props;
    this.palette = generatePalette(
      findPalette(this.props.match.params.paletteId)
    );
    this._shades = this.gatherShades(
      this.palette,
      this.props.match.params.colorId
    );
    this.goBackUrl = `/palette/${this.props.match.params.paletteId}`;

    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }
  gatherShades(palette, id) {
    //return all shades of a given color
    // we have the palette and the colorId as well
    let shades = [];
    let colors = palette.colors;
    for (let key in colors) {
      shades.push(colors[key].find((colorObj) => colorObj.id === id));
    }

    return shades.slice(1);
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { format } = this.state;
    const { classes } = this.props;
    const { paletteName, emoji } = this.palette;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={this.goBackUrl} transition="glide-right">
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(SingleColorPalette));
