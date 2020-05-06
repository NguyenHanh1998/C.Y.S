import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { Grid, GridCell } from "../../ui/grid";
import { H1, H4 } from "../../ui/typography";
import { white } from "../../ui/common/colors";
import { textLevel1 } from "../../ui/common/shadows";
import { APP_URL } from "../../setup/config/env";
class HomePage extends Component {
  render() {
    return (
      <div>
        <Grid
          alignCenter={true}
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/cover.jpg')`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            height: "calc(100vh - 5em)",
            textAlign: "center",
            color: white,
          }}
        >
          <Helmet>
            <title>
              Monthly supply of clothes and accessories for Men and Women -
              C.Y.S
            </title>
          </Helmet>

          <GridCell>
            {/* <H1 font="secondary" style={{ textShadow: textLevel1 }}>
              Crate
            </H1>

            <H4 style={{ textShadow: textLevel1, marginTop: "0.5em" }}>
              Your monthly subscription of trendy clothes and accessories
            </H4> */}
            <h1>Crate</h1>
            <h4>Your monthly subscription of trendy clothes and accessories</h4>
          </GridCell>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
