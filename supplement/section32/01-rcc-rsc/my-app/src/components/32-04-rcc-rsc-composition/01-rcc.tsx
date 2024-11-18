"use client";

import { ReactNode } from "react";

export default function Rcc({ children }: { children: ReactNode }) {
  console.log("client component");
  return <div>client component{children}</div>;
}
