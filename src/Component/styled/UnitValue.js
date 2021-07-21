import React from "react";
import styled from "styled-components";
import colors from "../../Common/colors";

const UnitValueDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  .value {
    color: ${colors.orangeRed};
    font-size: 20px;
    margin-right: 5px;
  }
  .unit {
    font-size: 20px;
    color: ${colors.black};
  }
`;

const UnitValue = ({ unit, value }) => {
  return (
    <UnitValueDiv>
      <div className="value">{value}</div>
      <div className="unit">{unit}</div>
    </UnitValueDiv>
  );
};

export default UnitValue;
