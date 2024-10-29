"use client";

import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log(data);

  // 리팩토링 전
  // const onClickPage = (event: MouseEvent<HTMLAnchorElement>) => {
  //   refetch({ page: Number(event.currentTarget.id) });
  // };

  // 리팩토링 후
  const onClickPage = (page: Number) => () => {
    refetch({ page });
  };

  return (
    <>
      {data?.fetchBoards.map((e) => (
        <div key={e.number}>
          <span style={{ margin: "10px" }}>{e.title}</span>
          <span style={{ margin: "10px" }}>{e.writer}</span>
        </div>
      ))}

      {new Array(10).fill("page").map((_, index) => (
        <span
          key={index + 1}
          id={String(String(index + 1))}
          onClick={onClickPage(index + 1)}
        >
          {index + 1}
        </span>
      ))}
    </>
  );
}
