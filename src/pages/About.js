import React, { Component, Fragment } from "react";
import { Button, Container } from "reactstrap";
import NavbarComponent from "../component/NavbarComponent";

class About extends Component {
  state = { isAuthenticated: false };
  componentWillMount() {
    this.checkUser();
  }

  checkUser = () => {
    const token = localStorage.getItem("token");
    if (!!token) {
      return this.setState({ isAuthenticated: true });
    }
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };
  render() {
    const { isAuthenticated } = this.state;
    if (!isAuthenticated) {
      window.location = "/login";
    }
    return (
      <Fragment>
        <NavbarComponent />
        <Container className="p-4">
          <h1>Ini halaman about</h1>
          <Button color="danger" onClick={this.handleLogout}>
            Logout
          </Button>
        </Container>
      </Fragment>
    );
  }
}

export default About;
