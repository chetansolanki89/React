import React, { Component } from "react";

class ClassTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
  }
  variable;
  componentDidMount() {
    this.variable = setInterval(() => {
      this.setState((prev) => ({ timer: prev.timer + 1 }));
    }, 1000);

  }
  componentDidUpdate(){
      if(this.state.timer===10)
      {
        clearInterval(this.variable)
      }

  }
  render() {
    return (
      <div>
        <h1>Timer: {this.state.timer}</h1>
        <button onClick={()=>clearInterval(this.variable)}>Pause</button>
        <button onClick={()=>clearInterval(this.variable)}>Continue</button>
        {console.log(this.state.timer)}

      </div>
    );
  }
}

export default ClassTimer;
