// 부모는 RSC로 시작

import Rcc from "@/components/32-04-rcc-rsc-composition/01-rcc";
import Rsc from "@/components/32-04-rcc-rsc-composition/02-rsc";

export default function RccRscComposition() {
  console.log("server component");
  return (
    <div>
      <div>page</div>
      <Rcc>
        <Rsc />
      </Rcc>
    </div>
  );
}
