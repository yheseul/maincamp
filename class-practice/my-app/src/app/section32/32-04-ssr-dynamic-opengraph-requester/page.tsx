'use client';

// 요청자 관점
export default function HtmlScrapingPage() {
  const onClickScraping = async () => {
    // 1. 채팅 문자열에 주소가 있는지 찾기 (ex. http로 시작하는 것)

    // 네이버는 CORS 때문에 요청이 block 당함
    // 2. 해당 주소로 스크래핑 하기
    const travelproductId = '6724b4e52093f700292fa855';
    const result = await fetch(
      `http://localhost:3000/section32/32-04-ssr-dynamic-opengraph-provider/${travelproductId}`
    );
    const data = await result.text();
    console.log('🚀 ~ onClickScraping ~ data:', data);

    // 3. 메타태그엥서 오픈그래프(og~) 찾기
    const resultOg = data
      .split('<meta')
      .filter((el) => el.includes('property="og:'));

    console.log('🚀 ~ onClickScraping ~ resultOg:', resultOg);
  };

  return (
    <>
      <button onClick={onClickScraping}>채팅 입력 후 엔터!!</button>
    </>
  );
}
