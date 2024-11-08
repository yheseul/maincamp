"use client";

import { useCallback, useMemo, useState } from "react";
import ChildPage from "../02-child/page";

export default function ParentPage() {
  console.log("Render Component");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  const onClickCountState = useCallback(() => {
    setCountState((prev) => prev + 1);
  }, []);

  return (
    <div>
      <div>count(let): {countLet}</div>
      <button onClick={onClickCountLet}>BUTTON count(let) + 1</button>
      <div>count(state): {countState}</div>
      <button onClick={onClickCountState}>BUTTON count(state) + 1</button>
      // rerender X
      <ChildPage />
      // rerender O{/* <ChildPage countState={countState} /> */}
    </div>
  );
}
