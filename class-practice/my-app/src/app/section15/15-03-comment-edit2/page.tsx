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

export default function CommentEdit2() {
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { data } = useQuery(FETCH_BOARDS);

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    const qqq = {...myIndex}
    qqq[Number(event.currentTarget.id)] = true;
    setMyIndex(qqq);
  };

  return (
    <div>
      {data?.fetchBoards?.map((el, index) =>
        myIndex !== index ? (
          <div key={el.number}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <button id={index} onClick={onClickEdit}>
              edit
            </button>
          </div>
        ) : (
          <input type="text" key={el._id} />
        )
      )}
    </div>
  );
}
