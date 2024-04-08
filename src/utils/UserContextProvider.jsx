import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useMemo, useState } from 'react'
import { auth } from './firebasae';
import {  useNavigate } from 'react-router';
import useFireBase from './useFireBase';



export const UserContext = createContext();





export default function UserContextProvider({ children }) {

  const [name, setName] = useState(null);
  const navigate = useNavigate();

  const [objList, setObjList, ,AddUser] = useFireBase('names');

  useEffect(() => {
    name !== null && navigate("/chatslist");
    console.log('name', name)
  }, [name])

  
  const getName = (mail) => {
    for (const num in objList) {
      if (objList[num][num]["email"] === mail) {
        setName(objList[num][num]["name"])
      }
    }
  }
  

  const SignIn = (mail, pass) => {
    setPersistence(auth,browserLocalPersistence).then(()=>
    signInWithEmailAndPassword(auth, mail, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        getName(mail);
        
      }))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });

  }

  const Register = (email, password,name)=>{
          // Create a new user with email and password using firebase
          createUserWithEmailAndPassword(auth, email, password)
          .then((res) => {

              AddUser(email,name)
              navigate('/chatslist');
              console.log(res.user)
            })
          .catch(err => setError(err.message))
  }

  return (
    <UserContext.Provider value={{ name, setName, SignIn,objList,Register }}>
      {children}
    </UserContext.Provider>
  )
}
