"use-client";
import styled from "styled-components";

export const Space = styled.div<{ w?: number; h?: number }>`
  width: ${({ w }) => `${w}px`};
  height: ${({ h }) => `${h}px`};
`;
