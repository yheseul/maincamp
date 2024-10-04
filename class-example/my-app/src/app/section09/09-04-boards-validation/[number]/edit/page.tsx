import BoardsWrite from "@/component/09-04-boards-write-validation";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function BoardsEdit() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(params.number) },
  });
  return (
    <>
      <BoardsWrite isEdit={true} data={data} />
    </>
  );
}
