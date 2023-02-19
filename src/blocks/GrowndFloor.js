import React from "react";
import styled, { css } from "styled-components";
import { colors, buildings } from "../styles";

export const GrowndFloor = () => (
  <GrowndFloorContainer>
    <MarqueeContainer>
      <MarqueeTop>
        <MarqueStars>
          <Star size=".9em" />
          <Star size="1.2em" />
          <Star size="1.5em" />
          <Star size="1.2em" />
          <Star size=".9em" />
        </MarqueStars>
      </MarqueeTop>
      <MarqueeBottom />
    </MarqueeContainer>
    <GateContainer>
      <GateTop />
      <GateBottom>
        <Window>
          <Glass side="left" />
          <Glass side="right" />
        </Window>
        <DoorContainer>
          <Door side="left">
            <WindowCircle />
          </Door>
          <Door side="right">
            <WindowCircle />
          </Door>
        </DoorContainer>
        <Window>
          <Glass side="left" />
          <Glass side="right" />
        </Window>
      </GateBottom>
    </GateContainer>
  </GrowndFloorContainer>
);

const GrowndFloorContainer = styled.div`
  position: relative;
  background: ${buildings.wall};
  height: calc(150px + 70px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GateContainer = styled.span`
  background-color: ${colors.blue_dark};
  height: calc(100% - 70px);
  padding-top: 70px;
  width: 80%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% 90%;
  grid-template-areas:
    "top"
    "bottom";
`;

const GateTop = styled.span`
  display: grid;
  grid-template-columns: 100%;
  gap: 0px 0px;
  grid-area: top;
`;

const GateBottom = styled.span`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-area: bottom;
  border-top: 12px solid ${colors.blue};
`;

const Window = styled.span`
  display: grid;
  grid-template-columns: 45% 55%;
`;

const Glass = styled.span`
  ${({ side }) =>
    side === "left"
      ? css`
          border-right: 4px solid ${colors.blue};
        `
      : css`
          border-left: 4px solid ${colors.blue};
        `}
`;

const DoorContainer = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-left: 10px solid ${colors.blue};
  border-right: 10px solid ${colors.blue};
`;

const Door = styled.span`
  width: 100%;
  background-color: ${colors.blue_lighter};
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  ${({ side }) =>
    side === "left"
      ? css`
          border-right: 2px solid ${colors.blue};
        `
      : css`
          border-left: 2px solid ${colors.blue};
        `}
`;

const WindowCircle = styled.span`
  border-radius: 50%;
  background-color: white;
  height: 15px;
  width: 15px;
  margin-bottom: 2em;
`;

const MarqueeContainer = styled.span`
  position: absolute;
  width: 120%;
  height: 70px;
  top: -5%;
  display: block;
`;

const MarqueeTop = styled.span`
  display: block;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  height: 70%;
  background: ${colors.blue_green};
`;

const Star = styled.span`
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;

  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid white;
  border-left: 0.3em solid transparent;

  /* Controlls the size of the stars. */
  font-size: ${({ size }) => size || "1em"};
  bottom: 1em;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 0.6em;
    left: -1em;
    border-right: 1em solid transparent;
    border-bottom: 0.7em solid white;
    border-left: 1em solid transparent;
    transform: rotate(-35deg);
  }

  &:after {
    transform: rotate(35deg);
  }
`;
const MarqueStars = styled.span`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  padding-top: 3em;
  box-sizing: border-box;
`;

const MarqueeBottom = styled.span`
  display: block;
  height: 30%;
  background: ${colors.blue_green};

  border-top: 8px solid ${colors.blue_lighter};
`;
