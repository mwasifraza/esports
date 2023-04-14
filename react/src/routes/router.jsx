import { createBrowserRouter } from 'react-router-dom';
import Login from '../views/Auth/Login.jsx';
import Register from '../views/Auth/Register.jsx';
import Dashboard from '../views/Dashboard.jsx';
import GuestLayout from '../components/Layout/GuestLayout.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
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