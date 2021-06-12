import React from 'react';

import { AuthProvider } from './auth';
import { CartProvider } from './cart';
import { HeaderProvider } from './header';

const Contexts: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <HeaderProvider>{children}</HeaderProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export { Contexts };
