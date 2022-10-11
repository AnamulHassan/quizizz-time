import React, { useContext } from 'react';
import { QuizDataContext } from '../Root/Root';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const RenderQuiz = () => {
  const { questionsData } = useContext(QuizDataContext);
  // console.log(questionsData.questions);
  return (
    <section className="w-11/12 mx-auto grid grid-cols-7 my-6">
      <div className="col-span-5">
        {questionsData.questions &&
          questionsData.questions.map((question, index) => (
            <SingleQuiz
              index={index + 1}
              key={question.id}
              questionData={question}
            ></SingleQuiz>
          ))}
      </div>
      <div className="col-span-2"></div>
    </section>
  );
};

export default RenderQuiz;
