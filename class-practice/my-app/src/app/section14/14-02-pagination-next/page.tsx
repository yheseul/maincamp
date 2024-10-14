"use client";

import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";

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

export default function PaginationNextPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickPage = (event: MouseEvent<HTMLAnchorElement>) => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    startPage === 1 ? alert("첫 페이지") : setStartPage(startPage - 10);
    refetch({ page: Number(startPage - 10) });
  };

  const onClickNextPage = () => {
    setStartPage(startPage + 10);
    refetch({ page: Number(startPage + 10) });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      <span onClick={onClickPrevPage}>prev</span>
      {new Array(10).fill("page").map((_, index) => (
        <span
          key={index + startPage}
          id={String(String(index + startPage))}
          onClick={onClickPage}
        >
          {index + startPage}
          &nbsp;
        </span>
      ))}
      <span onClick={onClickNextPage}>next</span>

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
