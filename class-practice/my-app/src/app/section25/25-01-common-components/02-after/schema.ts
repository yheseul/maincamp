import { UpdateBoardInput } from "@/commons/graphql/graphql";
import { z } from "zod";

// 1. 내가 만든 z.object로 타입 뽑아내기
type mySchema = z.infer<typeof schema>;

// 2. 이미 타입이 있는 경우, 이 타입을 적용하여 schema 생성
interface IMySchema {
  writer: string;
  title: string;
  contents: string;
}

// 2-2) 이미 있는 타입을 다운로드 받는 경우 => Omit으로 사용 가능(단, 안정성에 주의)
export interface ISchema extends Pick<UpdateBoardInput, "title" | "contents"> {
  // hobby: string = > 추가 가능
}

export const schema: z.ZodType<ISchema> = z.object({
  // writer: z.string().min(1, { message: "작성자를 입력해 주세요." }),
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
