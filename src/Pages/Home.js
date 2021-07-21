import React from "react";
import styled from "styled-components";
import colors from "../Common/colors";

const HomeDiv = styled.div`
  h1 {
    margin-top: 10px;
    margin-left: 10px;
    color: ${colors.black};
  }
`;

const Home = () => {
  return (
    <HomeDiv>
      <h1 className="title">Welcome ! Beer my friend !</h1>
    </HomeDiv>
  );
};

export default Home;
