"use client";

import Rsc from "@/components/32-03-parent-rcc-child-rsc/page";

export default function ParentRccChildRsc() {
  console.log("client component");

  // 부모가 RCC 이므로 자식을 RSC로 작동 안됨 (자식까지 모두 RCC로 작동)
  return (
    <div>
      <div>parent</div>
      <Rsc />
    </div>
  );
}
