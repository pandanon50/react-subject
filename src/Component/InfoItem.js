import React from "react";
import styled from "styled-components";
import BoilVolume from "./Info/BoilVolume";
import FoodPairing from "./Info/FoodPairing";
import Ingredients from "./Info/Ingredients";
import Method from "./Info/Method";
import colors from "../Common/colors";
const Item = styled.div`
  .title {
    color: ${colors.blue};
  }
`;

const CommonDiv = styled.div`
  font-size: 1rem;
`;

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
      return <CommonDiv>{item}</CommonDiv>;
  }
};

const InfoItem = ({ title, item }) => {
  return (
    <Item>
      <h2 className="title">{title}</h2>
      <div>
        <TitleSwitchItem title={title} item={item} />
      </div>
    </Item>
  );
};

export default InfoItem;
