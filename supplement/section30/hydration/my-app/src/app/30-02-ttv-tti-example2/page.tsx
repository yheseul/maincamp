"use client";

export default function TtvTtiExample2Page() {
  // hydration 이전에는 클릭 X
  const onClickButton = () => {
    alert("TTI");
  };

  return <button onClick={onClickButton}>button</button>;
}
