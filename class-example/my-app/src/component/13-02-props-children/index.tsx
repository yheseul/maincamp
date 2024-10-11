import { ReactNode } from "react";

export default function Box({ children }: { children: ReactNode }) {
  return (
    <>
      <div>apple</div>
      <div>{children}</div>
      <div>apple</div>
    </>
  );
}
