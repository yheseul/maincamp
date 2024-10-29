"use client";

import { useAccessTokenStore } from "@/commons/stores/22-01-access-token-store";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useAccessTokenStore();

  const onClickLogin = async () => {
    // 1. 로그인 mutation 날려서 accessToken 받아오기
    const result = await loginUser({
      variables: {
        email: "proro@gamil.com",
        password: "1234",
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    // 2. 받아온 accessToken globalState에 저장하기
    if (accessToken === undefined) {
      alert("fail");
    }

    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);

    // 3. 로그인 성공 페이지로 이동하기
    router.push("/section22/22-02-login-localstorage-success");
  };

  return (
    <div>
      email : <input type="email" />
      password : <input type="password" />
      <button onClick={onClickLogin}>LOGIN</button>
    </div>
  );
}
