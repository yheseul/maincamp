"use client";

import { gql, useQuery } from "@apollo/client";
import { pages } from "next/dist/build/templates/app-page";
import { ChangeEvent, MouseEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log(data);

  // 검색에서 refetch할 때, search 검색어가 refetch 저장되어 있는 상태이므로 여기서 굳이 추가 안해도 됨
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const onClickSearch = () => {
    refetch({ search, page: 1 });
  };

  return (
    <>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("page").map((_, index) => (
        <span
          key={index + 1}
          id={String(String(index + 1))}
          onClick={onClickPage}
        >
          {index + 1}
        </span>
      ))}
    </>
  );
}
