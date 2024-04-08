import React, { Suspense, useContext, useEffect, useMemo, useState } from "react";


import { db } from "./firebasae";
import { onValue, ref, set, update } from "firebase/database";
import { UserContext } from "./UserContextProvider";
import { addDoc } from "firebase/firestore";


function useFireBase(docName) {
  const [objList, setObjList] = useState([]);
  const query = docName!==null ? ref(db, docName):"";


  useMemo(() => {

    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        let newArr = []
        for (const key in data) {
          newArr = [...newArr, { [key]: data[key] }]
          setObjList(newArr)
        }
      }
    });
  }, []);

  const AddObject = (mess, name) => {

    let key = new Date();
    let newMess = {
      [key]: {
        [name]: mess
      }
    }

    update(query, newMess).then(() => {
      // Success
      console.log('succses')

    }).catch((error) => {
      console.log(error)
    })
  }

  const AddChatId = (user1, user2) => {

    let key = Date.now()

    let newId = {
      [key]: {
        user1,
        user2
      }
    }
     update(query, newId).then(() => {
      console.log('succses')
      
    }).catch((error) => {
      console.log(error)
    })
    return key.toString()
  }


  const AddUser = (email, name) => {

    let key = objList.length

    let newUser = {
      [key]: {
        email,
        name
      }
    }

    update(query, newUser).then(() => {
      // Success
      console.log('succses')

    }).catch((error) => {
      console.log(error)
    })
  }

  return [objList, setObjList, AddObject, AddUser, AddChatId];
}

export default useFireBase;