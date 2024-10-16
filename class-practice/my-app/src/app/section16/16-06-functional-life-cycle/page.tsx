"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunctionalLifeCyclePage() {
  const [count, setCount] = useState(1);

  // componentDidMount() {
  //   console.log("렌더되고 나면 실행");
  //   // api 요청, 인풋 포커스
  // }

  // componentDidMount
  useEffect(() => {
    console.log("렌더되고 나면 실행");
  }, [])

  // componentDidUpdate() {
  //   console.log("카운트 업데이트되면 실행");
  // }

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log("카운트 업데이트되면 실행");
  })

  // componentWillUnmount() {
  //   console.log("사라지기 전 실행");
  //   // 채팅방 나가기 api 요청, 불필요한 타이머 삭제
  // }

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("사라지기 전 실행");
    }
  }, [])

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>count up!</button>
      <Link href={"/"}>close</Link>
    </>
  );
}
