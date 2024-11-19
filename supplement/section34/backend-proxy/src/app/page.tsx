"use client";

export default function Home() {
  const onClickScraping1 = async () => {
    const result = await fetch("https://www.naver.com"); // CORS error
    const data = await result.text();
    console.log(data);
  };

  const onClickScraping2 = async () => {
    // 1. 직접 만든 프록시 API
    // const result = await fetch("http://localhost:3000/mynaver2");
    // const data = await result.text();
    // console.log(data);

    const result2 = await fetch("http://localhost:3000/mynaver3");
    const data2 = await result2.text();
    console.log(data2);
  };

  return (
    <div className="flex flex-col gap-2">
      <button onClick={onClickScraping1}>scraping(non-proxy)</button>
      <button onClick={onClickScraping2}>scraping(proxy)</button>
    </div>
  );
}
