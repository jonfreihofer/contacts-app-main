import React from "react";
import { StyledToolTip } from "./styles";

export default function ToolTip({ children }) {
  return (
    <StyledToolTip>
      <div className="tooltip">
        <div className="tooltiptext">Double click to edit</div>
        {children}
      </div>
    </StyledToolTip>
  );
}
