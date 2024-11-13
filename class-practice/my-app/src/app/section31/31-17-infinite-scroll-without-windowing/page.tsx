"use client";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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

export default function infiniteScrollWithoutWindowing() {
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onNext = () => {
    if (data === undefined) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards?.length) {
          setHasMore(false);
          return;
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div>
      <InfiniteScroll
        next={onNext}
        hasMore={hasMore}
        loader={<div>loading...</div>}
        dataLength={data?.fetchBoards.length ?? 0}
      >
        {data?.fetchBoards.map((el) => (
          <div key={el.number}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        ))}
      </InfiniteScroll>
      <Link href="/section31/31-17-infinite-scroll-without-windowing-moved">
        move
      </Link>
    </div>
  );
}
