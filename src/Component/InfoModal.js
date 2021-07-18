import React from "react";
import { Modal } from "antd";
import InfoItem from "./InfoItem";
const InfoModal = ({ visible, setVisible, items }) => {
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const title = Object.keys(items);
  const contents = Object.values(items);
  return (
    <Modal
      title={"INFO"}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    ></Modal>
  );
};

export default InfoModal;
