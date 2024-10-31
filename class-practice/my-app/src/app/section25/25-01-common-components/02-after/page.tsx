"use client";

import { from, gql, useMutation } from "@apollo/client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISchema, schema } from "./schema";
import Input from "@/commons/ui/25-01-input";
import Button from "@/commons/ui/25-01-button";

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
        title: <Input type="text" keyName="title" />
        <div style={{ color: "red" }}>
          {methods.formState.errors.title?.message}
        </div>
        <br />
        contents: <Input type="text" keyName="contents" />
        <div style={{ color: "red" }}>
          {methods.formState.errors.contents?.message}
        </div>
        <br />
        <Button>Graphql APl</Button>
      </form>
    </FormProvider>
  );
}
