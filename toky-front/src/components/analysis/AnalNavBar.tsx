"use client";

import styled, { css } from "styled-components";

interface AnalNavProps {
  match: number;
  handleMatch: (n: number) => void;
}

export default function AnalNavBar({ match, handleMatch }: AnalNavProps) {
  return (
    <Wrapper>
      <NavBar>
        <NavigationItem
          index={5}
          match={match}
          onClick={() => {
            handleMatch(5);
          }}
        >
          전체
        </NavigationItem>
        <NavigationItem
          index={0}
          match={match}
          onClick={() => {
            handleMatch(0);
          }}
        >
          야구
        </NavigationItem>
        <NavigationItem
          index={1}
          match={match}
          onClick={() => {
            handleMatch(1);
          }}
        >
          빙구
        </NavigationItem>
        <NavigationItem
          index={2}
          match={match}
          onClick={() => {
            handleMatch(2);
          }}
        >
          농구
        </NavigationItem>
        <NavigationItem
          index={3}
          match={match}
          onClick={() => {
            handleMatch(3);
          }}
        >
          럭비
        </NavigationItem>
        <NavigationItem
          index={4}
          match={match}
          onClick={() => {
            handleMatch(4);
          }}
        >
          축구
        </NavigationItem>
      </NavBar>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
`;

const NavBar = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-image: linear-gradient(rgba(18, 18, 18, 1), rgba(18, 18, 18, 0));
  z-index: 3;
`;

const NavigationItem = styled.div<{
  selected?: boolean;
  match: number;
  index: number;
}>`
  display: flex;
  align-items: center;
  height: 46px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.38);
  ${(props) => {
    if (props.match === props.index) {
      return css`
        color: white;
        font-weight: 700;
      `;
    }
  }}/* ${({ selected }) => selected && "color: #ffffff; 	font-weight: 700;"} */
`;
