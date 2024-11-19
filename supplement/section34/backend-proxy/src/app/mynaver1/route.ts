export function GET() {
  console.log("next server request");
  console.log("back-end(http://localhost:3000/mynaver1)");

  // next 서버를 백엔드처럼 사용하여 api로 브라우저에 JSON 데이터 보냄
  return new Response(JSON.stringify({ message: "success" }), {
    status: 200,
  });
}
