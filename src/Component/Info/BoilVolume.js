import React from "react";
import styled from "styled-components";
import colors from "../../Common/colors";
import UnitValue from "../styled/UnitValue";

const BoilVolume = ({ boil_volume = {}, volume = {} }) => {
  const { unit: boilUnit, value: boilValue } = boil_volume;
  const { unit: volumeUnit, value: volumeValue } = volume;

  return boilUnit !== null ? (
    <UnitValue value={boilValue} unit={boilUnit}></UnitValue>
  ) : (
    <UnitValue value={volumeValue} unit={volumeUnit}></UnitValue>
  );
};

export default BoilVolume;
