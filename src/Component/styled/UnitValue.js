import React from "react";
import styled from "styled-components";
import colors from "../../Common/colors";

const UnitValueDiv = styled.div`
  display: flex;
  align-items: center;
  .value {
    color: ${colors.orangeRed};
    font-size: 2rem;
    margin-right: 5px;
  }
  .unit {
    margin-top: 10px;
    font-size: 1rem;
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
