"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLoadStore } from "../stores/26-02-load-store";
import { useAccessTokenStore } from "../stores/22-01-access-token-store";

export const withLoginCheck =
  (Component: () => JSX.Element) =>
  <P extends object>(props: P) => {
    const router = useRouter();
    const { isLoaded } = useLoadStore();
    const { accessToken } = useAccessTokenStore();

    useEffect(() => {
      if (!isLoaded) return;
      if (accessToken) return;

      alert("로그인 후 이용 가능");
      router.push("/section26/26-02-login-refreshtoken-refresh");
    }, [isLoaded]);
    
    return <Component {...props} />;
  };
