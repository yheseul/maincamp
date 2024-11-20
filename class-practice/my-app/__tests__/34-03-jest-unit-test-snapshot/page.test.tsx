import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import JestUnitTestSnapshot from "@/app/section34/34-03-jest-unit-test-snapshot/page";

it("기존 사진이랑 바뀐 거 비교 - snapshot test", () => {
  const result = render(<JestUnitTestSnapshot />);
  expect(result.container).toMatchSnapshot();
});
