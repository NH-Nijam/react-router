import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainPage from './component/MainPage.jsx/MainPage.jsx';
import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';
import Services from './component/Servicess/Services.jsx';
import Project1 from './component/Projects/Project1.jsx';
import Project2 from './component/Projects/Project2.jsx';
import Profile from './component/Sidebar/Profile/Profile.jsx';
import Setting from './component/Settinges/Setting.jsx';
import Help from './component/Help/Help.jsx';
import Listed from './component/Listed/Listed.jsx';
import Todos from './component/Todo/Todos.jsx';
const router =createBrowserRouter([
  {
    path:'/',
    element:<MainPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>,
      },
      {
        path:'services',
        element:<Services/>
      },
      {
        path:'project-1',
        element:<Project1/>
      },
      {
        path:'project-2',
        element:<Project2/>
      },
      {
        path:'Profile',
        element:<Profile/>
      },
      {
        path:'Setting',
        element:<Setting/>
      },
      {
        path:'Help',
        element:<Help/>
      },
      {
        path:'Listed',
        element:<Listed/>
      },
      {
        path:'todo',
        element:<Todos/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
