import * as S from "./flex.style";

const Flex = ({ children, vertical, align, justify, gap, shadow, padding, width}) => {
  return (
    <S.Flex vertical={vertical} align={align} justify={justify} gap={gap} width={width} shadow={shadow} padding={padding}>
      {children}
    </S.Flex>
  );
};

export default Flex;
