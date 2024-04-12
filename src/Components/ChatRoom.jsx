import { Stack } from '@mui/material'
import ChatHaeder from './ChatHaeder'
import Messages from './Messages'
import NewMessage from './NewMessage'
import { useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { UserContext } from '../utils/UserContextProvider';

export default function ChatRoom() {

  const { setName } = useContext(UserContext);
  const { state } = useLocation();
  const { chatId, chatWithName } = state
  console.log('chatId', chatId)

  useEffect(() => {
    setName(chatWithName)
  }, [])
  

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={0}
      sx={{
        m: '0',
        borderRadius: 5,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        height: '100%'
      }}
    >



      <Messages chatId={chatId} />
      <NewMessage chatId={chatId} />


    </Stack>
  )
}
