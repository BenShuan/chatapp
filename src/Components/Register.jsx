
import { lazy, useContext,useEffect } from 'react';
import { UserContext } from '../utils/UserContextProvider';
import { Box, Button, TextField } from '@mui/material';
import ChatHaeder from './ChatHaeder';




export default function Main() {
  const { setName,Register } = useContext(UserContext);

  useEffect(() => {
    setName('הרשמה')
  }, [])
  

  const setChatName = (e) => {
    e.preventDefault();
    let {mail,pass,uName}=e.target;
    Register(mail.value,pass.value,uName.value);

  }


  return (
    <Box>

      <form onSubmit={setChatName} className="flex-center-all" style={{flexDirection:'column'}}  >
        <TextField label="מייל" type='email' variant="outlined"  name='mail' />
        <TextField label="סיסמה" variant="outlined"  name='pass' />
        <TextField label="שם" variant="outlined" name='uName' />
        {/* <Link to={} /> */}
        <Button type='submit' variant="contained" >כניסה</Button>
      </form>
    </Box>

  )
}
