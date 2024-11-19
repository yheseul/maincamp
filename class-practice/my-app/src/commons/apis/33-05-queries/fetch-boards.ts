import { gql } from "graphql-request";
import { BoardForAddressSet } from "../33-05-fragment/board-for-address-Set";
import { BoardForLikeSet } from "../33-05-fragment/board-for-likeCount-Set";

export const FETCH_BOARDS = gql`
  ${BoardForAddressSet}
  ${BoardForLikeSet}

  query fetchBoards(
    $page: Int
    $isBoardForAddressSet: Boolean = false
    $isBoardForLikeSet: Boolean = false
  ) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents

      ...BoardForAddressSet @include(if: $isBoardForAddressSet)
      ...BoardForLikeSet @include(if: $isBoardForLikeSet)
    }
  }
`;
