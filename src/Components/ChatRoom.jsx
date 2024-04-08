import { Stack } from '@mui/material'
import ChatHaeder from './ChatHaeder'
import Messages from './Messages'
import NewMessage from './NewMessage'
import { useLocation } from 'react-router-dom';

export default function ChatRoom() {


  const { state } = useLocation();
  const chatId = state.chatId
  console.log('chatId', chatId)


  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={0}
      sx={{
        m:'auto',
        borderRadius: 5,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        width: '70vw',
        height:'100%'
      }}
    >


      <ChatHaeder />
      <Messages chatId={chatId} />
      <NewMessage chatId={chatId} />


    </Stack>
  )
}
