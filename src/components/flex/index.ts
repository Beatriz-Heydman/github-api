import styled from "styled-components";
import { FlexProps } from "./types";

export const Flex = styled.div<FlexProps>`
  display: flex;
  gap: ${({ gap = "0" }) => gap};
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ alignItems = "center" }) => alignItems};
  flex-wrap: ${({ flexWrap = "wrap" }) => flexWrap};
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
`;
