import React, { Component } from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

const DraggableColorList = SortableContainer((props) => {
  const { colors, removeColor } = props;
  return (
    <div className="DraggableColorList" style={{ height: "100%" }}>
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

export default DraggableColorList;
