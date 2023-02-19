import React from "react";
import styled from "styled-components";
import { colors, buildings } from "../styles";

export const Floor = ({ last, children }) => (
  <FloorContainer>
    {!last && <Cornice />}
    {children}
    <Architrave />
  </FloorContainer>
);

const FloorContainer = styled.div`
  width: 80%;
  background: ${buildings.wall};
  height: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  margin: auto;
`;

const Cornice = styled.span`
  position: absolute;
  display: block;
  width: 110%;
  background: ${colors.yellow_dark};
  height: 10px;
  top: -10px;
  left: -5%;
`;

const Architrave = styled.span`
  position: absolute;
  display: block;
  width: 110%;
  background: ${colors.white};
  height: 8px;
  bottom: -8px;
  left: -5%;
`;
