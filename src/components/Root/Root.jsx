import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
export const QuizCategoryContext = createContext([]);

const Root = () => {
  const data = useLoaderData();
  return (
    <QuizCategoryContext.Provider value={[data.data]}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </QuizCategoryContext.Provider>
  );
};

export default Root;
