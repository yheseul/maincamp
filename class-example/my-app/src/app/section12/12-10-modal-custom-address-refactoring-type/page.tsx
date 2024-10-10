"use client";

import React, { useState } from "react";
import { Button, Modal } from "antd";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalCustomAddressRefactoring() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ontoggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    console.log(data);
    ontoggleModal();
  };

  return (
    <>
      <Button type="primary" onClick={ontoggleModal}>
        Open Modal
      </Button>

      {/* <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        post: <input type="text" placeholder="text..." />
      </Modal> */}

      {isModalOpen && (
        <Modal open={isModalOpen} onOk={ontoggleModal} onCancel={ontoggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
