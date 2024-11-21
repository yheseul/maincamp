"use client";

import { useAccessTokenStore } from "@/commons/stores/22-01-access-token-store";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE);
  const { setAccessToken } = useAccessTokenStore();

  const onClickLogin = async () => {
    // 1. 로그인 mutation 날려서 accessToken 받아오기
    const result = await loginUserExample({
      variables: {
        email: "proro@gamil.com",
        password: "1234",
      },
    });
    const accessToken = result.data.loginUserExample.accessToken;
    console.log(accessToken);

    // 2. 받아온 accessToken globalState에 저장하기
    if (accessToken === undefined) {
      alert("fail");
    }

    setAccessToken(accessToken);
    // localStorage.setItem("accessToken", accessToken); => 더 이상 사용하지 않음(refreshToken 사용)

    // 3. 로그인 성공 페이지로 이동하기
    router.push("/section26/26-01-login-refreshtoken-success");
  };

  return (
    <div>
      email : <input type="email" />
      password : <input type="password" />
      <button onClick={onClickLogin}>LOGIN</button>
    </div>
  );
}
