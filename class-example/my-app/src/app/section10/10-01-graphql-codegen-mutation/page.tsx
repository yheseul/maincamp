"use client";

import { CreateBoardDocument } from "@/commons/graphql/graphql";
import { gql, useMutation } from "@apollo/client";

export default function GraphqlMutationArgsPage() {
  const [myFunction] = useMutation(CreateBoardDocument);

  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {
        writer: "chicken",
        title: "hi",
        contents: "nice to meet you",
      },
    });
    // result.data?.createBoard?._id 추론 가능
    
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>Graphql APl</button>
    </>
  );
}
