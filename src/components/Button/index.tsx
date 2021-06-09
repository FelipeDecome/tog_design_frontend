import React from 'react';

import { Container, TBackgroundColor } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  backgroundColor?: TBackgroundColor;
}

const Button: React.FC<IButtonProps> = ({
  icon,
  backgroundColor,
  children,
  ...rest
}) => {
  return (
    <Container
      backgroundColor={backgroundColor || 'gray'}
      withIcon={!!icon}
      {...rest}
    >
      {icon || children || 'Button'}
    </Container>
  );
};

export { Button };
