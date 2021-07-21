import React, { useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Image } from "antd";
import InfoModal from "./InfoModal";

const BeerItem = ({ info }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible && (
        <InfoModal items={info} visible={visible} setVisible={setVisible} />
      )}
      <TableRow>
        <TableCell>{info.id}</TableCell>
        <TableCell>
          <Image width={100} src={info.image_url} alt="profile" />
        </TableCell>
        <TableCell onClick={() => setVisible(true)}>{info.name}</TableCell>
      </TableRow>
    </>
  );
};

export default BeerItem;
