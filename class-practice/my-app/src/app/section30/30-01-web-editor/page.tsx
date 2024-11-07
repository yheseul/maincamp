"use client";

import React, { FormEvent, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Modal } from "antd";
import dynamic from "next/dynamic";

// const ReactQuill = dynamic(() => import("react-quill"), {
//   ssr: false,
// });

export default function WebEditor() {
  const [value, setValue] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { Modal } = await import("antd"); // code-spliting
    Modal.success({ content: "success!!" });
  };

  return (
    <form onSubmit={onSubmit}>
      <b>writer: </b><input type="text" className="border-double border-2 border-indigo-600" /><br />
      <b>password: </b><input type="password" className="border-dashed border-2 border-indigo-600" /><br />
      <b>title: </b><input type="text" className="border-dotted border-2 border-indigo-600" /><br />
      <b>contents </b><ReactQuill theme="snow" value={value} onChange={setValue} />
      <button>submit</button>
    </form>
  );
}
