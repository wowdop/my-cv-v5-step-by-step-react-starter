import styled from "styled-components";

export const Divider = styled.div`
  ${({ h }) => (h ? `height: ${h / 16}rem;` : "")};
`;
