import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JestUnitTestPage from "@/app/section34/34-02-jest-unit-test/page";

it("예상대로 렌더 되는지 테스트", () => {
  render(<JestUnitTestPage />);

  const myText1 = screen.getByText("hello");
  expect(myText1).toBeInTheDocument();

  const myText2 = screen.getByText("hobby:");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("go");
  expect(myText3).toBeInTheDocument();
});
