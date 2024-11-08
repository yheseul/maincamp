"use client";

import { useCallback, useMemo, useState } from "react";

export default function RerenderMemoizationAdvancedPage() {
  console.log("Render Component");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. 변수 기억 => useMemo
  // const aaa = Math.random();
  // console.log(aaa);
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  // 2. 함수 기억 => useCallback
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // 3. useCallback 주의사항 => state까지 기억
  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    // setCountState(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // 4. useMemo로 useCallback 만듬
  const onClickCountState = useMemo(() => {
    return () => {
      console.log(countState + 1);
      setCountState(countState + 1);
    };
  }, []);

  return (
    <div>
      <div>count(let): {countLet}</div>
      <button onClick={onClickCountLet}>BUTTON count(let) + 1</button>

      <div>count(state): {countState}</div>
      <button onClick={onClickCountState}>BUTTON count(state) + 1</button>
    </div>
  );
}
