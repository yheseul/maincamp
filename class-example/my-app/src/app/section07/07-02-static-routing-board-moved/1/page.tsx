"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 1) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingBoardMovedPage1() {
  const { data } = useQuery(FETCH_BOARD);
  console.log(data)

  return (
    <>
      <div>This is a detail page1.</div>
      <div>writer: {data?.fetchBoard.writer}</div>
      <div>title: {data?.fetchBoard.title}</div>
      <div>contents: {data?.fetchBoard.contents}</div>
    </>
  );
}
