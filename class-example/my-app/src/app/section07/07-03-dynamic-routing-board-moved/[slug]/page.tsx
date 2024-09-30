"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function DynamicRoutingBoardMovedPage() {
  const params = useParams();
  const page = Number(params.slug)

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: page },
  });
  console.log(data);

  return (
    <>
      <div>This is a detail page{page}.</div>
      <div>writer: {data?.fetchBoard.writer}</div>
      <div>title: {data?.fetchBoard.title}</div>
      <div>contents: {data?.fetchBoard.contents}</div>
    </>
  );
}
