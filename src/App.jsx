import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./features/dashboard/Dashboard"
import Course from './features/courses/Course'
import MyCourse from './features/myCourse/MyCourse'
import AppLayout from "./ui/AppLayout"
import Progress from "./features/progress/Progress"

const router = createBrowserRouter([

{
  element: <AppLayout />,
  children:[
{
  path:'/',
  element: <Dashboard />
},
{
  path:'/course',
  element: <Course />
},
{
  path:'/mycourse',
  element: <MyCourse />
},
{
  path:'/progress',
  element: <Progress />
}
]
}
])

export default function App(){

  return <div className="h-screen overflow-hidden"> 
  <RouterProvider router={router}/>
  </div> 

}
