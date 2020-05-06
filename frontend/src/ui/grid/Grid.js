import React from "react";

const Grid = (props) => {
  const {
    children,

    justifyRight,
    justifyCenter,

    alignTop,
    alignBottom,
    alignCenter,

    gutter,
    ...others
  } = props;

  const GridCells = React.Children.map(children, (GridCell) => {
    if (!GridCell) return null;
    if (GridCell.props) {
      return React.cloneElement(GridCell, gutter);
    }
    return GridCell;
  });

  return (
    <div {...others}>
      {GridCells}
      {/* // language = CSS */}
      <style jsx>{`
        div {
          display: flex;
          flex-flow: row;
          flex-wrap: wrap;

          ${justifyRight ? "justify-content: flex-end;" : ""}
          ${justifyCenter ? "justify-content: center;" : ""}

          ${alignTop ? "align-items: flex-start;" : ""}
          ${alignBottom ? "align-items: flex-end;" : ""}
          ${alignCenter ? "align-items: center;" : ""}

          ${gutter ? "margin-left: -1em;" : "margin-left: 0;"}
        }
      `}</style>
    </div>
  );
};

export default Grid;
