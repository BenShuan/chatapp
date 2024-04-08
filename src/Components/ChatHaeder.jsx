
import PropTypes from 'prop-types';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

import ColorMode from './ColorMode';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../utils/UserContextProvider';


export default function ChatHaeder() {

  const {name} = useContext(UserContext)

  return (
    <Box sx={{ backgroundColor: 'primary.light', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit', width: '100%' }}>
      <Toolbar>
        <IconButton
          size="x-large"
          edge="start"
          aria-label="user pic"
          sx={{ mr: 2 }}
        >
          <AccountCircle />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          {name}
        </Typography>
        <ColorMode />
      </Toolbar>
    </Box>
  )
}

ChatHaeder.propTypes = {
  chatName: PropTypes.string
};