"use client";

import { useState } from "react";
import ChildPage from "../02-child/page";
import { v4 as uuidv4 } from "uuid";

export default function ParentPage() {
  const [data, setData] = useState("hi hello bye nice to meet you");

  const onClickChange = () => {
    setData("안녕 안녕하세요 잘가 반갑습니다");
  };

  return (
    <div>
      {/* 1. memo시 key 또는 el이 변경된 부분만 리렌더링 됨 */}
      {/* {data.split(" ").map((el, index) => (
        <ChildPage key={`${el}_${index}`} el={el} />
      ))} */}

      <br />

      {/* 2. memo해도 key 자체가 변경되므로 5개 모두 리렌더링 */}
      {data.split(" ").map((el, index) => (
        <ChildPage key={uuidv4()} el={el} />
      ))}

      <br />
      <button onClick={onClickChange}>change sentence</button>
    </div>
  );
}
