export async function GET() {
  console.log("next server request");
  console.log("back-end(http://localhost:3000/mynaver1)");

  const result = await fetch("https://www.naver.com");
  const data = await result.text();

  // next 서버를 백엔드처럼 사용하여 api로 브라우저에 JSON 데이터 보냄
  return new Response(data, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}
