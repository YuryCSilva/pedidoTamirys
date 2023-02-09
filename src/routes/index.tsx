import { Context } from 'App';
import Home from 'pages/Home';
import Login from 'pages/Login';
import { useContext, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes as RoutesElement
} from 'react-router-dom';
import { LocalStorage } from 'services/localStorage';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const Routes = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  useEffect(() => {
    if (LocalStorage.getItem('user'))
      setIsAuthenticated(true);
    else if (!LocalStorage.getItem('user'))
      setIsAuthenticated(false);
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.VITE_HOST}>
      <RoutesElement >
        <Route path='/' element={<PublicRoute isAuthenticated={isAuthenticated}><Login /></PublicRoute>} />
        <Route path='/user/home' element={<PrivateRoute isAuthenticated={isAuthenticated}><Home /></PrivateRoute>} />
      </RoutesElement>
    </BrowserRouter>
  )
}

export default Routes;
