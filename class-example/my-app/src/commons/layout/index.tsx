import { ReactNode } from "react";
import LayoutNavigation from "./navigation";
import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <LayoutHeader />
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
