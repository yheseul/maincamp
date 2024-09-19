const Counter = (props) => {
  const [count, setCount] = React.useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </>
  );
};
