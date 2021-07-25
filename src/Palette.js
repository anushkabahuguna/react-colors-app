import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";

const styles = {
  palette: {
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
};

class Palette extends Component {
  constructor(props) {
    super(props);
    const { generatePalette, findPalette } = this.props;
    this.palette = generatePalette(findPalette(this.props.match.params.id));
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
    const { colors, paletteName, emoji, id } = this.palette;
    const { colorValue, format } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.palette}>
        <Navbar
          colorValue={colorValue}
          changeColors={this.changeColors}
          showingAllColors
          handleChange={this.changeFormat}
        />
        <div className={classes.colors}>
          {colors[colorValue].map((colorObj) => (
            <ColorBox
              key={colorObj.id}
              background={colorObj[format]}
              name={colorObj.name}
              moreUrl={`/palette/${id}/${colorObj.id}`}
              showingFullPalette={true}
            />
          ))}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Palette));
