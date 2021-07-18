import React from "react";

const Ingredients = ({ hops, malt, yeast }) => {
  return (
    <div>
      <div>hops</div>
      {hops.map((v, i) => {
        return (
          <>
            <div>name : {v?.name}</div>
            <div>--amount--</div>
            <div>unit : {v?.amount.unit}</div>
            <div>value : {v?.amount.value}</div>
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
            <div>unit : {v?.amount.unit}</div>
            <div>value : {v?.amount.value}</div>
          </>
        );
      })}
      <div>yeast</div>
      <div>{yeast}</div>
    </div>
  );
};

export default Ingredients;
