import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  //   increment() {
  //     this.setState({ count: this.state.count + 1 }, () => {
  //         console.log("Callback value", this.state.count)
  //     });
  //     // this.state.count = this.state.count + 1;
  //     console.log(this.state.count); //This will return a value one less than the current state, this is because the calls to setState are asynchronous. Here console.log() is called before the state is actually set. To handle this we have to pass a second parameter in the setState().
  //   }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        Counter Class
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}
export default CounterClass;
