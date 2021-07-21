import React from "react";
import UnitValue from "../styled/UnitValue";

const BoilVolume = ({ boil_volume = {}, volume = {} }) => {
  const { unit: boilUnit, value: boilValue } = boil_volume;

  return <UnitValue value={boilValue} unit={boilUnit}></UnitValue>;
};

export default BoilVolume;
