import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-tiger-transition";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorBoxStyles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
      moreBtn: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 1500);
  }
  handleClick() {
    this.setState({ moreBtn: true });
    // the code works without this settimeout
    setTimeout(() => {
      this.setState({ moreBtn: false });
    }, 1000);
  }
  render() {
    const { name, background, moreUrl, showingFullPalette, classes } =
      this.props;
    const { copied, moreBtn } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.colorBox} style={{ background }}>
          {/* here we are taking separate div because if we incrrease size of colorbox then
            size of buttons and texts on it will also increase */}
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${
              copied && !moreBtn && classes.showOverlay
            }`}
          />
          <div
            className={`${classes.copyMsg} ${copied && classes.showMessage}`}
          >
            <h1>copied!</h1>
            <p className={classes.copyText}>{this.props.background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link
              to={moreUrl}
              transition="glide-left"
              onClick={this.handleClick}
            >
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
