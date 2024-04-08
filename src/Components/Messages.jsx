
import { useContext, useState } from 'react';
import useFireBase from '../utils/useFireBase';
import Message from './Message';
import { UserContext } from '../utils/UserContextProvider';


export default function Messages({chatId}) {
  const { name } = useContext(UserContext)

  const [messages] = useFireBase(chatId);

  const [imgToShow, setImgToShow] = useState({ show: false })


  const renderList = () => {
    let strList = [];
    if (messages.length > 0) {
      strList = messages.map((mess, index) => {

        return <Message content={mess} key={index} dialogImage={setImgToShow} />
      })
    }

    return strList;

  }


  return (
    <div style={{ width: '100%', height: '80vh', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', overflow: 'auto', gap: 10 }}>
      {renderList()}
      <dialog open={imgToShow.show} style={{ padding: 0, margin: 'auto', borderRadius: 20, maxWidth: '80vw', background: 'none' }}>
        <img src={imgToShow.message} style={{ width: '100%', borderRadius: 'inherit', display: 'block' }} />

        <button style={{ position: 'absolute', top: 10, left: 10 }} onClick={() => setImgToShow({ show: false })}>X</button>
      </dialog>
    </div>
  )
}
