import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import BeerItem from "../Component/BeerItem";

import { useSelector, useDispatch } from "react-redux";
import { GET_BEER_REQUEST } from "../Modules/beer";

const Beerlist = () => {
  const dispatch = useDispatch();

  const { beers, getBeerLoading, getBeerDone, getBeerError } = useSelector(
    (state) => state.beer
  );

  useEffect(() => {
    dispatch({
      type: GET_BEER_REQUEST,
    });
  }, []);

  return (
    <div style={{ maxWidth: "100%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beers &&
            beers.map((item) => {
              return <BeerItem key={item?.id} info={item} />;
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Beerlist;
