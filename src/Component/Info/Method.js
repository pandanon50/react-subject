import React from "react";

const Method = ({ method }) => {
  return (
    <div>
      <div>Fermentation</div>
      <div>temp</div>
      <div>value :{method?.fermentation?.temp?.value}</div>
      <div>unit : {method?.fermentation?.temp?.unit}</div>

      <div>mash_temp</div>
      {method?.mash_temp?.map((v, i) => {
        return (
          <div key={i}>
            {v?.duration ? <div>duration : {v?.duration}</div> : null}
            <div>temp</div>
            <div>unit : {v?.temp?.unit}</div>
            <div>value : {v?.temp?.value}</div>
            {v?.twist ? <div>twist : {v?.twits}</div> : null}
          </div>
        );
      })}
    </div>
  );
};

export default Method;
