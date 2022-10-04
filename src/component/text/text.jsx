import * as S from './text.style';

const Text = ({ type, children }) => {
  switch (type) {
    case 'h1':
      return (
        <S.H1 type='h1' weight='400'>
          {children}
        </S.H1>
      );
    case 'h2':
      return (
        <S.H2 type='h2' weight='900'>
          {children}
        </S.H2>
      );
    case 'h3':
      return (
        <S.H3 type='h3' weight='700'>
          {children}
        </S.H3>
      );
    case 'h4':
      return (
        <S.H4 type='h4' weight='400'>
          {children}
        </S.H4>
      );

    default:
      return <S.Paragraph type='p'>{children}</S.Paragraph>;
  }
};

export default Text;
