"use client";

import { AppleOutlined } from "@ant-design/icons";
import { MouseEvent } from "react";

export default function LibraryIconPage() {
  const onClickDelete = (event: MouseEvent<HTMLSpanElement>) => {
    alert(`${event.currentTarget.id}`);
  };
  return (
    <>
      <AppleOutlined id="1" onClick={onClickDelete} />
      <AppleOutlined id="2" onClick={onClickDelete} />
      <AppleOutlined id="3" onClick={onClickDelete} />
      <AppleOutlined id="4" onClick={onClickDelete} />
      <AppleOutlined id="5" onClick={onClickDelete} />
      <AppleOutlined id="6" onClick={onClickDelete} />
      <AppleOutlined id="7" onClick={onClickDelete} />
      <AppleOutlined id="8" onClick={onClickDelete} />
      <AppleOutlined id="9" onClick={onClickDelete} />
      <AppleOutlined id="10" onClick={onClickDelete} />
    </>
  );
}
