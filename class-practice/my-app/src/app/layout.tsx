import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import ApolloSetting from "@/commons/settings/06-02-apollo-setting";
import Layout from "@/commons/layout";
import ApolloUploadSetting from "@/commons/settings/26-02-apollo-header-error-refresh";
// import ApolloUploadSetting from "@/commons/settings/26-01-apollo-header-setting-onError";
// import ApolloUploadSetting from "@/commons/settings/22-02-apollo-header-setting-localstorage";
// import ApolloUploadSetting from "@/commons/settings/22-01-apollo-header-setting";
// import ApolloUploadSetting from "@/commons/settings/18-01-apollo-upload-setting copy";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "my app",
  description: "hi hello nice to meet you",
};

interface IProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: IProps) {
  return (
    <html lang="en">
      <meta />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div>{modal}</div>
        <div>--------layout--------</div>
        <ApolloUploadSetting>
          <Layout>{children}</Layout>
        </ApolloUploadSetting>
        <div>--------layout--------</div>
      </body>
    </html>
  );
}

/*
[next 실행 순서]
1. 주소창에 주소 입력
  => http://localhost3000/
2. 입력 된 주소의 폴더안의 page.tsx 찾기
  => app/page.tsx
    (ex. 주소가 /myPage 라면 app/myPage/page.tsx 찾기)
3. 해당 페이지 컴포넌트를 통째로 props에 넣어서 실행
  <RootLayout children={페이지컴포넌트} />
*/
