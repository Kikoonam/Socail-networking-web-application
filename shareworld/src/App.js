import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashborad';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/HomePage';
import './styles/app.css'
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {path:'/',
   element:<RootLayout/>,
   errorElement:<ErrorPage/>,
   children:[
    {path:'/signup', element:<SignUp/>},
    {path:'/dashboard',element:<Dashboard/>},
    {path:'/auth',element:<Login/>},
    {path:'/not-found',element:<NotFound/>}
   ]
  }
  
])


function App() {
  return <RouterProvider router={router}/>
    
  
}

export default App;
