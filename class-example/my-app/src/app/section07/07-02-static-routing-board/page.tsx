"use client";

import { useRouter } from "next/navigation";

export default function StaticRoutingBoardPage() {
  const router = useRouter();

  const onClickSubmit1 = () => {
    router.push("/section07/07-02-static-routing-board-moved/1")
  }

  const onClickSubmit2 = () => {
    router.push("/section07/07-02-static-routing-board-moved/2")
  }

  const onClickSubmit3 = () => {
    router.push("/section07/07-02-static-routing-board-moved/3")
  }

  return (
    <>
      <button onClick={onClickSubmit1}>resister1</button>
      <br />
      <button onClick={onClickSubmit2}>resister2</button>
      <br />
      <button onClick={onClickSubmit3}>resister3</button>
    </>
  );
}
