import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import CustomTodo from './CustomTodo.jsx'
import App from './App.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/custom' element={<CustomTodo/>}></Route>
  <Route path='/' element={<App/>}></Route>
  </>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>

)
