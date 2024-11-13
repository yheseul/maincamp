import { ReactNode } from "react";

export default function OpenGraphProviderLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <meta property="og:title" content="travelMarket" />
      <meta property="og:description" content="welcome travelMarket" />
      <meta property="og:image" content="http://~~~" />
      <>{children}</>
    </>
  );
}
