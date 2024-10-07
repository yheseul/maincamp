"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards(page: 1) {
      number
      writer
      title
      contents
    }
  }
`;

export default function MapBoards() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickLike = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    alert("like +1");
  };

  return (
    <>
      {data?.fetchBoards.map((e) => (
        <a href="https://music.youtube.com/" key={e.number}>
          <div id={e.writer}>
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
