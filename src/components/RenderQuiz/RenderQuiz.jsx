import React, { useContext } from 'react';
import { QuizDataContext } from '../Root/Root';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import underline from '../../assets/images/underline1.svg';
import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

const RenderQuiz = () => {
  const { questionsData } = useContext(QuizDataContext);
  return (
    <section className="w-11/12 mx-auto grid grid-cols-7 my-6">
      <div className="col-span-7 md:col-span-5">
        {questionsData.name && (
          <h2 className="relative text-6xl z-[10] text-bold text-center my-8 text-[#ca6551]">
            Quiz of {questionsData.name}
            <img
              className="absolute top-[100%] z-[-10]  left-2/4 translate-y-[-50%] translate-x-[-50%]"
              src={underline}
              alt="underline"
            />
          </h2>
        )}
        {questionsData.questions &&
          questionsData.questions.map((question, index) => (
            <SingleQuiz
              index={index + 1}
              key={question.id}
              questionData={question}
              quizCategoryName={questionsData.name}
            ></SingleQuiz>
          ))}
        {questionsData.questions && (
          <div className="w-full flex justify-center">
            <Link
              to="/category"
              className="bg-[#dd392f] w-4/5  md:w-2/5 text-center justify-center hover:bg-[#85221c] duration-300 py-2 text-white mt-6 flex items-center rounded-lg text-xl font-bold]"
            >
              Explore Another Quiz{' '}
              <ArrowSmallRightIcon className="h-6 w-6 ml-2" />
            </Link>
          </div>
        )}
      </div>
      <div className="col-span-7 md:col-span-2"></div>
    </section>
  );
};

export default RenderQuiz;
