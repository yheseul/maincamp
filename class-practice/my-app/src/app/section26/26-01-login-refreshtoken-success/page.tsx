"use client";

import { withLoginCheck } from "@/commons/hocs/23-07-withLoginCheck";
import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";

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
  // 1. 페이지 접속하면 자동으로 데이터 받아짐(data는 글로벌 스테이트에 저장), 리렌더링 됨
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // 2. func 실행 시 data에 받아지고(data는 글로벌 스테이트에 저장), 리렌더링 됨
  // const [func, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  // 3. fetch처럼 사용하는 방법
  // const client = useApolloClient();
  // client.query({
  //   query: FETCH_USER_LOGGED_IN,
  // });

  const client = useApolloClient();

  const onClickButton = async () => {
    // api request
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return <button onClick={onClickButton}>click</button>;
  // return <div>WellCome. {data?.fetchUserLoggedIn.name}</div>;
}

export default withLoginCheck(LoginSuccess);
