"use client";

import { checkValidationFile } from "@/commons/libraries/18-03-validation-file";
import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef(null);

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0]; //<input type="file multiple />
    console.log(file);

    // if (file.size > 5 * 1024 * 1024) {
    //   alert("파일 용량이 너무 큽니다.(제한: 5MB)");
    //   return;
    // }

    // if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    //   alert("jpeg 또는 png 파일만 업로드 가능합니다!");
    //   return;
    // }

    const isValid = checkValidationFile(file);
    if(!isValid) return

    const result = await uploadFile({ variables: { file } });
    console.log(result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url ?? "");
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <div
        style={{ width: "100px", height: "100px", background: "gray" }}
        onClick={onClickImage}
      >
        select image
      </div>
      <input
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
        ref={fileRef}
        accept="image/jpeg,image/png"
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
