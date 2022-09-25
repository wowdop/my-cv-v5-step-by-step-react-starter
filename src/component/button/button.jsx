import * as S from './button.style'

const Button = ({ children, color }) => {
  return <S.Button color={color}>{children}</S.Button>
}

export default Button
