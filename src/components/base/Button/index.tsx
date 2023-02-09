import React from 'react';

import { ButtonProps } from 'types/GlobalInterfaces';
import * as S from './styles';

const Button: React.FC<ButtonProps> = ({
  padding = 16,
  margin = 16,
  border_radius = 5,
  isValid = false,
  children,
  ...rest
}) => {
  return (
    <S.Button
      padding={padding}
      margin={margin}
      border_radius={border_radius}
      isValid={isValid}
      {...rest}
    >
      {children}
    </S.Button>
  );
};

export default Button;
