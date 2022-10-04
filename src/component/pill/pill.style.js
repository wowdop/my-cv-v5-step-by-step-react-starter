import styled from 'styled-components';


const colorMap= {
  red:"#F4DBFD",
  blue:"#DBE8FD",
  green:"#DBFDDE"
}
export const Pill= styled.span`
  padding: 4px 8px;
  ${({color}) => color ? `background-color: ${colorMap[color]};` : ""}
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  font-style: italic;
`
