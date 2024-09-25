"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </>
  );
}
