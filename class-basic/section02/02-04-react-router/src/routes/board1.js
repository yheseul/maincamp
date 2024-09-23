import { useState } from "react";

const Board1 = () => {
  const [writer, setIWriter] = useState("");
  const [title, setITitle] = useState("");
  const [content, setIContent] = useState("");

  const onChangeWriter = (event) => {
    setIWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setITitle(event.target.value);
  };

  const onChangeContent = (event) => {
    setIContent(event.target.value);
  };

  const onClickSubmit = () => {
    console.log(writer);
    console.log(title);
    console.log(content);
    alert("submit!");
  };

  return (
    <>
      writer : <input type="text" onChange={onChangeWriter} /><br />
      title : <input type="text" onChange={onChangeTitle} /><br />
      content : <input type="text" onChange={onChangeContent} /><br />
      <button onClick={onClickSubmit}>submit</button>
    </>
  );
};

export default Board1;
