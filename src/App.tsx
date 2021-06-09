import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components';
import { Contexts } from './Contexts';
import { Routes } from './Routes';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <Contexts>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>

      <GlobalStyle />
    </Contexts>
  );
};

export { App };
