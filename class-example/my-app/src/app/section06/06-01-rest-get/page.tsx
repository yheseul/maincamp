"use client";

export default function RestGetPage() {
  const onClickAsync = () => {
    const result = fetch("https://koreanjson.com/posts/1");
    console.log(result); // Promise
  };

  const onClickSync = async () => {
    const result = await fetch("https://koreanjson.com/posts/1");
    const data = await result.json();
    console.log(data);
    console.log(data.title);
  };

  return (
    <>
      <button onClick={onClickAsync}>rest api Synchronous</button>
      <br />
      <button onClick={onClickSync}>rest api Asynchronous</button>
    </>
  );
}
