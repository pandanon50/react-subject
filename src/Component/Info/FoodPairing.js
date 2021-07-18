import React from "react";

const FoodPairing = ({ item }) => {
  return item.map((v, i) => <div key={i}>{v}</div>);
};

export default FoodPairing;
