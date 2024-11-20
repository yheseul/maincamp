import JestUnitTestMocking from "@/app/section34/34-05-jest-unit-test-mocking/page";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

it("게시글 잘 등록되었는지 테스트", async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  render(
    <ApolloProvider client={client}>
      <JestUnitTestMocking />
    </ApolloProvider>
  );
  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "hi" },
  });

  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "hello" },
  });

  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "welcome" },
  });

  fireEvent.click(screen.getByRole("submit-button"));

  await waitFor(() => {
    const router = useRouter();
    expect(router.push).toHaveBeenCalled(); // 위에서 mock을 만들어서, 실제 이동되지 않음.
  });
});
