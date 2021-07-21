import React from "react";
import UnitValue from "../styled/UnitValue";
import styled from "styled-components";

const Ingredients = ({ hops, malt, yeast }) => {
  const HopsDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .name {
      font-size: 20px;
      margin-right: 10px;
    }
    .attribute {
      font-size: 20px;
      margin-right: 10px;
    }
    .add {
      font-size: 20px;
    }
    .unitvalue {
      font-size: 20px;
      margin-right: 10px;
    }
  `;

  return (
    <div>
      <h2>hops</h2>
      <HopsDiv>
        <div className="name">name</div>
        <div className="unitvalue">unit value</div>
        <div className="attribute">attribute</div>
        <div className="add">add</div>
      </HopsDiv>

      {hops.map((v, i) => {
        return (
          <HopsDiv>
            <div className="name">{v?.name}</div>
            <UnitValue unit={v?.amount?.unit} value={v?.amount?.value} />
            <div className="attribute">{v?.attribute}</div>
            <div className="add">{v?.add}</div>
          </HopsDiv>
        );
      })}
      <h2>malt</h2>
      {malt.map((v, i) => {
        return (
          <>
            <div>name : {v?.name}</div>
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
