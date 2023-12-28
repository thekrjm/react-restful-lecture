import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      num: 1,
      value: 0,
    };
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <>
        <div>state:{this.state.counter}</div>
        <button onClick={this.increase}>증가</button>
        <BoxClass num={this.state.value} />
      </>
    );
  }
}
