import React, { Component } from "react";
import { Alert, Button, Container } from "reactstrap";
import styles from "../style.module.css";

class Reactstrap extends Component {
  state = { danger: false };

  handleOnclick = (e) => {
    this.setState({ danger: true });
  };

  render() {
    return (
      <Container className={styles.container}>
        <Container className="text-center">
          <Button className="mb-4" color="danger" onClick={this.handleOnclick}>
            Hati Hati !!
          </Button>
          {this.state.danger && (
            <Alert color="danger">Sudah dibilang hati hati!!! :)</Alert>
          )}
        </Container>
      </Container>
    );
  }
}

export default Reactstrap;
