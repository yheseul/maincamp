import { IBoxProps } from "./typs";

export default function Box(props: IBoxProps) {
  return (
    <>
      <div>apple</div>
      <div>{props.color}</div>
      <div>{props.children}</div>
      <div>apple</div>
    </>
  );
}
