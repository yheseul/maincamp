"use client";

import { withLoginCheck } from "@/commons/hocs/23-07-withLoginCheck";
import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

function LoginSuccess() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <div>WellCome. {data?.fetchUserLoggedIn.name}</div>;
}

export default withLoginCheck(LoginSuccess);
