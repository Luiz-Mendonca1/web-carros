import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Car from './pages/car';
import Login from './pages/login';
import Register from './pages/register';
import Layout from './components/Layout';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/car/:id',
        element: <Car />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  { 
    path: '/register',
    element: <Register />
  },
]);

export default router;