import styled from 'styled-components';

const colorMap = {
  milanoRed: { h: 0, s: 100, l: 40 },
  funOrange: { h: 36, s: 86, l: 43 },
  funBlue: { h: 220, s: 86, l: 43 },
};

export const Header = styled.div`
  background-color: ${({ color = 'milanoRed' }) =>
    `hsla(${colorMap[color].h}, ${colorMap[color].s}%, ${colorMap[color].l}%, 1)`};
  width: 304px;
  /* height: 40px; */
  color: white;
  padding: 8px;
  display: flex;
  justify-content: center;
  font-size: ${({ font }) => font}px;

  @media screen and (min-width: 1024px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1200px;
  }
`;

export const Transparent = styled.div`
  background-color: ${({ color = 'milanoRed' }) =>
    `hsla(${colorMap[color].h}, ${colorMap[color].s}%, ${colorMap[color].l}%, 0.6)`};
  width: 100%;
  display: flex;
  justify-content: center;
`;
