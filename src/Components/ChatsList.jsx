import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../utils/UserContextProvider';

import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';
import useFireBase from '../utils/useFireBase';
import { ThemeContext } from '@emotion/react';



export default function ChatsList() {
  const { objList, user } = useContext(UserContext);
  const [uEmail, setUEmail] = useState(null)

const theme = useContext(ThemeContext)
  
  const [idsList, , , , AddChatId] = useFireBase('chatId')

  const navigate = useNavigate();

  const goToChat = (chatWith) => {
    var chatId = null;
    idsList.find((id) => {

      for (const key in id) {
        if ((id[key].user1 === user.email && id[key].user2 === chatWith) || (id[key].user2 === user.email && id[key].user1 === chatWith)) {
          chatId = key;
        }
      }

    }
    )
    if (!chatId) {
      chatId = AddChatId(chatWith, user.email)
      console.log('chaaatid', chatId)
      navigate('/chat', { state: { chatId } })


    } else {
      navigate('/chat', { state: { chatId } })
    }


  }

  const renderList = () => {
    let strList = [];
    let filteredList = objList.filter((obj, index) => obj[index].email !== user.email);

    if (filteredList.length > 0) {
      strList = filteredList.map((u, index) => {

        for (const key in u) {

          return <ListItem
            key={u[key].email}
            disableGutters
            onClick={() => goToChat(u[key].email)}
            sx={[{
              m:3,
              p: '5px 10px',
              borderRadius: 15,
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;",
              transition: `${theme.transitions.create(['background-color','scale', 'transform'], {
                duration: 500,
                
              })}`
            },
            {
              '&:hover': {
                cursor: 'pointer',
                scale: '1.1',
                bgcolor: '#ddd',
                transition: `${theme.transitions.create(['background-color','scale'], {
                  duration: 500,
                  
                })}`
              }
            },
            {
              '&:active': {
              }

            }]}
          >
            <IconButton aria-label="comment" disabled >
              <CommentIcon />
            </IconButton>
            <ListItemText sx={{ textAlign: 'end' }} primary={`שיחה עם ${u[key].name}`} />
          </ListItem>

        }
      })
    }

    return strList;

  }


  return (
    <Box sx={{width:'100%', justifyContent:'center'}}>
      <List sx={{margin:'auto', maxWidth: 360, bgcolor: 'background.default' }} >
        {renderList()}
      </List>

    </Box>
  )
}
