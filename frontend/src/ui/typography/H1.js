import React from "react";

// UI Imports
import { primary, secondary } from "../common/fonts";

// Component
const H1 = (props) => {
  const { children, font, ...others } = props;

  return (
    <h1 {...others}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        h1 {
          font-family: ${font === "primary" ? primary : secondary};
          font-size: 4em;
        }
      `}</style>
    </h1>
  );
};

export default H1;
