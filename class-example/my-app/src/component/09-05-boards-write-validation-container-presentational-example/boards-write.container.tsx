"use client";

import { useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import BoardsWriteUI from "./boards-write.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boards-write.queries";

interface IBoardsWrite {
  onChangeWriter: void;
  onChangeTitle: void;
  onChangeContents: void;
  onClick: void;
  isEdit: boolean;
}

export default function BoardsWrite(props: IBoardsWrite) {
  const isEdit = props.isEdit ? "수정" : "등록";
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const router = useRouter();
  const params = useParams();
  console.log(params.number);

  const onClickUpdate = async () => {
    const myVariables = {
      writer,
      title,
      contents,
    };
    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    const result = await updateBoard({
      variables: myVariables,
    });
    console.log(result);
    alert("수정 완료");
    router.push(
      `/section09/09-05-boards-validation-container-presentational-example/${result.data.updateBoard.number}`
    );
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    alert("등록 완료");
    router.push(
      `/section09/09-05-boards-validation-container-presentational-example/${result.data.createBoard.number}`
    );
  };

  const onClick = props.isEdit ? onClickUpdate : onClickSubmit;

  const onChangeWriter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <>
      <BoardsWriteUI
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClick={onClick}
        isEdit={isEdit}
      />
    </>
  );
}
