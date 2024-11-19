"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";

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

export default function ModalRefactoringParallelRouting() {
  const { data } = useQuery(FETCH_BOARDS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {data?.fetchBoards.map((e) => (
        <div key={e.number}>
          <span style={{ margin: "10px" }}>{e.title}</span>
          <span style={{ margin: "10px" }}>{e.writer}</span>
        </div>
      ))}
      <button onClick={onClickModalOpen}>register</button>
      <br />
      <Link href="/33-04-modal2-refactoring-parallel-routing-new">
        글쓰기
      </Link>
    </>
  );
}
