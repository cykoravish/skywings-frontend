import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import{ RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './Home'
import About from './about'
import Contact from './Contact'
import Job from './componentes/job'
import JobDtails from './componentes/job-details'
import Services from './componentes/services'
import Blog from './componentes/blog'
import Employes from './componentes/employe'
import Career from './componentes/carrer'
import Fresher from './componentes/fresher'
import DetailService from './componentes/DetailService'



const router = createBrowserRouter([
  {path:'/', 
  element: <App/>,
  children:[
    {path:'/',element :<Home/> },
    {path:'/about', element: <About/>},
    {path:'/contact', element: <Contact/>},
    {path:'/job', element: <Job/>},
    {path:'/jobdetails/:id', element:<JobDtails/>},
    {path:'/services', element: <Services/>},
    {path :'/blog', element: <Blog/>},
    {path:'/employes', element:<Employes/>},
    {path: '/carrers', element: <Career/>},
    {path:'/fresher', element: <Fresher/>},
    {path:'/DetailService/:id', element: <DetailService/>}



  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
