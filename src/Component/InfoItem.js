import React from "react";
import styled from "styled-components";
import BoilVolume from "./Info/BoilVolume";
import FoodPairing from "./Info/FoodPairing";
import Ingredients from "./Info/Ingredients";
import Method from "./Info/Method";

// const Item = styled.div`
//     colors
// `

const TitleSwitchItem = ({ title, item }) => {
  switch (title) {
    case "boil_volume":
      return <BoilVolume boil_volume={item} />;

    case "food_pairing":
      return <FoodPairing item={item} />;

    case "ingredients":
      return (
        <Ingredients hops={item?.hops} malt={item?.malt} yeast={item?.yeast} />
      );

    case "method":
      return <Method method={item} />;

    case "volume":
      return <BoilVolume volume={item} />;
    default:
      return <div>{item}</div>;
  }
};

const InfoItem = ({ title, item }) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        <TitleSwitchItem title={title} item={item} />
      </div>
    </div>
  );
};

export default InfoItem;
