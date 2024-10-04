"use client"

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
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

export default function BoardsDetail() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(params.number) },
  });
  console.log(data);

  return (
    <>
      <div>This is a detail page{params.number}.</div>
      <div>writer: {data?.fetchBoard.writer}</div>
      <div>title: {data?.fetchBoard.title}</div>
      <div>contents: {data?.fetchBoard.contents}</div>
      <Link href={`/section09/09-04-boards-validation/${params.number}/edit`}>
        수정하러가기
      </Link>
    </>
  );
}
