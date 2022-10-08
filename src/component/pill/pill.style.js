import styled from 'styled-components';

const pillMap = {
  red: '#f4dbfd',
  green: '#dbfdde',
  blue: '#dbe8fd',
};

export const Pill = styled.span`
  ${({ c }) => (c ? `background-color: ${pillMap[c]};` : '')}
  padding: 4px 8px;
  border-radius: 12px;
`;
