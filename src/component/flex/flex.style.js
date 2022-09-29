import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  ${({ vertical }) => (vertical ? "flex-direction: column;" : "")}
  ${({ align }) => (align ? `align-items: ${align};` : "")}
  ${({ justify }) => (justify ? `justify-content: ${justify};` : "")}
`;