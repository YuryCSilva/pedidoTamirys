import { createContext, useState } from 'react';
import Routes from 'routes';
import { ThemeProvider } from 'styled-components';
import theme from 'ui-theme/theme';
import GlobalStyle from 'utils/global';

type ContextProps = {
  isAuthenticated: boolean,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext({} as ContextProps)

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
