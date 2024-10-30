import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const setting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function InputRefactoringBeforePage() {
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
      <button onClick={onClickSubmit}>Graphql APl</button>
      <br />
      writer :{" "}
      <input type="text" onChange={onChangeWriter} placeholder="writer" />
      <br />
      title : <input type="text" onChange={onChangeTitle} placeholder="title" />
      <br />
      content :{" "}
      <input type="text" onChange={onChangeContents} placeholder="contents" />
    </>
  );
}
