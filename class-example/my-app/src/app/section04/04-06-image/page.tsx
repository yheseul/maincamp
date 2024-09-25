"use client";

import Image from "next/image";
import styles from "./styles.module.css";

export default function ImagePage() {
  return (
    <>
      <img className={styles.image} src="/images/cheese.webp" alt="cheese" />
      <Image
        className={styles.image}
        src="/images/cheese.webp"
        alt="cheese"
        width={0}
        height={0}
        sizes="100vw"
      />
    </>
  );
}
