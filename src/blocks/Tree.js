import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../styles";

export const Tree = ({ side }) => (
  <TreeContainer side={side}>
    <PlantContainer>
      <Top>
        <Plant />
        <Plant />
      </Top>
      <Middle>
        <Plant />
        <Plant />
      </Middle>
      <Bottom>
        <Plant />
      </Bottom>
    </PlantContainer>
    <Branch />
    <PlantPot />
  </TreeContainer>
);

const TreeContainer = styled.div`
  width: 23px;
  position: absolute;
  bottom: -5px;
  z-index: 1;
  ${({ side }) =>
    side === "left"
      ? css`
          left: 25%;
        `
      : css`
          right: 25%;
        `}
`;

const PlantPot = styled.div`
  width: 100%;
  height: 15px;
  background: #95a5a6;
`;

const Branch = styled.div`
  width: 30%;
  height: 8px;
  background: ${colors.brown};
  margin: auto;
`;

const PlantContainer = styled.div`
  width: 100%;
  height: 150px;
  margin: auto;
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "top"
    "middle"
    "bottom";
`;

const Plant = styled.span`
  display: block;
  background: green;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const Top = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
  grid-area: top;
  position: relative;
  ${Plant} {
    position: absolute;
    width: 170%;
    bottom: -130%;
    &:nth-child(1) {
      left: -90%;
    }
    &:nth-child(2) {
      right: -90%;
    }
  }
`;
const Middle = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
  grid-area: middle;
  position: relative;
  ${Plant} {
    position: absolute;
    width: 150%;
    height: 80%;
    bottom: -70%;
    &:nth-child(1) {
      left: -80%;
    }
    &:nth-child(2) {
      right: -80%;
    }
  }
`;
const Bottom = styled.span`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
  grid-area: bottom;
  position: relative;

  ${Plant} {
    position: absolute;
    left: -25%;
    width: 150%;
    height: 80%;
    bottom: 0;
  }
`;
