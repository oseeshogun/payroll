import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
// import Account from './pages/Account';
// import CustomerList from './pages/CustomerList';
// import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
// import ProductList from './pages/ProductList';
// import Register from './pages/Register';
// import Settings from './pages/Settings';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';

const routes = (isLoggedIn:boolean) => [
  {
    path: 'app',
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
    //   { path: 'account', element: <Account /> },
    //   { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <DashBoard /> },
    //   { path: 'products', element: <ProductList /> },
    //   { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
    //   { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
