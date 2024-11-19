"use server";

import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "제목을 입력해주세요."),
  contents: z.string().min(1, "내용을 입력해주세요."),
});

export default async function onSubmit(prevState, formData) {
  // Next 서버에서 실행
  console.log(formData, null);

  const title = formData.get("title");
  const contents = formData.get("contents");

  console.log(title);
  console.log(contents);

  const checkResult = schema.safeParse({
    title,
    contents,
  });

  if (checkResult.success) {
    //
  } else {
    return {
      errors: checkResult.error.flatten().fieldErrors,
    };
  }
}
