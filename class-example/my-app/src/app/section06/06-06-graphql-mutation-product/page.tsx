"use client";

import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationArgsPage() {
  const [myFunction] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await myFunction({
      // $writer: "chicken",
      // $title: "hi",
      // $contents: "nice to meet you"
      variables: {
        // $
        seller: "Tom",
        createProductInput: {
          name: "mouse",
          detail: "This is a mouse.",
          price: 5000,
        },
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
