"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import DOMPurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function DynamicRoutingBoardMutationMovedPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: params.boardId },
  });
  console.log(data);

  return (
    <>
      <div>writer: {data?.fetchBoard.writer}</div>
      <div>title: {data?.fetchBoard.title}</div>
      {/* <div>contents: {data?.fetchBoard.contents}</div> */}
      {/* 내용에 들어있는 태그를 문자열이 아닌 진짜 태그로 인식하기 */}
      {/* <div
        dangerouslySetInnerHTML={{
          __html: data?.fetchBoard.contents,
        }}
      ></div> */}
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data?.fetchBoard.contents),
        }}
      ></div>
    </>
  );
}
