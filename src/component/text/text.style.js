import styled from 'styled-components';

const getSize = {
  h1: {
    text: 24,
    line: 29,
  },
  h2: {
    text: 20,
    line: 24,
  },
  h3: {
    text: 20,
    line: 24,
  },
  h4: {
    text: 18,
    line: 21,
  },
  p: {
    text: 16,
    line: 19,
  },
};

const getFontSize = ({ type }) => `font-size: ${getSize[type].text}px;`;

const getLineHeight = ({ type }) => `line-height: ${getSize[type].line}px;`;

const getFontWeight = ({ weight }) => `font-weight: ${weight};`;

export const H1 = styled.h1`
  ${getFontSize}
  ${getLineHeight}
  ${getFontWeight}
`;

export const H2 = styled.h2`
  ${getFontSize}
  ${getLineHeight}
  ${getFontWeight}
`;

export const H3 = styled.h3`
  font-style: italic;
  ${getFontSize}
  ${getLineHeight}
  ${getFontWeight}
`;

export const H4 = styled.h4`
  font-style: italic;
  ${getFontSize}
  ${getLineHeight}
  ${getFontWeight}
  margin: 0;
`;

export const Paragraph = styled.p`
  ${getFontSize}
  ${getLineHeight} margin: 0;
`;
