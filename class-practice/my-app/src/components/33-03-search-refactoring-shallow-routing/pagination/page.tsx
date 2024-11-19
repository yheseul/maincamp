"use client"

import { MouseEvent } from "react";

export default function Pagination() {
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    // refetch({ page: Number(event.currentTarget.id) });
  };
  return (
    <div>
      {new Array(10).fill("page").map((_, index) => (
        <span
          key={index + 1}
          id={String(String(index + 1))}
          onClick={onClickPage}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}
