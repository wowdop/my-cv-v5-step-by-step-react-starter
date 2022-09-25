import * as S from "./header.style";

const Header = ({ children, font, color }) => {
  return (
    <S.Transparent color={color}>
      <S.Header color={color} font={font}>
        {children}
      </S.Header>
    </S.Transparent>
  );
};

Header.defaultProps = {
  font: 20,
  color: "milanoRed",
};

export default Header;
