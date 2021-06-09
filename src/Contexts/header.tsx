import React, { createContext, useCallback, useContext, useState } from 'react';

interface IHeaderContextProps {
  toggleHeaderColapse: () => void;
  headerColapse: boolean;
}

const HeaderContext = createContext({} as IHeaderContextProps);

const HeaderProvider: React.FC = ({ children }) => {
  const [headerColapse, setHeaderColapse] = useState(false);

  const toggleHeaderColapse = useCallback(
    () => setHeaderColapse(state => !state),
    [],
  );

  return (
    <HeaderContext.Provider value={{ toggleHeaderColapse, headerColapse }}>
      {children}
    </HeaderContext.Provider>
  );
};

const useHeader = (): IHeaderContextProps => useContext(HeaderContext);

export { HeaderProvider, useHeader };
