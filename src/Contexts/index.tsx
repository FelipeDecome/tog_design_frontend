import React from 'react';

import { HeaderProvider } from './header';

const Contexts: React.FC = ({ children }) => {
  return <HeaderProvider>{children}</HeaderProvider>;
};

export { Contexts };
