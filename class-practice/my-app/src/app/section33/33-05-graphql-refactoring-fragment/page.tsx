"use client";

import { FETCH_BOARDS } from "@/commons/apis/33-05-queries/fetch-boards";
import { useQuery } from "@apollo/client";

export default function GraphqlRefactoringFragment() {
  // 1. 기본 데이터만 필요한 경우
  const { data } = useQuery(FETCH_BOARDS);

  // 2. 기본 데이터 + 주소 데이터
  // const { data } = useQuery(FETCH_BOARDS, {
  //   variables: {
  //     page: 1,
  //     isBoardForAddressSet: true,
  //   },
  // });

  // 3. 모든 데이터 필요한 경우
  // const { data } = useQuery(FETCH_BOARDS, {
  //   variables: {
  //     page: 1,
  //     isBoardForAddressSet: true,
  //     isBoardForLikeSet: true,
  //   },
  // });

  return (
    <>
      {data?.fetchBoards.map((e) => (
        <div key={e.number}>
          <span style={{ margin: "10px" }}>{e.title}</span>
          <span style={{ margin: "10px" }}>{e.writer}</span>

          <span style={{ margin: "10px" }}>
            {e.boardAddress?.address ?? "주소 없음"}
          </span>

          <span style={{ margin: "10px" }}>{e.likeCount ?? "좋아요 없음"}</span>
        </div>
      ))}
    </>
  );
}
