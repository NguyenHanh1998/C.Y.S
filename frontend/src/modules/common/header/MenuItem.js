import React from "react";
import { Link, withRouter } from "react-router-dom";

import { white } from '../../../ui/common/colors'


const MenuItem = (props) => {
  const { children, to, style } = props;
  return (
    <Link
      to={to}
      style={Object.assign(
        {
          padding: "0.6em 1em",
          textTransform: "uppercase",
          color: white,
        },
        style
      )}
    >
      {children}
    </Link>
  );
};

MenuItem.defaultProps = {
  type: "secondary",
  active: false,
  style: {},
};

export default withRouter(MenuItem);
