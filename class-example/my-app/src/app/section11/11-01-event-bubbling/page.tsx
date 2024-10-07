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

  const onClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // console.log(event.target.id)
    // console.log(event)

    alert(`${(event.currentTarget as HTMLButtonElement).id}님이 작성한 글입니다.`)
    
  }

  return (
    <>
      {data?.fetchBoards.map((e) => (
        <div key={e.number} id={e.writer} onClick={onClick}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{e.number}</span>
          <span style={{ margin: "10px" }}>{e.title}</span>
          <span style={{ margin: "10px" }}>{e.writer}</span>
        </div>
      ))}
    </>
  );
}
