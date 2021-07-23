import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "teal",
      newColorName: "",
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }
  componentDidMount() {
    //custom rules for validation
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSumbit() {
    const newColorObj = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColorObj);
    this.setState({ newColorName: "" });
  }
  render() {
    const { isPaletteFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div className="ColorPickerForm">
        <ChromePicker color={currentColor} onChange={this.updateCurrentColor} />
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSumbit}
          onError={(errors) => console.log(errors)}
        >
          <TextValidator
            label="Color Name"
            onChange={this.handleChange}
            name="newColorName"
            value={newColorName}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already exists",
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{ backgroundColor: currentColor }}
            disabled={isPaletteFull}
            style={{
              backgroundColor: isPaletteFull ? "grey" : this.state.currentColor,
            }}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
