import { gql } from "@apollo/client";

export const BoardForLikeSet = gql`
  fragment BoardForAddressSet on Board {
    likeCount
    dislikeCount
  }
`;
