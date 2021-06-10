import React from 'react';

import { Container } from './styles';

const FormHeading: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
      <span>{children}</span>
    </Container>
  );
};

export { FormHeading };
