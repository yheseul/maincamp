"use client";

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";

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
import "react-quill/dist/quill.snow.css";

export default function WebEditor() {
  const [myFunction] = useMutation(setting);
  const router = useRouter();

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value) => {
    console.log(value);
    setValue("contents", value);

    // 변경 감지해서 검증
    trigger("contents");
  };

  const onSubmit = async (data) => {
    // data.preventDefault(); => handleSubmit에서 자동으로 해줌
    console.log(data);

    const result = await myFunction({
      variables: {
        createBoardInput: {
          ...data,
          // writer: data.writer,
          // password: data.password,
          // title: data.title,
          // contents: data.contents,
        },
      },
    });
    console.log(result);

    const { Modal } = await import("antd"); // code-spliting
    Modal.success({ content: "success!!" });

    const boardId = result.data.createBoard._id

    router.push(`/section30/30-02-web-editor-hook-form/${boardId}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <b>writer: </b>
      <input
        type="text"
        {...register("writer")}
        className="border-double border-2 border-indigo-600"
      />
      <br />
      <b>password: </b>
      <input
        type="password"
        {...register("password")}
        className="border-dashed border-2 border-indigo-600"
      />
      <br />
      <b>title: </b>
      <input
        type="text"
        {...register("title")}
        className="border-dotted border-2 border-indigo-600"
      />
      <br />
      <b>contents </b>
      <ReactQuill onChange={onChangeContents} />
      <button>submit</button>
    </form>
  );
}
