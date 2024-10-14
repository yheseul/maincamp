"use client";

import Child1 from "@/components/14-04-lifting-state-up/Child1";
import Child2 from "@/components/14-04-lifting-state-up/Child2";
import { useState } from "react";

export default function LiftingStateUp() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <Child1 count={count} setCount={setCount}>
        {count}
      </Child1>
      <div>===================</div>
      <Child2 count={count2} setCount={setCount2}>
        {count}
      </Child2>
    </>
  );
}
