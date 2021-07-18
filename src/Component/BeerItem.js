import React, { useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Image } from "antd";
import InfoModal from "./InfoModal";

const BeerItem = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && (
        <InfoModal
          items={props}
          visible={visible}
          setVisible={setVisible}
        ></InfoModal>
      )}
      <TableRow>
        <TableCell>{props.no}</TableCell>
        <TableCell>
          <Image width={100} src={props.image} alt="profile" />
        </TableCell>
        <TableCell onClick={() => setVisible(true)}>{props.name}</TableCell>
        <TableCell>{props.firstBrewed}</TableCell>
        <TableCell>{props.contributer}</TableCell>
      </TableRow>
    </>
  );
};

export default BeerItem;
