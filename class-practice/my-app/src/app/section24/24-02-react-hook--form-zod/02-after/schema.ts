import { z } from "zod";

export const schema = z.object({
  writer: z.string().min(1, { message: "작성자를 입력해 주세요." }),
  // writer: z.string().min(3, {message: "작성자는 세글자 이상이여야 합니다."})
  title: z.string().min(1, { message: "제목을 입력해 주세요." }),
  contents: z.string().min(1, { message: "내용을 입력해 주세요." }),

  // hobby: z.string().optional(),
  // email: z.string().email("이메일 형식이여야 합니다."),
  // password: z
  //   .string()
  //   .min(4, { message: "최소 4자리 이상 입력해주세요." })
  //   .max(15, { message: "최대 15 이하로 입력해주세요." }),
  // phone: z
  //   .string()
  //   .regex(/^\d{3}-\d{3,4}-\d{4}$/, {
  //     message: "휴대폰 형식에 알맞지 않습니다.",
  //   }),
});