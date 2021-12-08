import React, { Component } from "react";
import { Button } from "react-bootstrap";

class ClassLifeCountChild extends Component {
  render() {
    return (
      <div>
        <Button variant="warning" onClick={this.props.pass}>
          Decrement
        </Button>
      </div>
    );
  }
}

export default ClassLifeCountChild;
