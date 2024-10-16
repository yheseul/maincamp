"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunctionalLifeCyclePage2() {
  const [count, setCount] = useState(1);

  // componentDidMount
  useEffect(() => {
    console.log("렌더되고 나면 실행");

    return () => {
      console.log("사라지기 전 실행");
    };
  }, []);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  console.log("????");

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>count up!</button>
      <Link href={"/"}>close</Link>
    </>
  );
}
