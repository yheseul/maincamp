"use client";

import { Modal } from "antd";

export default function ModalAlert() {
  const onCLickSuccess = () => {
    Modal.success({ content: "some messages...some messages..." });
  };

  const onClickError = () => {
    Modal.error({
      title: "This is an error message",
      content: "some messages...some messages...",
    });
  };

  return (
    <>
      <button onClick={onCLickSuccess}>Success</button>
      <button onClick={onClickError}>Error</button>
    </>
  );
}
