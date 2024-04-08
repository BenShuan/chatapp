import { AccountCircle } from '@mui/icons-material';
import React, { useContext } from 'react'
import { UserContext } from '../utils/UserContextProvider';
import Typography from '@mui/material/Typography';


export default function Message({ dialogImage, content }) {

  const {name} = useContext(UserContext)

  let time = Object.keys(content)[0];
  let sender = Object.keys(content[time])[0];
  let message = content[time][sender];

  let isImage = message.slice(0, 4) == 'data';

  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexDirection: sender === name ? 'row-reverse' : 'row', padding: '5px 20px 0' }} >
      <AccountCircle />
      {isImage ?
        <img src={message} style={{ maxWidth: "50%", borderRadius: 20 }} onClick={() => dialogImage({ show: true, message })} /> :
        <Typography style={{ height: 'fit-content', maxWidth: '100%', backgroundColor: "#2cf590", borderRadius: 15, textAlign: sender === 'name' ? 'left' : 'right', padding: "5px 20px" }}>{message}</Typography>
      }
      <Typography style={{ width: 40 }}> </Typography>

    </div>

  )
}
