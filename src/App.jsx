
import './App.css'
import { createContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Main from './Components/Main';
import { CssBaseline } from '@mui/material';
import UserContextProvider, { UserContext } from './utils/UserContextProvider';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
import { Logout } from '@mui/icons-material';
import { getAuth, signOut } from 'firebase/auth';
import ColorMode from './Components/ColorMode';
import Box from '@mui/material/Box';
import ChatHaeder from './Components/ChatHaeder';




export const ColorModeContext = createContext({ toggleColorMode: () => { } });



function App() {

  const [mode, setMode] = useState('light');

  const navigate = useNavigate();




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
          background: {
            default: mode === 'dark' ? "#000" : "#fff",
            paper: mode === 'dark' ? "#222" : "#999"
          }
        },
      }),
    [mode],
  );



  return (
    <ColorModeContext.Provider value={colorMode}>
      <UserContextProvider>


        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div style={{ width: '100%', height: '90vh' }}>
            <ChatHaeder/>
            
              <Outlet />
          </div>

        </ThemeProvider>
      </UserContextProvider>
    </ColorModeContext.Provider>
  );
}

export default App
