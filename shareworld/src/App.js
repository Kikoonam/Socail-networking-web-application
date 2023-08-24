import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/Login';
import SignIn from './pages/Signin';
import Dashboard from './pages/Dashborad';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/HomePage';
import './styles/app.css'

const router = createBrowserRouter([
  {path:'/',
   element:<RootLayout/>,
   errorElement:<ErrorPage/>,
   children:[
    {path:'/signin', element:<SignIn/>},
    {path:'/dashboard',element:<Dashboard/>},
    {path:'/auth',element:<Login/>}
   ]
  }
  
])


function App() {
  return <RouterProvider router={router}/>
    
  
}

export default App;
