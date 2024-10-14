import usePagination from "@/commons/hooks/14-05-pagination-last-refactoring/pagination/hook";
import { IPagination } from "@/commons/types/14-05-pagination-last-refactoring/types";

export default function Pagination(props: IPagination) {
  const { startPage, onClickPage, onClickPrevPage, onClickNextPage } =
    usePagination(props);

  return (
    <div>
      <span onClick={onClickPrevPage}>prev</span>
      {new Array(10).fill("page").map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <span
              key={index + startPage}
              id={String(String(index + startPage))}
              onClick={onClickPage}
              style={{ margin: "5px" }}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>next</span>
    </div>
  );
}
