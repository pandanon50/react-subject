import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <div></div>
      <Link to="/beerlist">BeerList</Link>
    </div>
  );
};

export default Navigation;
