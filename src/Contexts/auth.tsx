import React, { createContext, useCallback, useContext, useState } from 'react';

import { localStorage as LSConfig } from '../config/localStorage';
import { api } from '../services/api';

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IUser {
  id: string;
  name: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface IAuthContextProps {
  user: IUser;
  signIn(data: ISignInCredentials): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext({} as IAuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [authState, setAuthState] = useState<IAuthState>(() => {
    const token = localStorage.getItem(LSConfig.paths.TOKEN);
    const user = localStorage.getItem(LSConfig.paths.USER);

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { user: JSON.parse(user), token };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(
    async ({ email, password }: ISignInCredentials) => {
      const response = await api.post('/sessions', { email, password });

      const { user, token } = response.data;

      localStorage.setItem(LSConfig.paths.TOKEN, token);
      localStorage.setItem(LSConfig.paths.USER, JSON.stringify(user));

      setAuthState({
        token,
        user,
      });
    },
    [],
  );

  const signOut = useCallback(async () => {
    localStorage.removeItem(LSConfig.paths.TOKEN);
    localStorage.removeItem(LSConfig.paths.USER);

    setAuthState({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: authState.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextProps => useContext(AuthContext);

export { AuthProvider, useAuth };
