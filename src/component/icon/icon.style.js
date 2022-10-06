import styled from 'styled-components';


const iconList = {
down2: "\\e902",
down1: "\\e901",
down: "\\e900",
tiktok: "\\e909",
instagram: "\\e903",
linkedin: "\\e904",
codewars: "\\e905",
github: "\\e906",
whatsapp: "\\e907",
facebook: "\\e908",
youtube: "\\e90a",
};


const sizeMap = {
  normal :40,
  small: 16
}


export const Icon = styled.div`
height: ${({ size }) => sizeMap[size]/16}rem;
width: ${({ size }) => sizeMap[size]/16}rem;
display: flex;
font-family: my-cv;
align-items: center;
color: ${({culoare}) => culoare};

&::before {
  content:"${({icon}) => iconList[icon]}"
}
`
const style = {
  Icon,
};

export default style;
