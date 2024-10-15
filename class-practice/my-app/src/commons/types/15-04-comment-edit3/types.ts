import { FetchBoardsQuery } from "@/commons/graphql/graphql";

export interface ICommentItem {
  el: FetchBoardsQuery["fetchBoards"][0];
}