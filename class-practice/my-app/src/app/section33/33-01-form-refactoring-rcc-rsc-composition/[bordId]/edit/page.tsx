"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISchema, schema } from "./schema";
import InputSoftFull from "@/commons/ui/25-04-input-base-typescript-generic2";
import { ButtonSoftMFull } from "@/commons/ui/25-05-button-base-typescript-generic-npm-publish";

export default function InputRefactoringAfterPage() {
  const methods = useForm<ISchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: ISchema) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onClickSubmit)}>
        title(component): <InputSoftFull<ISchema> type="text" keyName="title" />
        contents(component):{" "}
        <InputSoftFull<ISchema> type="text" keyName="contents" />
        <ButtonSoftMFull>Graphql APl</ButtonSoftMFull>
      </form>
    </FormProvider>
  );
}
