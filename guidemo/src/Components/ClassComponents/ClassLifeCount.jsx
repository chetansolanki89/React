import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ClassLifeCountChild from "./ClassLifeCountChild";

class ClassLifeCount extends Component {
  constructor() {
    super();
    this.state = { count: 0, random: Math.floor(Math.random() * 100 + 1 )};
  }
  handleEvent = () => {
    this.setState({ count: this.state.count - 1 });
  };
  componentDidUpdate() {
    document.title = this.state.random;
  }
  render() {
    return (
      <div>
        <h4>Class component counter with ComponentDidUpdate</h4>
        <h1>Count: {this.state.count}</h1>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </Button>
        <ClassLifeCountChild pass={this.handleEvent}/>

        <p>
          ===============================================================================================================
        </p>
        <h3>Random Number Generator</h3>

        <Button
          variant="danger"
          onClick={() => this.setState({ random: Math.floor(Math.random() * 100 + 1 )})}
        >
          Generate
        </Button>
        <h1>{this.state.random}</h1>
      </div>
    );
  }
}

export default ClassLifeCount;
