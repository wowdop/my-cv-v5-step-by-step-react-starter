import * as S from "./pill.style"

const Pill= ({color, children}) => {
  return <S.Pill color={color}>{children}</S.Pill>
}


export default Pill
