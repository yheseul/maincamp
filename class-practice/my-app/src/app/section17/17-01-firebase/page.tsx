"use client";

import { firebaseApp } from "@/commons/libraries/17-01-firebase";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore"

export default function FireBasePage() {
  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "yeseul",
      title: "hi",
      contents: "hello",
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map(el => el.data())
    console.log(datas);
  };

  return (
    <>
      <button onClick={onClickSubmit}>submit</button>
      <button onClick={onClickFetch}>fetch</button>
    </>
  );
}
