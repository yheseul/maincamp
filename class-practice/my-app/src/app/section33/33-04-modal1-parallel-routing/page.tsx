"use client";

import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
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

export default function ModalParallelRouting() {
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

      {/* 뒤로가기 누르면 모달이 닫히지 앟고, 이전 페이지로 돌아감 */}
      <Modal title="Basic Modal" open={isModalOpen}>
        title: <input type="text" />
        contents: <input type="text" />
        password: <input type="password" placeholder="password" />
      </Modal>
    </>
  );
}
