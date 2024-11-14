"use client";

// 요청자 관점
export default function OpenGraphRequest() {
  const onClickScraping = async () => {
    // 1. 채팅 문자열에 주소가 있는지 찾기 (ex. http~ 로 시작하는 거)

    // 2. 해당 주소로 스크래핑
    const productId = "673046269712e0002973ef2c";
    const result = await fetch(
      `http://localhost:3000/section32/32-03-dynamic-opengraph-provider/${productId}`
    );
    const data = await result.text();
    console.log(data);

    // 3. 메타태그에서 오픈그래프(og:~~) 찾기
    const resultOg = data
      .split("<meta")
      .filter((el) => el.includes('property="og:'));
    console.log(resultOg);
  };
  return <button onClick={onClickScraping}>Scraping</button>;
}
