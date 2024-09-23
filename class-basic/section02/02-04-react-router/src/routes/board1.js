import { useState } from "react";

const Board1 = () => {
  const [writer, setIWriter] = useState("");
  const [title, setITitle] = useState("");
  const [content, setIContent] = useState("");
  const [isActive, setIsActive] = useState(false);

  const onChangeWriter = (event) => {
    setIWriter(event.target.value);
    event.target.value && title && content ? setIsActive(true) : setIsActive(false);
  };

  const onChangeTitle = (event) => {
    setITitle(event.target.value);
    writer && event.target.value && content ? setIsActive(true) : setIsActive(false);
  };

  const onChangeContent = (event) => {
    setIContent(event.target.value);
    writer && title && event.target.value ? setIsActive(true) : setIsActive(false);
  };

  const onClickSubmit = () => {
    console.log(writer);
    console.log(title);
    console.log(content);
    alert("submit!");
  };

  return (
    <>
      writer : <input type="text" onChange={onChangeWriter} />
      <br />
      title : <input type="text" onChange={onChangeTitle} />
      <br />
      content : <input type="text" onChange={onChangeContent} />
      <br />
      <button
        onClick={onClickSubmit}
        style={{ backgroundColor: isActive ? "yellow" : "gray" }}
      >
        submit
      </button>
    </>
  );
};

export default Board1;
