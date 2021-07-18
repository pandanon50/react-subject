import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Image } from "antd";

const BeerItem = (props) => {
  return (
    <TableRow>
      <TableCell>{props.no}</TableCell>
      <TableCell>
        <Image width={100} src={props.image} alt="profile" />
      </TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.firstBrewed}</TableCell>
      <TableCell>{props.contributer}</TableCell>
    </TableRow>
  );
};

export default BeerItem;
