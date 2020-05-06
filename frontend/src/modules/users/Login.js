import React, { Component } from "react";
import axios from "axios";
import { Grid, GridCell } from "../../ui/grid";
import Input from '../../ui/input/Input'
require("dotenv").config();

const APP_URL_API = process.env.APP_URL_API;
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: "",
      },
    };
  }

  onChange = (event) => {
    let user = this.state.user;
    user[event.target.name] = event.target.value;

    this.setState({
      user,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    let data = JSON.stringify({
      email: this.state.user.email,
      password: this.state.user.password,
    });
    axios
      .post(`http://localhost:8000/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log("data", data);
        console.log(data.res)
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  render() {
    return (
      <Grid gutter={true} alignCenter={true} style={{ padding: "2em" }}>
        <GridCell style={{ textAlign: "center" }}>
          <form onSubmit={this.onSubmit}>
            <div style={{ width: "25em", margin: "0 auto" }}>
              <Input
                type="email"
                fullWidth={true}
                placeholder="Email"
                required="required"
                name="email"
                value={this.state.user.email}
                onChange={this.onChange}
                style={{ marginTop: "1em" }}
              />
              </div>
              <div>
              <Input
                type="password"
                fullWidth={true}
                placeholder="Password"
                required="required"
                name="password"
                value={this.state.user.password}
                onChange={this.onChange}
                style={{ marginTop: "1em" }}
              />
            </div>
            <div style={{ marginTop: "2em" }}>
              <button type="submit" theme="secondary">
                Login
              </button>
            </div>
          </form>
        </GridCell>
      </Grid>
    );
  }
}

export default Login;
