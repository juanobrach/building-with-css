import React from "react";
import styled from "styled-components";
import { colors } from "../styles";

export const Road = () => (
  <RoadContainer>
    <Way />
    <Way />
  </RoadContainer>
);

const RoadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: ${colors.gray};
  border-top: 10px solid #808285;
`;

const Way = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  :nth-child(1) {
    border-bottom: 2.5px solid #ffd230;
  }
  :nth-child(2) {
    border-top: 2.5px solid #ffd230;
  }

  :after {
    content: "";
    position: absolute;
    border-top: 2px dashed white;
    width: 100%;
    top: 45%;
  }
`;
