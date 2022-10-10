import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Home/Home';
import Quiz from '../Quiz/Quiz';
import About from '../About/About';
import Blog from '../Blog/Blog';
import loaderApiData from '../../loaders/loaderApiData';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    loader: loaderApiData,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/home', element: <Home></Home> },
      { path: '/quiz', element: <Quiz></Quiz> },
      { path: '/about', element: <About></About> },
      { path: '/blog', element: <Blog></Blog> },
    ],
  },
]);

export default routes;
