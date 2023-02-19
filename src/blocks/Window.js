import React from "react";
import styled from "styled-components";
import { colors, buildings } from "../styles";

export const Window = () => (
  <WindowContainer>
    <Lintel />
    <Bars />
    <Sill />
  </WindowContainer>
);

const Bars = styled.span`
  position: absolute;
  height: 100%;
  width: 5px;
  background: white;
  left: calc(50% - 2.5px);
`;

const Sill = styled.span`
  position: absolute;
  width: 120%;
  height: 8px;
  background: white;
  bottom: -8px;
  left: -10%;
`;

const WindowContainer = styled.div`
  width: 60%;
  height: 60%;
  background: ${buildings.window};
  margin: auto;
  position: relative;
`;

const Lintel = styled.span`
  width: 130%;
  background: ${colors.blue_green};
  height: 6px;
  display: block;
  position: absolute;
  left: -15%;
  top: -10px;
  :after {
    content: "";
    width: 90%;
    height: 4px;
    background: ${colors.blue_lighter};
    position: absolute;
    bottom: -4px;
    left: 5%;
  }
`;
