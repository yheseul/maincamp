"use client"

import { gql, useMutation } from "@apollo/client";

const setting = gql`
  mutation {
    createBoard(writer: "apple", title: "egg", contents: "food") {
      _id
      number
      message
    }
  }
`;



export default function GraphqlMutationPage() {
  const [myFunction] = useMutation(setting);

  const onClickSubmit = async () => {
    const result = await myFunction();
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>Graphql APl</button>
    </>
  );
}
