import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home/Home.jsx';
import Login from '../views/Auth/Login.jsx';
import Register from '../views/Auth/Register.jsx';
import Dashboard from '../views/Dashboard/Dashboard.jsx';
import GuestLayout from '../components/Layout/GuestLayout.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    }
]);

export default router;