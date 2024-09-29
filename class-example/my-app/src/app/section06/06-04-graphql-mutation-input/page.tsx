"use client";

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const setting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationArgsPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myFunction] = useMutation(setting);

  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      <button onClick={onClickSubmit}>Graphql APl</button>
      <br />
      writer : <input type="text" onChange={onChangeWriter} placeholder="writer" />
      <br />
      title : <input type="text" onChange={onChangeTitle} placeholder="title" />
      <br />
      content : <input type="text" onChange={onChangeContents} placeholder="contents" />
    </>
  );
}
