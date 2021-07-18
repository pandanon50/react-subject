import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import BeerItem from "../Component/BeerItem";

const Beerlist = () => {
  const [beer, setBeer] = useState([]);

  const getBeer = async () => {
    try {
      const { data } = await axios.get("https://api.punkapi.com/v2/beers");
      setBeer(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div style={{ maxWidth: "100%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>first_brewed</TableCell>
            <TableCell>Contributer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beer &&
            beer.map((item) => {
              return (
                <BeerItem
                  key={item?.id}
                  no={item?.id}
                  image={item?.image_url}
                  name={item?.name}
                  firstBrewed={item?.first_brewed}
                  contributer={item?.contributed_by}
                />
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Beerlist;
