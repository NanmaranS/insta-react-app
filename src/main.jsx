import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'

 import { Home } from './Home_Components/Home'

import { Stories_View } from './Feed_Components/Stories_View'
import { Profile } from './Feed_Components/Profile'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  
  {
    path:"/story/:id/:total",
    element:<Stories_View/>
  },
  {
    path:"/profile",
    element:<Profile/>
  }
])




createRoot(document.getElementById('root')).render(

<RouterProvider router={router}/>
   
)
