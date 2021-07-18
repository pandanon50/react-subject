import React from "react";
import styled from "styled-components";

// const Item = styled.div`
//     colors
// `

const InfoItem = ({ title, name }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{name}</div>
    </div>
  );
};

export default InfoItem;
