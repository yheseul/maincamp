"use client";

import { useState } from "react";

export default function PrevState() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    // const setCount = (prev) => prev + 1;

    // setCount(function (prev) {
    //   return prev + 1;
    // });

    setCount((prrr) => prrr + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>up</button>
    </>
  );
}
