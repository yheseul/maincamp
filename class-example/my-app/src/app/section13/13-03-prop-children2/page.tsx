"use client";

import Box from "@/component/13-03-props-children2";

export default function PropsChildren2() {
  return (
    <>
      <div>banana</div>
      <input type="text" />
      <Box color="red">
        <button>button</button>
      </Box>
      <div>banana</div>
    </>
  );
}
