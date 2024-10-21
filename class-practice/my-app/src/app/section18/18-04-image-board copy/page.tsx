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

const setting = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
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
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    console.log(result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url ?? "");
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  /////////////////////////////////////////////////////////////////////////////////

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myFunction] = useMutation(setting);

  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {
        createBoardInput: {
          writer,
          password: "1234",
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      <br />
      writer :{" "}
      <input type="text" onChange={onChangeWriter} placeholder="writer" />
      <br />
      title : <input type="text" onChange={onChangeTitle} placeholder="title" />
      <br />
      content :{" "}
      <input type="text" onChange={onChangeContents} placeholder="contents" />
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
      <button onClick={onClickSubmit}>Graphql APl</button>
    </>
  );
}
