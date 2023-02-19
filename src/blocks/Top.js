import React from "react";
import styled from "styled-components";
import { colors } from "../styles";

export const Top = () => (
  <TopContainer>
    <Sign>
      <Text>HOTEL</Text>
    </Sign>
    <Cornice />
  </TopContainer>
);

const TopContainer = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
`;

const Cornice = styled.span`
  display: block;
  position: relative;
  height: 13px;
  ::after {
    content: "";
    position: absolute;
    width: 120%;
    height: 100%;
    left: -10%;
    background-color: ${colors.blue_green};
    bottom: 0;
    border-top: 4px solid ${colors.blue_lighter};
  }
`;

const Sign = styled.span`
  margin: auto;
  height: 50px;
  background-color: ${colors.blue_green};
  width: 90%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Text = styled.span`
  color: white;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
`;
