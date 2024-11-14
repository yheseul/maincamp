export const revalidate = 10; // 몇 초 동안 임시저장 (캐시) => 디폴트 1년

export default async function RccCache() {
  // await fetch("https://koreanjson.com/posts/1");
  console.log("success");
  return <button>click</button>;
}

// 모든 컴포넌틀흘 RCC로 하면 안좋은 이유
// 1, 불필요한 하이드레이션 발생 => "success" 브라우저에서 재실행
// 2. 불필요한 하이드레이션을 위한 코드 다운로드로 인한 용량 증가

// 모든 컴포넌트를 RSC로 할 수 없는 이유
// 1. onClick, onChange, useState, useEffect, useQuery 등은 브라우저에서만 가능
// => 과거 리액트17에서는 모든 컴포넌트가 RSC
