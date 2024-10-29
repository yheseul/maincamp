"use client";

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function LoginSuccess() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/section22/22-03-login-localstorage-check-success");
    }
  }, []);

  return <div>WellCome. {data?.fetchUserLoggedIn.name}</div>;
}
