"use client";

import { useBoardsWrite } from "./hooks";
import { IBoardsWrite } from "./types";

export default function BoardsWrite(props: IBoardsWrite) {
  const { onChangeWriter, onChangeTitle, onChangeContents, onClick, name } = useBoardsWrite(props)
  return (
    <>
      <button onClick={onClick}>{name}</button>
      <br />
      writer :{" "}
      <input
        type="text"
        onChange={onChangeWriter}
        placeholder="writer"
        defaultValue={props.data?.fetchBoard.writer ?? ""}
      />
      <br />
      title :{" "}
      <input
        type="text"
        onChange={onChangeTitle}
        placeholder="title"
        defaultValue={props.data?.fetchBoard.title ?? ""}
      />
      <br />
      content :{" "}
      <input
        type="text"
        onChange={onChangeContents}
        placeholder="contents"
        defaultValue={props.data?.fetchBoard.contents ?? ""}
      />
    </>
  );
}
