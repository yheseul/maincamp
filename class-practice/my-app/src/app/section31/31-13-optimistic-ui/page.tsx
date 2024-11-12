"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoardWithLike($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUi() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "63fdcd44aef9f000281b2f8d" },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClick = () => {
    likeBoard({
      variables: {
        boardId: "63fdcd44aef9f000281b2f8d",
      },
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "63fdcd44aef9f000281b2f8d"},
          data: {
            fetchBoard: {
              _id: "63fdcd44aef9f000281b2f8d",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
        data.likeBoard;
      },
    });
  };

  return (
    <>
      <div>like: {data?.fetchBoard.likeCount ?? 0}</div>
      <button onClick={onClick}>널좋아해</button>
    </>
  );
}
