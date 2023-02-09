import React, { ForwardRefRenderFunction } from 'react';
import { InputProps } from 'types/GlobalInterfaces';
import * as S from './styles';

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, id, placeholder = '', type = 'text', children, ...rest },
  ref
) => {
  return (
    <S.Container>
      <S.LabelContainer htmlFor={id}>{label}</S.LabelContainer>
      <S.InputContainer
        id={id}
        placeholder={placeholder}
        type={type}
        {...rest}
        ref={ref}
      />
      {children}
    </S.Container>
  );
};

export default React.forwardRef(Input);
