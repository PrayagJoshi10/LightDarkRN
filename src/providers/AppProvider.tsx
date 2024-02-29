import React, {useState} from 'react';

interface AppContextProps {
  theme: any;
  setTheme: React.Dispatch<React.SetStateAction<any>>;
}

const AppContext = React.createContext<AppContextProps>({
  theme: null,
  setTheme: () => {},
});

const AppProvider = ({children}: any) => {
  const [theme, setTheme] = useState<any>(null);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = () => {
  return React.useContext(AppContext);
};

export default AppProvider;
