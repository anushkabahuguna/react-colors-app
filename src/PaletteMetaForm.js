import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = { stage: "name", newPaletteName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleClose = () => {
    this.props.hideForm();
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  showEmojiPicker() {
    this.setState({ stage: "emoji" });
  }
  savePalette(emojiObj) {
    this.props.handleSubmit({
      paletteName: this.state.newPaletteName,
      emoji: emojiObj.native,
    });
    this.setState({ stage: "" });
  }
  render() {
    const { stage, newPaletteName } = this.state;

    return (
      <div>
        <Dialog open={stage === "emoji"} onClose={this.handleClose}>
          <DialogTitle id="form-dialog-title">
            Choose a Palette Emoji
          </DialogTitle>
          <Picker onSelect={this.savePalette} title="Pick a Palette Emoji" />
        </Dialog>
        <Dialog
          open={stage === "name"}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new beautiful palette. Make sure
                it's complete
              </DialogContentText>
              <TextValidator
                label="Palette Name"
                value={newPaletteName}
                onChange={this.handleChange}
                fullWidth
                margin="normal"
                name="newPaletteName"
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter palette name", "Name already taken"]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
