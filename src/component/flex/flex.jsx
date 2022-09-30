import * as S from "./flex.style";

const Flex = ({ children, vertical, align, justify }) => {
  return (
    <S.Flex vertical={vertical} align={align} justify={justify}>
      {children}
    </S.Flex>
  );
};

export default Flex;
