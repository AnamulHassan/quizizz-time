import React, { useContext } from 'react';
import { QuizDataContext } from '../Root/Root';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import underline from '../../assets/images/underline1.svg';

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
      </div>
      <div className="col-span-7 md:col-span-2"></div>
    </section>
  );
};

export default RenderQuiz;
