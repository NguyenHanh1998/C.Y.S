import React, { Component } from "react";
import Header from "./header/Header";
class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <section style={{ marginTop: "5em", width: '100%' }}>{children}</section>
      </div>
    );
  }
}

export default Layout;
