import React from "react";
import UnitValue from "../styled/UnitValue";

const Ingredients = ({ hops, malt, yeast }) => {
  return (
    <div>
      <div>hops</div>
      {hops.map((v, i) => {
        return (
          <>
            <div>name : {v?.name}</div>
            <div>--amount--</div>
            <UnitValue unit={v?.amount?.unit} value={v?.amount?.value} />
            <div>attribute : {v?.attribute}</div>
            <div>add : {v?.add}</div>
          </>
        );
      })}
      <div>malt</div>
      {malt.map((v, i) => {
        return (
          <>
            <div>name : {v?.name}</div>
            <div>--amount--</div>
            <UnitValue unit={v?.amount?.unit} value={v?.amount?.value} />
          </>
        );
      })}
      <div>yeast</div>
      <div>{yeast}</div>
    </div>
  );
};

export default Ingredients;
