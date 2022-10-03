import styled from "styled-components";

const getPadding = ({ padding }) => {
  const array = Array.isArray(padding) ? padding : padding ? [padding] : [];
  return array.length
    ? `padding: ${array.map((el) => `${el / 16}rem`).join(" ")};`
    : "";
};

export const Flex = styled.div`
  display: flex;
  ${({ vertical }) => (vertical ? "flex-direction: column;" : "")}
  ${({ align }) => (align ? `align-items: ${align};` : "")}
  ${({ justify }) => (justify ? `justify-content: ${justify};` : "")}
  ${({ gap = 16 }) => (gap ? `gap: ${gap / 16}rem;` : "")}
  ${({ shadow }) =>
    shadow ? "box-shadow: 4px 4px hsla(0, 0%, 0%, 0.25);" : ""}
  ${({ shadow }) => (shadow ? "border-radius: 16px;" : "")}
  ${({ shadow }) => (shadow ? "border: 1px solid #E3E6EF;" : "")}
  ${getPadding}
`;
