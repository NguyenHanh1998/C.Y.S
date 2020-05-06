import React from "react";

const GridCell = (props) => {
  const {
    children,
    alignTop,
    alignBottom,
    alignCenter,
    justifyRight,
    justifyCenter,
    gutter,
    ...others
  } = props;

  return (
    <div {...others}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        div {
          flex: 1;
          ${alignTop ? "align-self: flex-start;" : ""}
          ${alignBottom ? "align-self: flex-end;" : ""}
          ${alignCenter ? "align-self: center;" : ""}
          ${justifyRight ? "justify-content: flex-end;" : ""}
          ${justifyCenter ? "justify-content: center;" : ""}
          ${gutter ? "padding-left: 1em;" : "padding-left: 0;"}
        }
      `}</style>
    </div>
  );
};

export default GridCell;
