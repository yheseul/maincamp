"use client";

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [나의함수] = useMutation(CREATE_BOARD);

  const onChangeFile = (index) => async (event) => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
    if (file === undefined) return;
    console.log(file);
    console.log("파일까지 나옴");

    // 2. 임시URL 생성 => (진짜URL - 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유: event.target은 태그만을 가르키지 않음
      if (typeof event.target?.result === "string") {
        const tempUrls = [...imageUrl];
        tempUrls[index] = event.target?.result;
        setImageUrl(tempUrls);

        const tempFiles = [...files];
        tempFiles[index] = file;
        setFiles(tempFiles);

        setFiles(file);
      }
    };
  };

  const onClickSubmit = async () => {
    // 1. uploadFile
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } });

    // const resultUrls = [resultFile0.data?.uploadFile.url, resultFile1.data?.uploadFile.url, resultFile2.data?.uploadFile.url]

    // 1-2. promise all 사용
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);

    // console.log(results);
    // const resultUrls = results.map((el) => el.data?.uploadFile.url);

    // 1-3 promise all refactoring
    const results = await Promise.all(
      files.map((el) => uploadFile({ variables: { file: el } }))
    );

    console.log(results);
    const resultUrls = results.map((el) => el.data?.uploadFile.url);

    // 2. createBoard
    const result = await 나의함수({
      variables: {
        // variables 이게 $ 역할을 함
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용입니다@@@",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl[0]} />
      <img src={imageUrl[1]} />
      <img src={imageUrl[2]} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}

      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
