"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function ApolloCacheState() {
  const { data } = useQuery(FETCH_BOARDS);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (boardId) => async () => {
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deleteId = data.deleteBoard;
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deleteId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용입니다@@@",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
    console.log(result);
  };

  return (
    <>
      {data?.fetchBoards.map((e) => (
        <div key={e.number}>
          <span style={{ margin: "10px" }}>{e.title}</span>
          <span style={{ margin: "10px" }}>{e.writer}</span>
          <button onClick={onClickDelete(e._id)}>delete</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>submit</button>
    </>
  );
}
