import React, { Component } from "react";
import { withRouter } from "react-router";
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
  render() {
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
}

export default Login;
