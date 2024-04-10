import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Fallback from './utils/fallback.jsx';


const router = createHashRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        // element: <Main />,
        async lazy() {
          let Main = await import("./Components/Main.jsx");
          return { Component: Main.default };
        },
        hydrateFallback: <Fallback/>,
      },{
        path: "/register",
        // element: <Main />,
        async lazy() {
          let Register = await import("./Components/Register.jsx");
          return { Component: Register.default };
        },
        hydrateFallback: <Fallback/>,

      },
      {
        path: "/chatslist",
        // element: <ChatsList />,
        async lazy() {
          let ChatsList = await import("./Components/ChatsList.jsx");
          return { Component: ChatsList.default };
        },
        hydrateFallback: <Fallback/>,

      },
      {
        path: "/chat",
        // element: <ChatRoom />,
        async lazy() {
          let ChatRoom = await import("./Components/ChatRoom.jsx");
          return { Component: ChatRoom.default };
        },
        hydrateFallback: <Fallback/>,



      }
    ]
  },


]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
