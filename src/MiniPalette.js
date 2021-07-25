import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import { Link } from "react-tiger-transition";

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
  }
  deletePalette(evt) {
    evt.stopPropagation();
    this.props.openDialog(this.props.id);
  }
  render() {
    const { classes, paletteName, emoji, colors, handleClick, id } = this.props;
    const miniColorBoxees = colors.map((colorObj) => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: colorObj.color }}
        key={colorObj.name}
      ></div>
    ));

    return (
      <div className={classes.root}>
        <div className={classes.overlay}>
          <Link
            className={classes.link}
            to={`/palette/${id}`}
            transition="glide-left"
          >
            {/* <Link
            variant="contained"
            color="secondary"
            className={classes.overlayBtn}
          > */}
            OPEN
          </Link>
        </div>
        <div onClick={handleClick} className={classes.holder}>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={this.deletePalette}
          />

          <div className={classes.colors}>{miniColorBoxees}</div>
          <h5 className={classes.title}>
            {paletteName} <span className={classes.emoji}>{emoji}</span>
          </h5>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(MiniPalette);
