"use client";

import React, { useState } from "react";
import { Rate } from "antd";

export default function LibraryRatePage() {
  const [value, setValue] = useState(3);

  // 1.
  // const onChangeStar = (value: number) => {
  //   setValue(value);
  // };

  // return <Rate onChange={onChangeStar} value={value} />;

  // 2.
  // const onChangeStar = (value: number) => setValue(value);

  // return <Rate onChange={onChangeStar} value={value} />;

  // 3.
  // return <Rate onChange={(value) => setValue(value)} value={value} />;

  // 4.
  return <Rate onChange={setValue} value={value} />;
}
