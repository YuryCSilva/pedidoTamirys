import Home from 'pages/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const Routes = createBrowserRouter(
  createRoutesFromElements([<Route path='/' element={<Home />} />])
);

export default Routes;
