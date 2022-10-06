import { Anchor, Icon } from "..";
import * as S from "./button.style";

const Button = ({ href, title, children, color, icon }) => {
  return (
    <S.Button color={color}>
      <Icon icon={icon} culoare={color} size='small'/>
      {!href && !title && children}
      {href && title && (
        <Anchor href={href} title={title}>
          {children}
        </Anchor>
      )}
    </S.Button>
  );
};

export default Button;
