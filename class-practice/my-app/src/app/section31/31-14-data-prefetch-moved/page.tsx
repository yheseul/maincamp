"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoardWithLike($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function DataPrefetchMoved() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: params.boardId },
    fetchPolicy: "cache-first",
  });

  return (
    <>
      <div>writer: {data?.fetchBoard.writer}</div>
      <div>title: {data?.fetchBoard.title}</div>
      <div>contents: {data?.fetchBoard.contents}</div>
    </>
  );
}
