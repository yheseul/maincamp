import { add } from "@/app/section34/34-01-jest/page";
// import { describe, it } from "node:test";

it("sum test", () => {
  const result = add(3, 5);
  expect(result).toBe(8);
})

// describe("group", () => {
//   it("sum", () => {
//     // sum
//   })

//   it("minus", () => {
//     // minus
//   })
  
//   // ...
// })
