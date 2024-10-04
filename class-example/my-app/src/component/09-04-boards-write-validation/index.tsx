"use client";

import { gql, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

interface IBoardsWrite {
  isEdit: boolean;
  data: any;
}

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

const UPDATE_BOARD = gql`
  mutation updateBoard(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      _id
      number
      message
    }
  }
`;

export default function BoardsWrite(props: IBoardsWrite) {
  const name = props.isEdit ? "수정" : "등록";
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
      `/section09/09-04-boards-validation/${result.data.updateBoard.number}`
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
      `/section09/09-04-boards-validation/${result.data.createBoard.number}`
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
      <button onClick={onClick}>{name}</button>
      <br />
      writer :{" "}
      <input
        type="text"
        onChange={onChangeWriter}
        placeholder="writer"
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      title :{" "}
      <input
        type="text"
        onChange={onChangeTitle}
        placeholder="title"
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      content :{" "}
      <input
        type="text"
        onChange={onChangeContents}
        placeholder="contents"
        defaultValue={props.data?.fetchBoard.contents}
      />
    </>
  );
}
