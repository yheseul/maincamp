"use client";

import { useState } from "react";

export default function RerenderPage() {
  console.log("Render Component");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const onClickCountLet = () => {
    console.log(countLet + 1);
    countLet += 1;
  };

  const onClickCountState = () => {
    console.log(countState + 1);
    setCountState(countState + 1);
  };

  return (
    <div>
      <div>count(let): {countLet}</div>
      <button onClick={onClickCountLet}>BUTTON count(let) + 1</button>

      <div>count(state): {countState}</div>
      <button onClick={onClickCountState}>BUTTON count(state) + 1</button>
    </div>
  );
}