import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Cases from '../pages/Cases';
import About from '../pages/About';
import News from '../pages/News';
import Contact from '../pages/Contact';

export const routes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/cases',
    element: <Cases />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/news',
    element: <News />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]; 