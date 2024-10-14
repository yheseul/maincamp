import { FetchBoardsQuery } from "@/commons/graphql/graphql";

export default function List({ data }: { data?: FetchBoardsQuery }) {
  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <div key={el.number}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
