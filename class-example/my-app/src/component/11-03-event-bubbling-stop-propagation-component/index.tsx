export default function Checkbox() {
  const f2 = () => {
    alert("click2");
  };
  const f3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    alert("click3");
  };

  return (
    <>
      <span onClick={f2}>
        <input type="checkbox" onClick={f3} />
      </span>
    </>
  );
}
