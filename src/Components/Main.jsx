
import { lazy, useContext, useEffect } from 'react';
import { UserContext } from '../utils/UserContextProvider';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import ChatHaeder from './ChatHaeder';




export default function Main() {
  const { name, setName,SignIn } = useContext(UserContext);

  useEffect(() => {
    setName('התחברות')
  }, [])
  

  const setChatName = (e) => {
    e.preventDefault();
    let {mail,pass}=e.target;
    SignIn(mail.value,pass.value);

  }


  return (
   <>
      <form className='flex-center-all' onSubmit={setChatName} style={{width:'70%', margin:'auto',flexDirection:'column'}} >
        <TextField label="מייל" type='email' variant="outlined"  name='mail' />
        <TextField label="סיסמה" variant="outlined" name='pass' />
        <Button type='submit' variant="contained" >כניסה</Button>
        <Link style={{display:'block',margin:15}} to={"/register"}>להרשמה</Link>

      </form>
    </>

  )
}
