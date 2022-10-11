import React, { useContext } from 'react';
import QuizItem from '../QuizItem/QuizItem';
import { QuizCategoryContext } from '../Root/Root';
import textBG from '../../assets/images/text-bg.png';
import { loaderApiDataWithId } from '../../loaders/loaderApiData';

const Home = () => {
  const quizCategoryData = useContext(QuizCategoryContext);
  const handleQuizPractice = id => {
    const quizData = loaderApiDataWithId(id);
    console.log(quizData);
  };
  return (
    <section>
      <div className=" w-11/12 md:w-3/4 mx-auto text-center mt-8 mb-6">
        <h2 className="  text-4xl md:text-5xl font-bold">
          It matters <br />{' '}
          <span className=" relative text-5xl md:text-6xl font-extrabold text-[#dd392f] z-10">
            how you ask
            <img
              className="absolute  top-[95%] left-2/4 z-[-10] translate-y-[-50%] translate-x-[-50%]"
              src={textBG}
              alt="text background"
            />
          </span>
        </h2>
        <p className="text-lg mt-8 text-[#2c0b09] md:text-lg font-semibold">
          {' '}
          Assessment, instruction, and practice that motivate every learner to
          mastery
        </p>
        <p className="text-lg text-[#2c0b09] md:text-lg font-semibold">
          Help every learner show progress, without burning out mentors.
        </p>
      </div>
      <div className="w-10/12 mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 my-12">
        {quizCategoryData[0].map(quizCategory => (
          <QuizItem
            key={quizCategory.id}
            quizCategory={quizCategory}
            handleQuizPractice={handleQuizPractice}
          ></QuizItem>
        ))}
      </div>
    </section>
  );
};

export default Home;
