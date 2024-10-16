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

export default function InputRefactoringAfterPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [myFunction] = useMutation(setting);

  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {
        writer: inputs.writer,
        title: inputs.title,
        contents: inputs.contents,
      },
    });
    console.log(result);
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  return (
    <>
      <button onClick={onClickSubmit}>Graphql APl</button>
      <br />
      writer :{" "}
      <input
        id="writer"
        type="text"
        onChange={onChangeInputs}
        placeholder="writer"
      />
      <br />
      title :{" "}
      <input
        id="title"
        type="text"
        onChange={onChangeInputs}
        placeholder="title"
      />
      <br />
      content :{" "}
      <input
        id="content"
        type="text"
        onChange={onChangeInputs}
        placeholder="contents"
      />
    </>
  );
}
