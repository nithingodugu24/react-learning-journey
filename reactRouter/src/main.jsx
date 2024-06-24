import ReactDOM from 'react-dom/client'
import HelloWorld from './HelloWorld'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import './index.css'
import Contact from './components/Contact'
import Github, { githubInfoLoader } from './components/Github'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/' element={<Github/>}>
        <Route 
        path=':userid' 
        loader={githubInfoLoader}
        element={<Github/>}/>
      </Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />

)