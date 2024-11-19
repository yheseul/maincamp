"use client";

import { gql, useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";

const FETCH_BOARDS = gql`
  query fetchBoardsWithSearch($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function List() {
  const searchPrams = useSearchParams();
  const search = searchPrams.get("search");
  const page = Number(searchPrams.get("page")) ?? 1;

  const { data } = useQuery(FETCH_BOARDS, {
    variables: { page, search },
  });

  console.log("목록이 리렌더 되었습니다.");

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
