"use client";

import { ReactNode } from "react";
import LayoutNavigation from "./navigation";
import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import { usePathname } from "next/navigation";

const HIDDEN_HEADERS = [
  "/section12/12-03-library-carousel",
  "/section12/12-05-modal-alert",
];

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);

  const isHiddenHeader = HIDDEN_HEADERS.includes(pathname);

  return (
    <div>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%", background: "purple" }}>side bar</div>
        <div style={{ width: "80%" }}>{children}</div>
      </div>
      <LayoutFooter />
    </div>
  );
}
