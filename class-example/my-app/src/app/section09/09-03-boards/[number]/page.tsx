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
  const page = Number(params.number);

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
      <Link href={`/section09/09-03-boards/${params.number}/edit`}>
        수정하러가기
      </Link>
    </>
  );
}
