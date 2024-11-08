"use client";

import { memo } from "react";

function ChildPage() {
  console.log("render child");

  return (
    <div>
      <div>================================</div>
      <h1>child component</h1>
      <div>================================</div>
    </div>
  );
}

export default memo(ChildPage);
