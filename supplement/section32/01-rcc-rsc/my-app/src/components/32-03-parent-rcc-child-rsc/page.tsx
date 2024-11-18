// "use client" 를 붙이지 않았지만, 부코가 RCC 이므로 자식도 RCC

export default function Rsc() {
  console.log("???(client) component"); // 브라우저에서 찍히면 클라이언트 컴포넌트
  return <div>child</div>;
}
