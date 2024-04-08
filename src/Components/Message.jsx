import { AccountCircle } from '@mui/icons-material';
import React from 'react'

export default function Message({ dialogImage, content }) {

  let time = Object.keys(content)[0];
  let sender = Object.keys(content[time])[0];
  let message = content[time][sender];

  let isImage = message.slice(0, 4) == 'data';

  return (
    <div style={{ color: "#000", display: 'flex', gap: 10, alignItems: 'center', flexDirection: sender === 'amit' ? 'row-reverse' : 'row', padding: '0 20px' }} >
      <AccountCircle />
      {isImage ?
        <img src={message} style={{ maxWidth: "50%", borderRadius: 20 }} onClick={() => dialogImage({ show: true, message })} /> :
        <p style={{ height: 'fit-content', maxWidth: '100%', backgroundColor: "#2cf590", borderRadius: 15, textAlign: sender === 'amit' ? 'left' : 'right', padding: "5px 20px" }}>{message}</p>
      }
      <p style={{ width: 40 }}> </p>
    </div>

  )
}
