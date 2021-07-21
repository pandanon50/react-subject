import React from "react";
import UnitValue from "../styled/UnitValue";
const Volume = ({ volume = {} }) => {
  const { unit: volumeUnit, value: volumeValue } = volume;
  return <UnitValue value={volumeValue} unit={volumeUnit}></UnitValue>;
};

export default Volume;
