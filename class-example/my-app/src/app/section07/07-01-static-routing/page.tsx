"use client";

import { useRouter } from "next/navigation";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickSubmit = () => {
    router.push("/section07/07-01-static-routing-moved")
  }

  return (
    <>
      <button onClick={onClickSubmit}>resister</button>
    </>
  );
}
