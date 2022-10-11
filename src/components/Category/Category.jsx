import React, { useContext } from 'react';
import QuizCategory from '../QuizCategory/QuizCategory';
import { QuizCategoryContext, QuizDataContext } from '../Root/Root';
import underline from '../../assets/images/underline.svg';

const Category = () => {
  const quizCategoryData = useContext(QuizCategoryContext);
  const { handleQuizPractice } = useContext(QuizDataContext);

  // console.log(quizData);
  return (
    <section>
      <div className=" w-11/12 md:w-3/4 mx-auto text-center mt-8 mb-6">
        <h2 className=" leading-10 text-4xl md:text-5xl font-bold">
          <span className=" relative text-5xl md:text-6xl font-extrabold text-[#dd392f] z-10">
            {' '}
            Quickly find or create
            <img
              className="absolute w-full  top-[85%] left-3/4 md:left-2/4 z-[-10] translate-y-[-50%] translate-x-[-50%]"
              src={underline}
              alt="text background"
            />
          </span>
          <br />
          <span className="">anything in your curriculum</span>
        </h2>
        <p className="text-lg mt-4 text-[#2c0b09] md:text-xl font-semibold">
          {' '}
          Prepare high-quality, interactive content in as little as two minutes.
          Flexibly engage students at their own pace, from any device. The exact
          insights you need to make data-driven instruction a reality.
        </p>
      </div>
      <div className="w-10/12 mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 my-12">
        {quizCategoryData[0].map(quizCategory => (
          <QuizCategory
            key={quizCategory.id}
            quizCategory={quizCategory}
            handleQuizPractice={handleQuizPractice}
          ></QuizCategory>
        ))}
      </div>
    </section>
  );
};

export default Category;
