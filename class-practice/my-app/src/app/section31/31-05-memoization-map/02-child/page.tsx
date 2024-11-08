import { memo } from "react";

function ChildPage(props) {
  console.log("ChildPage", props.el);
  return <span>{props.el}</span>;
}

export default memo(ChildPage);
