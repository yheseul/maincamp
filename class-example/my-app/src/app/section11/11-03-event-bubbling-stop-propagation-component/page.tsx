"use client";

import Checkbox from "@/component/11-03-event-bubbling-stop-propagation-component";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards(page: 1) {
      number
      writer
      title
      contents
    }
  }
`;

export default function MapBoards() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  // const onClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //   // console.log(event.target.id)
  //   // console.log(event)

  //   alert(
  //     `${(event.currentTarget as HTMLButtonElement).id}님이 작성한 글입니다.`
  //   );
  // };

  const f1 = () => {
    alert("click1");
  };
  const f4 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    alert("click4");
  };
  const f5 = () => {
    alert("click5");
  };
  const f6 = () => {
    alert("click6");
  };

  return (
    <>
      {data?.fetchBoards.map((e) => (
        <div key={e.number} id={e.writer} onClick={f1}>
          <Checkbox />
          <span onClick={f4} style={{ margin: "10px" }}>
            {e.number}
          </span>
          <span onClick={f5} style={{ margin: "10px" }}>
            {e.title}
          </span>
          <span onClick={f6} style={{ margin: "10px" }}>
            {e.writer}
          </span>
        </div>
      ))}
    </>
  );
}
