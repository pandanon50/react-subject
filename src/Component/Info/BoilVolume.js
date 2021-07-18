import React from "react";

const BoilVolume = ({ boil_volume = null, volume = null }) => {
  return boil_volume !== null && volume === null ? (
    <div>
      <div>unit: {boil_volume?.unit}</div>
      <div>value: {boil_volume?.value}</div>
    </div>
  ) : (
    <div>
      <div>unit: {volume?.unit}</div>
      <div>value: {volume?.value}</div>
    </div>
  );
};

export default BoilVolume;
