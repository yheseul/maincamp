"use client";

import UseLoginCheck from "@/commons/hooks/08-06-use-login-check";

export default function CustomHookPage() {
  const { loginCheck } = UseLoginCheck();
  const onClickSubmit = () => {
    // 1. check login
    loginCheck();

    // 2. payment
  };
  return (
    <>
      <button onClick={onClickSubmit}>payment</button>
    </>
  );
}
