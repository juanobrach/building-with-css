import React from "react";
import "./styles.scss";
import styled from "styled-components";
import { Floor, Window, Top, GrowndFloor, Tree, Road } from "./blocks";

export default function App() {
  return (
    <div className="App">
      <Street>
        <Build>
          <Top />
          <Floor last={true}>
            <Window />
            <Window />
            <Window />
          </Floor>
          <Floor>
            <Window />
            <Window />
            <Window />
          </Floor>
          <GrowndFloor />
        </Build>
        <Tree side="left" />
        <Tree side="right" />
      </Street>
      <Road />
    </div>
  );
}

const Street = styled.div`
  position: relative;
  width: 100%;
`;

const Build = styled.div`
  width: 30%;
  max-width: 300px;
  min-width: 300px;
  margin: auto;
`;
