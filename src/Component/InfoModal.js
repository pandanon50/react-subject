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
  const contents = Object.entries(items);

  return (
    <Modal
      title={"INFORMATION"}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {contents?.map((v, i) => {
        return <InfoItem key={`${v[0]}`} title={v[0]} item={v[1]} />;
      })}
    </Modal>
  );
};

export default InfoModal;
