"use client";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FixedSizeList as List } from "react-window";

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
        loader={<></>}
        dataLength={data?.fetchBoards.length ?? 0}
        scrollableTarget="scrollId"
      >
        <List
          height={300}
          width={"100%"}
          itemSize={50}
          itemCount={data?.fetchBoards.length}
          itemData={data?.fetchBoards}
          outerElementType={tag}
        >
          {({ index, style, data }) => (
            <div style={style}>
              <span style={{ margin: "10px" }}>{data[index].title}</span>
              <span style={{ margin: "10px" }}>{data[index].writer}</span>
            </div>
          )}
        </List>
      </InfiniteScroll>
      <Link href="/section31/31-18-infinite-scroll-windowing-moved">move</Link>
    </div>
  );
}

const tag = (props) => <div id="scrollId" {...props} />;
