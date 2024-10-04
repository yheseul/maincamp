"use client";

import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";

interface IBoardsWriteUI {
  onChangeWriter: ChangeEventHandler<HTMLInputElement>;
  onChangeTitle: ChangeEventHandler<HTMLInputElement>;
  onChangeContents: ChangeEventHandler<HTMLInputElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isEdit: boolean;
  data: any;
}

export default function BoardsWriteUI(props: IBoardsWriteUI) {
  return (
    <>
      <button onClick={props.onClick}>{props.isEdit}하기</button>
      <br />
      writer :{" "}
      <input
        type="text"
        onChange={props.onChangeWriter}
        placeholder="writer"
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      title :{" "}
      <input
        type="text"
        onChange={props.onChangeTitle}
        placeholder="title"
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      content :{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        placeholder="contents"
        defaultValue={props.data?.fetchBoard.contents}
      />
    </>
  );
}
