import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Car from './pages/car';
import Login from './pages/login';
import Register from './pages/register';
import Layout from './components/Layout';
import Home from './pages/home';
import PrivateRoute from './routes/private';
import New from './pages/dashboard/new';

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
        element: <PrivateRoute> <Dashboard /> </PrivateRoute>
      },
      {
        path: '/dashboard/new',
        element: <PrivateRoute> <New /> </PrivateRoute>
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