"use client";

import { gql, useMutation } from "@apollo/client";

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
  const [myFunction] = useMutation(setting);

  const onClickSubmit = async () => {
    const result = await myFunction({
      // $writer: "chicken",
      // $title: "hi",
      // $contents: "nice to meet you"
      variables: {
        // $
        writer: "chicken",
        title: "hi",
        contents: "nice to meet you",
      },
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>Graphql APl</button>
    </>
  );
}
