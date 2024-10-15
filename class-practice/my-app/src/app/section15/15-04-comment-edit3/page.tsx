"use client";

import CommentItem from "@/components/15-04-comment-edit3/CommentEdit3";
import { gql, useQuery } from "@apollo/client";

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

export default function CommentEdit3() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <CommentItem el={el} key={el._id} />
      ))}
    </div>
  );
}
