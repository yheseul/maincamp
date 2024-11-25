"use client";

import { useState } from "react";

export default function Boards() {
  const [state] = useState("page");
  return <div>static {state}</div>;
}
