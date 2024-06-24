import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import About from './components/About'
import { ThemeContextProvider } from './context/ThemeContext'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>

    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
  <RouterProvider router={router}></RouterProvider>
  </ThemeContextProvider>
)
