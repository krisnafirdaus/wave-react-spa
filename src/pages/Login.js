import React, { Component } from "react";
import { Container } from "reactstrap";

class Response extends String {
  json = () => JSON.parse(this);
}

function mockFetch(url, { body }) {
  const { email, password } = body;

  if (email !== "admin@admin.com" || password !== "password")
    return Promise.reject("Email dan password anda salah");

  return Promise.resolve(
    new Response(JSON.stringify({ accessToken: "ini token" }))
  );
}

class Login extends Component {
  state = { email: null, password: null };
  set = (name) => (e) => this.setState({ [name]: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    mockFetch("http://api.example.com/v1/auth/login", {
      body: { email, password },
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("token", json.accessToken);
        window.location = "/";
      })
      .catch((err) => {
        alert(err);
      });
  };
  render() {
    return (
      <Container className="p-4 d-flex align-items-center justify-content-center">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input type="email" name="email" onChange={this.set("email")} />
          </label>
          <label>
            password
            <input
              type="password"
              name="password"
              onChange={this.set("password")}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </Container>
    );
  }
}

export default Login;
