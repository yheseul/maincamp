"use client";

import Link from "next/link";
import { Component, ReactNode } from "react";

export default class ClassLifeCyclePage extends Component {
  state = {
    count: 1,
  };

  componentDidMount() {
    console.log("렌더되고 나면 실행");
    // api 요청, 인풋 포커스
  }

  componentDidUpdate() {
    console.log("카운트 업데이트되면 실행");
  }

  componentWillUnmount() {
    console.log("사라지기 전 실행");
    // 채팅방 나가기 api 요청, 불필요한 타이머 삭제
  }

  onClickCountUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>count up!</button>
        <Link href={"/"}>close</Link>
      </>
    );
  }
}
