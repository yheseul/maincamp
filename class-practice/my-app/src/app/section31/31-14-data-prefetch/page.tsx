"use client";

import { gql, useApolloClient, useQuery } from "@apollo/client";
import _ from "lodash";
import Link from "next/link";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARD = gql`
  query fetchBoardWithLike($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function DataPrefetch() {
  const { data } = useQuery(FETCH_BOARDS);
  const client = useApolloClient();

  const prefetchBoardDebounce = _.debounce((boardId) => {
    client.query({
      query: FETCH_BOARD,
      variables: { boardId },
    });
  }, 200);

  const preFetchBoard = (boardId) => () => {
    prefetchBoardDebounce(boardId);
  };

  return (
    <>
      {data?.fetchBoards.map((e) => (
        <div key={e._id}>
          <Link href={`/section31/31-14-data-prefetch-moved/${e._id}`}>
            <span style={{ margin: "10px" }} onMouseOver={preFetchBoard(e._id)}>
              {e.title}
            </span>
            <span style={{ margin: "10px" }}>{e.writer}</span>
          </Link>
        </div>
      ))}
    </>
  );
}
