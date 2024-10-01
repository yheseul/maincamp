"use client";

import { useState } from "react";

export default function DestructuringUseStatePage() {
  const resultValue= useState(0);
  const countUp = () => {
    resultValue[1](resultValue[0] + 1);
  };
  const countDown = () => {
    resultValue[1](resultValue[0] - 1);
  };
  return (
    <>
      <div>{resultValue[0]}</div>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </>
  );
}
