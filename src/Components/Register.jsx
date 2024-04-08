
import { lazy, useContext } from 'react';
import { UserContext } from '../utils/UserContextProvider';
import { Box, Button, TextField } from '@mui/material';




export default function Main() {
  const { name, setName,Register } = useContext(UserContext);


  const setChatName = (e) => {
    e.preventDefault();
    let {mail,pass,uName}=e.target;
    Register(mail.value,pass.value,uName.value);

  }


  return (
    <Box
      sx={{ width: '100%', height: '100vh', gap: 20 }}
    >
      <form onSubmit={setChatName}  >
        <TextField label="מייל" type='email' variant="outlined" fullWidth sx={{ m: '10px' }} name='mail' />
        <TextField label="סיסמה" variant="outlined" fullWidth sx={{ m: '10px' }} name='pass' />
        <TextField label="שם" variant="outlined" fullWidth sx={{ m: '10px' }} name='uName' />
        {/* <Link to={} /> */}
        <Button type='submit' variant="contained" >כניסה</Button>
      </form>
    </Box>

  )
}
