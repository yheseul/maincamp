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

  const onClickPage = (event: MouseEvent<HTMLAnchorElement>) => {
    refetch({ page: Number(event.currentTarget.id) });
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
          onClick={onClickPage}
        >
          {index + 1}
        </span>
      ))}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <span
          key={index + 1}
          id={String(String(index + 1))}
          onClick={onClickPage}
        >
          {index + 1}
        </span>
      ))} */}

      {/* <span id="1" onClick={onClickPage}>
        1
      </span>
      <span id="2" onClick={onClickPage}>
        2
      </span>
      <span id="3" onClick={onClickPage}>
        3
      </span> */}
    </>
  );
}
