import React, { Component } from "react";
class WelcomeState extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }
  changeMessage() {
    this.setState({ message: "Thankyou for subscribing!" });
  }
  render() {
    return (
      <div>
        <p>Class Component</p>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default WelcomeState;
