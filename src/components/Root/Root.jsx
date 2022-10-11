import { createContext, useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { loaderApiDataWithId } from '../../loaders/loaderApiData';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
export const QuizCategoryContext = createContext([]);
export const QuizDataContext = createContext({});

const Root = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const [questionsData, setQuestionsData] = useState({});
  const handleQuizPractice = async id => {
    await loaderApiDataWithId(id).then(data => {
      setQuestionsData(data.data);
      navigate(`/quiz/${data.data.id}`);
    });
  };
  // console.log(questionsData);
  return (
    <QuizCategoryContext.Provider value={[data.data]}>
      <QuizDataContext.Provider value={{ handleQuizPractice, questionsData }}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </QuizDataContext.Provider>
    </QuizCategoryContext.Provider>
  );
};

export default Root;
