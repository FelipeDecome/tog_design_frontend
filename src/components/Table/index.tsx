import React from 'react';

import { Container } from './styles';

const Table: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export { THead } from './components/THead';
export { TRow } from './components/TRow';
export { Table };
