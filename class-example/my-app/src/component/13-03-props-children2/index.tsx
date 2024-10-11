import { ReactNode } from "react";

type TBox = {
  children: ReactNode;
  color: string;
};

export default function Box(props: TBox) {
  return (
    <>
      <div>apple</div>
      <div>{props.color}</div>
      <div>{props.children}</div>
      <div>apple</div>
    </>
  );
}
