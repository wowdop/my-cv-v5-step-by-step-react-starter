import * as S from "./flex.style";

const Flex = ({ children, vertical, align, justify, gap, shadow, padding}) => {
  return (
    <S.Flex vertical={vertical} align={align} justify={justify} gap={gap} shadow={shadow} padding={padding}>
      {children}
    </S.Flex>
  );
};

export default Flex;
