"use client";

import { gql, useMutation } from "@apollo/client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISchema, schema } from "./schema";
import InputSoftFull from "@/commons/ui/25-04-input-base-typescript-generic2";
import { ButtonThinFitM } from "@/commons/ui/25-04-button-base-typescript-generic2";

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
  const methods = useForm<ISchema>({
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onClickSubmit)}>
        {/* title(function):{" "}
        {InputSoftFull<ISchema>({ type: "text", keyName: "title" })} */}
        title(component): <InputSoftFull<ISchema> type="text" keyName="title" />
        <div style={{ color: "red" }}>
          {methods.formState.errors.title?.message}
        </div>
        <br />
        {/* contents(function):{" "}
        {InputSoftFull<ISchema>({ type: "text", keyName: "contents" })} */}
        contents(component):{" "}
        <InputSoftFull<ISchema> type="text" keyName="contents" />
        <div style={{ color: "red" }}>
          {methods.formState.errors.contents?.message}
        </div>
        <br />
        <ButtonThinFitM>Graphql APl</ButtonThinFitM>
      </form>
    </FormProvider>
  );
}
