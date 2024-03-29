import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Donation from './component/Donation/Donation.jsx';
import Statistics from './component/Statistics/Statistics.jsx';
import CardDetails from './component/CardDetails/CardDetails';
import ErrorPage from './component/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }, 
      {
        path:"/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>
      },
      {
        path: "/cards/:id",
        element: <CardDetails></CardDetails>,
        loader: ()=> fetch('/data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
