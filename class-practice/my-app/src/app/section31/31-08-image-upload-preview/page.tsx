"use client";

import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImagePreview() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef(null);

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0]; //<input type="file multiple />
    console.log(file);

    // 1. 임시 url 생성 (브라우저에서 접근 가능)
    // const result = URL.createObjectURL(file);
    // console.log(result);

    // 2. 임시 url 생성(다른 브라우저에서도 접근 가능 , 용량 큼)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log(event.target?.result);
      if (typeof event.target?.result === "string")
        setImageUrl(event.target?.result);
    };

    // const result = await uploadFile({ variables: { file } });
    // console.log(result.data.uploadFile.url);
    // setImageUrl(result.data.uploadFile.url ?? "");
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <button style={{ background: "gray" }} onClick={onClickImage}>
        select image
      </button>
      <input
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
        ref={fileRef}
      />
      {/*<img src={`https://storage.googleapis.com/${imageUrl}`} />*/}
      <img src={imageUrl} />
    </>
  );
}
