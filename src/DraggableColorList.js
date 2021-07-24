import React, { Component } from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";
import { withStyles } from "@material-ui/styles";
import sizes from "./styles/sizes";
const styles = {
  root: {
    [sizes.down("xs")]: {
      marginTop: "9px",
      marginBottom: "0",
    },
  },
};
const DraggableColorList = SortableContainer((props) => {
  const { colors, removeColor, classes } = props;
  return (
    <div className={classes.root} style={{ height: "100%" }}>
      {colors.map((c, i) => (
        <DraggableColorBox
          color={c.color}
          index={i}
          name={c.name}
          key={c.name}
          handleClick={() => removeColor(c.name)}
        />
      ))}
    </div>
  );
});

export default withStyles(styles)(DraggableColorList);
