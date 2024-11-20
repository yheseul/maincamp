import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JestUnitTestEvent from "@/app/section34/34-04-jest-unit-test-event/page";

it("버튼 눌렀을 때, 제대로 작동하는지 테스트", () => {
  render(<JestUnitTestEvent />);

  fireEvent.click(screen.getByRole("count-button"));

  expect(screen.getByRole("count")).toHaveTextContent("1");
});
