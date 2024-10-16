"use client";

import { Component, ReactNode } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 1,
  };

  // onClickCountUp = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // }

  onClickCountUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        {/* <button onClick={this.onClickCountUp}>count up!</button> */}
        <button onClick={this.onClickCountUp.bind(this)}>count up!</button>
      </>
    );
  }
}
