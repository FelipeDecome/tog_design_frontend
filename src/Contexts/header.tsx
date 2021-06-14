import React, { createContext, useCallback, useContext, useState } from 'react';

interface IHeaderContextProps {
  toggleHeaderColapse: () => void;
  setCustomButtons: (component: React.ReactNode) => void;
  headerColapse: boolean;
  customButtons: React.ReactNode | undefined;
}

const HeaderContext = createContext({} as IHeaderContextProps);

const HeaderProvider: React.FC = ({ children }) => {
  const [headerColapse, setHeaderColapse] = useState(false);
  const [customButtons, setCustomButtons] = useState<
    React.ReactNode | undefined
  >();

  const toggleHeaderColapse = useCallback(
    () => setHeaderColapse(state => !state),
    [],
  );

  return (
    <HeaderContext.Provider
      value={{
        toggleHeaderColapse,
        headerColapse,
        customButtons,
        setCustomButtons,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

const useHeader = (): IHeaderContextProps => useContext(HeaderContext);

export { HeaderProvider, useHeader };
