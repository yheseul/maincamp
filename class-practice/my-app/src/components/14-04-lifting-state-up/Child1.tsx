export default function Child1(props) {
  const onClickCountUp = () => {
    props.setCount(props.count + 1);
  };

  const onClickCountDown = () => {
    props.setCount(props.count - 1);
  };

  return (
    <>
      <div>Child1 Count: {props.count}</div>
      <button onClick={onClickCountUp}>up</button>
      <button onClick={onClickCountDown}>down</button>
    </>
  );
}
