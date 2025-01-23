import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import ArticlesList from './pages/ArticlesList'
import ErrorPage from './pages/ErrorPage'


const routes = [{
  path: '/',
  element: <Home/>

},

{
  path:'/about',
  element:<About/>
},

{
  path:'/articleslist',
  element:<ArticlesList/>
},

{
  path:'*',
  element:<ErrorPage/>
}

]

const router = createBrowserRouter(routes)

function App() {
  

  return (
    <RouterProvider router={router}/>
  )

}

export default App
