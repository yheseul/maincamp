"use client";

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const setting = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function JestUnitTestMocking() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const router = useRouter();

  const [myFunction] = useMutation(setting);

  const onClickSubmit = async () => {
    try {
      const result = await myFunction({
        variables: {
          createBoardInput: {
            writer,
            title,
            contents,
            password: "1234",
          },
        },
      });
      const boardId = result.data.createBoard._id;
      router.push(`/boards/${boardId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <>
      <button role="submit-button" onClick={onClickSubmit}>
        Graphql APl
      </button>
      <br />
      writer:
      <input role="input-writer" type="text" onChange={onChangeWriter} />
      <br />
      title:
      <input role="input-title" type="text" onChange={onChangeTitle} />
      <br />
      contents:
      <input role="input-contents" type="text" onChange={onChangeContents} />
    </>
  );
}
