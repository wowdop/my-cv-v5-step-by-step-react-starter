import * as S from "./flex.style";

const Flex = ({ children, vertical, align, justify, gap }) => {
  return (
    <S.Flex vertical={vertical} align={align} justify={justify} gap={gap}>
      {children}
    </S.Flex>
  );
};

export default Flex;
