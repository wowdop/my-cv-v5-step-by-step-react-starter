import * as S from './pill.style';

const Pill = ({ color, label }) => {
  return <S.Pill c={color}>{label}</S.Pill>;
};

export default Pill;
