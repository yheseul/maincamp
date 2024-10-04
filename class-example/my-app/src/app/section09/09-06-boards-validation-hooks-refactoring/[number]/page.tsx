"use client"

import { FETCH_BOARD } from "@/component/09-06-boards-write-validation-hooks-refactoring/queries";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useParams } from "next/navigation";

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
      <Link href={`/section09/09-06-boards-validation-hooks-refactoring/${params.number}/edit`}>
        수정하러가기
      </Link>
    </>
  );
}
