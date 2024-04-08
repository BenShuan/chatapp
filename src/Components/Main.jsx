
import { lazy, useContext } from 'react';
import { UserContext } from '../utils/UserContextProvider';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';




export default function Main() {
  const { name, setName,SignIn } = useContext(UserContext);


  const setChatName = (e) => {
    e.preventDefault();
    let {mail,pass}=e.target;
    SignIn(mail.value,pass.value);

  }


  return (
    <Box
      sx={{ width: '100%', height: '100vh', gap: 20 }}
    >
      
      <form onSubmit={setChatName}  >
        <TextField label="מייל" type='email' variant="outlined" fullWidth sx={{ m: '10px' }} name='mail' />
        <TextField label="סיסמה" variant="outlined" fullWidth sx={{ m: '10px' }} name='pass' />
        <Button type='submit' variant="contained" >כניסה</Button>
        <Link style={{display:'block',margin:15}} to={"/register"}>להרשמה</Link>

      </form>
    </Box>

  )
}
