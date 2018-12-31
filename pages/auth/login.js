import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import Layout from "../../layout/mainLayout";
import { setToken } from "./AuthController";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: ""
    };
  }

  static getInitialProps = async function() {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length + 1}`);

    return {
      shows: data
    };
  };
  submitLoginForm = e => {
    e.preventDefault();
    const loginData = {
      email: this.state.email,
      password: this.state.pass
    };
    axios.post("https://reqres.in/api/login", loginData).then(res =>
      axios.post("http://localhost:3000/login", res).then(data => {
        console.log(data.data);
        setToken(data.data.token);
      })
    );
  };
  render() {
    return (
      <Layout>
        <section className="section-login">
          <div className="container">
            <form onSubmit={this.submitLoginForm}>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Email"
                  className="input"
                  value={this.state.email}
                  onChange={event =>
                    this.setState({
                      email: event.target.value
                    })
                  }
                />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  placeholder="password"
                  className="input"
                  value={this.state.pass}
                  onChange={event =>
                    this.setState({
                      pass: event.target.value
                    })
                  }
                />
              </div>
              <div className="button-container">
                <button className="btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    );
  }
}

export default login;
