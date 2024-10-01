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

  return (
    <>
      {data?.fetchBoards.map((e) => (
        <div key={e.number}>
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
