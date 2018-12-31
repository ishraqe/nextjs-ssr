import React, { Component } from "react";
import Router from "next/router";
import { autoLogin } from "./AuthController";

class register extends Component {
  componentDidMount() {
    if (autoLogin) {
      Router.push("/");
    }
  }
  render() {
    return <h2>Register</h2>;
  }
}

export default register;
