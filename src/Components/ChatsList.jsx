import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../utils/UserContextProvider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { auth } from '../utils/firebasae';
import { useNavigate } from 'react-router';
import useFireBase from '../utils/useFireBase';


export default function ChatsList() {
  const { objList } = useContext(UserContext);
  const [uEmail, setUEmail] = useState(null)


  useEffect(() => {
    setUEmail(auth?.currentUser?.email)

  }, [auth])


  const [idsList,,,,AddChatId] = useFireBase('chatId')

  const navigate = useNavigate();

  const goToChat = (chatWith) => {
    var chatId=null;
    idsList.find((id) => {

      for (const key in id) {
        if ((id[key].user1 === uEmail && id[key].user2 === chatWith) || (id[key].user2 === uEmail && id[key].user1 === chatWith)) {
          chatId = key;
        }
      }

    }
  )
    if (!chatId) {
      AddChatId(chatWith,uEmail).then(() => {
        // Success
        navigate('/chat', { state: { chatId } })
        console.log('succses')
  
      }).catch((error) => {
        console.log(error)
      })
      chatId= idsList.length;
      console.log('chatId', chatId)
    }else{
      navigate('/chat', { state: { chatId } })
    }

    
  }

  const renderList = () => {
    let strList = [];
    let filteredList = objList.filter((obj, index) => obj[index].email !== uEmail);

    if (filteredList.length > 0) {
      strList = filteredList.map((user, index) => {

        for (const key in user) {

          return <ListItem
            key={user[key].email}
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment" disabled>
                <CommentIcon />
              </IconButton>
            }
            onClick={() => goToChat(user[key].email)}
          >
            <ListItemText primary={`שיחה עם ${user[key].name}`} />
          </ListItem>

        }
      })
    }

    return strList;

  }


  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
        {renderList()}
      </List>

    </>
  )
}
