"use client";

import FetchPolicy from "@/components/21-01-fetch-policy";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onClickIsOpen = () => {
    setIsOpen(true);
  };

  const onClickIsMove = () => {
    router.push("21-01-fetch-policy-moved");
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>isOpen</button>
      {isOpen && <FetchPolicy />}
      <br />
      ==========================================
      <br />
      <button onClick={onClickIsMove}>move</button>
    </div>
  );
}
