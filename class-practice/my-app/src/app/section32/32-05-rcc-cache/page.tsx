"use client";

export default function RccNoCache() {
  const onClick = async () => {
    await fetch("https://koreanjson.com/posts/1");
    console.log("success");
  };
  return <button onClick={onClick}>click</button>;
}
