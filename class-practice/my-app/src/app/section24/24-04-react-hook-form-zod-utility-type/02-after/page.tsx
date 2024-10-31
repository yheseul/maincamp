import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISchema, schema } from "./schema";

const setting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function InputRefactoringAfterPage() {
  const { register, handleSubmit, formState } = useForm<ISchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const [myFunction] = useMutation(setting);

  const onClickSubmit = async (data: ISchema) => {
    console.log(data);

    const result = await myFunction({
      variables: {
        title: data.title,
        contents: data.contents,
      },
    });
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      title : <input type="text" placeholder="title" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <br />
      content :{" "}
      <input type="text" placeholder="contents" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <br />
      address :{" "}
      <input
        type="text"
        placeholder="address"
        {...register("boardAddress.addressDetail")}
      />
      <br />
      <button disabled={!formState.isValid} type="submit">
        Graphql APl
      </button>
    </form>
  );
}

/*
<form>
  <button type="button"></button> // 직접 onClick 추가
  <button type="reset"></button> // 폼 안에 있는 인풋 전체 초기화
  <button type="submit"></button> // 폼 등록/수정 => default
</form>
*/
