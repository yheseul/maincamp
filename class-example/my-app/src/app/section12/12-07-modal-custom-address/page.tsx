"use client";

import React, { useState } from "react";
import { Button, Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function ModalCustomAddress() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleComplete = (data: object) => {
    console.log(data);
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      {/* <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        post: <input type="text" placeholder="text..." />
      </Modal> */}

      {isModalOpen && (
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
