"use client";

import { useEffect, useState } from "react";

export default function RestGetPage() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const func = async () => {
      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await result.json();
      setImageUrl(data.message);
    };
    func();
  }, []);

  return <img src={imageUrl} />;
}
