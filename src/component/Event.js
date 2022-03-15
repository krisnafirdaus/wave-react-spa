import React, { Component } from "react";

class Event extends Component {
  handleLogout = (e) => {
    alert("Anda Logout");
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Event;
