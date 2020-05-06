import React from "react";

import { Grid, GridCell } from "../../../ui/grid";
import { primary as primaryGradient } from "../../../ui/common/gradients";
import { level1 } from '../../../ui/common/shadows'

import Menu from './Menu'
import MenuItem from './MenuItem'

const Header = (props) => {
  return (
    <header
      style={{
        backgroundImage: primaryGradient,
        boxShadow: level1,
        padding: "0 2em",
        height: "5em",
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
      }}
    >
      <Grid>
        <GridCell>
          {/* Logo */}
          {/* <Logo style={{ float: "left" }} /> */}

          {/* Left menu */}
          <Menu
            style={{ float: "left", marginTop: "0.5em", marginLeft: "2em" }}
          >
            <MenuItem>Men</MenuItem>

            <MenuItem>Women</MenuItem>

            <MenuItem>How It Works</MenuItem>

            <MenuItem>What's New</MenuItem>
          </Menu>
        </GridCell>
        <GridCell style={{ textAlign: "right" }}>
          <Menu>
            <MenuItem>Login</MenuItem>

            <MenuItem>Signup</MenuItem>
          </Menu>
        </GridCell>
      </Grid>
    </header>
  );
};

export default Header;
