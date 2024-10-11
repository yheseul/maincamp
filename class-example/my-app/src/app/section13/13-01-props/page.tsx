import Box from "@/component/13-01-props";

export default function PropsPage() {
  // 1. props로 값 넘기기
  // return (
  //   <>
  //     <div>banana</div>
  //     <Box apple={3} />
  //     <div>banana</div>
  //   </>
  // );

  // 2. props로 jsx 넘기기
  return (
    <>
      <div>banana</div>
      <Box apple={<button>button</button>} />
      <div>banana</div>
    </>
  );
}
