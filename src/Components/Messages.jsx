
import { useContext, useEffect, useState } from 'react';
import useFireBase from '../utils/useFireBase';
import Message from './Message';
import { UserContext } from '../utils/UserContextProvider';
import { ThemeContext, ThemeProvider } from '@emotion/react';


export default function Messages({chatId}) {
  const { name } = useContext(UserContext)

  const theme = useContext(ThemeContext)

  const [messages] = useFireBase(chatId);

  const [imgToShow, setImgToShow] = useState({ show: false })


  const renderList = () => {
    let strList = [];
    if (messages.length > 0) {
      strList = messages.map((mess, index) => {

        return <Message content={mess} key={index} dialogImage={setImgToShow} />
      })
    }
    else{
      strList = <h1>שיחה חדשה</h1>
    }

    return strList;

  }
  useEffect(() => {
    document.querySelector('.messages').scrollTop = document.querySelector('.messages').scrollHeight
  }, [messages])

  return (
    <div className='messages' style={{ width: '100%',height: '100%', backgroundColor: theme.palette.background.paper, display: 'flex', flexDirection: 'column', overflow: 'auto', gap: 10,paddingBottom:10}}>
      {renderList()}
      <dialog open={imgToShow.show} style={{position:'absolute',top:10, padding: 0, margin: 'auto', borderRadius: 20,width:'100%',maxWidth:'70vw', background: 'none', maxHeight:'90vh' }}>
        <img src={imgToShow.message} style={{ width: '100%', borderRadius: 'inherit', display: 'block'}} />

        <button style={{ position: 'absolute', top: 10, left: 10 }} onClick={() => setImgToShow({ show: false })}>X</button>
      </dialog>
    </div>
  )
}
