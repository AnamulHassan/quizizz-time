import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Category from '../Category/Category';
import Statistics from '../Statistics/Statistics';
import About from '../About/About';
import Blog from '../Blog/Blog';
import { loaderApiData } from '../../loaders/loaderApiData';
import Home from '../Home/Home';
import RenderQuiz from '../RenderQuiz/RenderQuiz';
import ErrorPage from '../ErrorPage/ErrorPage';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: loaderApiData,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/home', element: <Home></Home> },
      { path: '/category', element: <Category></Category> },
      { path: '/statistics', element: <Statistics></Statistics> },
      { path: '/about', element: <About></About> },
      { path: '/blog', element: <Blog></Blog> },
      { path: '/quiz/:quizId', element: <RenderQuiz></RenderQuiz> },
    ],
  },
]);

export default routes;
