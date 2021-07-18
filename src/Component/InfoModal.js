import React from "react";
import { Modal } from "antd";
const InfoModal = ({ visible, setVisible, items }) => {
  const handleOk = () => {
    setVisible(false);
  };
  return (
    <Modal title={"INFO"} visible={visible} onOk={handleOk}>
      <div></div>
    </Modal>
  );
};

export default InfoModal;
