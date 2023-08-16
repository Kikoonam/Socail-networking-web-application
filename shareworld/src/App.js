import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/Login';
import SignIn from './pages/Signin';
import Dashboard from './pages/Dashborad';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {path:'/',
   element:<RootLayout/>,
   children:[
    {path: '/', element:<Login/>},
    {path:'/signin', element:<SignIn/>},
    {path:'/dashboard',element:<Dashboard/>}
   ]
  }
  
])


function App() {
  return <RouterProvider router={router}/>
    
  
}

export default App;
