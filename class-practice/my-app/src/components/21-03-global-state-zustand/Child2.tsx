import { useCountStore } from "@/commons/stores/21-03-count-store";

export default function Child2() {
  const { count, setCount } = useCountStore();

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onClickCountDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>Child2 Count: {count}</div>
      <button onClick={onClickCountUp}>up</button>
      <button onClick={onClickCountDown}>down</button>
    </>
  );
}
