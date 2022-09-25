import styled from 'styled-components'

const colorMap = {
  funGreen: '#046B2D',
  milanoRed: '#C62A08',
}

export const Button = styled.button`
  background-color: ${({ color }) => colorMap[color]};
  height: 35px;
  color: white;
  border-radius: 18px;
  border: 0;
  font-size: 16px;
  padding: 0 16px;

  display: flex;
  gap: 8px;
  align-items: center;
`
