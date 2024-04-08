
import './App.css'
import { createContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Main from './Components/Main';
import { CssBaseline } from '@mui/material';
import UserContextProvider from './utils/UserContextProvider';
import { Outlet } from "react-router-dom";







export const ColorModeContext = createContext({ toggleColorMode: () => { } });



function App() {

  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      }),
    [mode],
  );

  return (
      <ColorModeContext.Provider value={colorMode}>
        <UserContextProvider>


          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Outlet/>

          </ThemeProvider>
        </UserContextProvider>
      </ColorModeContext.Provider>
  );
}

export default App
