export default function TtvTtiExample1Page() {
  return (
    <div>
      <div>browser+server1</div>
      {process.browser && <div>browser1</div>}
      {typeof window !== "undefined" && <div>browser2</div>}
      <div>browser+server2</div>
    </div>
  );
}
