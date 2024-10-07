"use client";

import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function MapBoards() {
  const { data } = useQuery(FetchBoardsDocument);
  console.log(data);

  const onClickLike = (event: MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    alert("like +1");
  };

  return (
    <>
      {data?.fetchBoards?.map((e) => (
        <a href="https://music.youtube.com/" key={e.number}>
          <div id={e.writer ?? "X"}>
            <span>
              <input type="checkbox" />
            </span>
            <span style={{ margin: "10px" }}>{e.number}</span>
            <span style={{ margin: "10px" }}>{e.title}</span>
            <span style={{ margin: "10px" }}>{e.writer}</span>
            <span onClick={onClickLike}>like</span>
          </div>
        </a>
      ))}
    </>
  );
}
