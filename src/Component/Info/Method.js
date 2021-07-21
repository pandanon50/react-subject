import React from "react";
import UnitValue from "../styled/UnitValue";

const Method = ({ method }) => {
  return (
    <div>
      <div>Fermentation</div>
      <div>temp</div>
      <UnitValue>
        <div className="value">{method?.fermentation?.temp?.value}</div>
        <div className="unit">{method?.fermentation?.temp?.unit}</div>
      </UnitValue>

      <div>mash_temp</div>
      {method?.mash_temp?.map((v, i) => {
        return (
          <div key={i}>
            {v?.duration ? <div>duration : {v?.duration}</div> : null}
            <div>temp</div>
            <UnitValue>
              <div className="value">{v?.temp?.value}</div>
              <div className="unit">{v?.temp?.unit}</div>
            </UnitValue>

            {v?.twist ? <div>twist : {v?.twits}</div> : null}
          </div>
        );
      })}
    </div>
  );
};

export default Method;
