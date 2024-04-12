
import { useContext } from 'react';
import PropTypes from 'prop-types';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

import ColorMode from './ColorMode';
import { Box } from '@mui/material';
import { UserContext } from '../utils/UserContextProvider';
import { ArrowBack, Logout } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import { useLocation, useNavigate } from 'react-router';
import { getAuth } from 'firebase/auth';




export default function ChatHaeder() {

  const {name} = useContext(UserContext);

  const { pathname } = useLocation()
  
  const navigate = useNavigate();

  const logout = () => {
    const auth = getAuth();
    auth.signOut().then(()=>navigate('/'));
  }

  return (
    <Box sx={{ backgroundColor: 'primary.light', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit', width: '100%',height:'80px' }}>
      <Toolbar>
        <IconButton
          size="x-large"
          edge="start"
          aria-label="user pic"
          sx={{ mr: 2 }}
          onClick={()=>navigate(-1)}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          {name}
        </Typography>
        <ColorMode />
              {pathname !== "/" &&
                <Fab  onClick={logout}>
                  <Logout  />
                </Fab>}
      </Toolbar>
    </Box>
  )
}

ChatHaeder.propTypes = {
  chatName: PropTypes.string
};