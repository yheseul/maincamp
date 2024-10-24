"use client";

import Child1 from "@/components/21-03-global-state-zustand/Child1";
import Child2 from "@/components/21-03-global-state-zustand/Child2";
import { useState } from "react";

export default function GlobalStateZustand() {
  return (
    <>
      <Child1 />
      <div>===================</div>
      <Child2 />
    </>
  );
}
