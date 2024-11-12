"use client";

import Link from "next/link";
import { useEffect } from "react";

const preloadImage = [];

export default function ImagePreload() {
  useEffect(() => {
    const img = new Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg";
    img.onload = () => {
      preloadImage.push(img);
    };
  }, []);

  return <Link href={"/section31/31-15-image-preload-moved"}>page move</Link>;
}
