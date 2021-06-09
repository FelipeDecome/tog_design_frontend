import React from 'react';

import { AuthProvider } from './auth';
import { HeaderProvider } from './header';

const Contexts: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <HeaderProvider>{children}</HeaderProvider>
    </AuthProvider>
  );
};

export { Contexts };
