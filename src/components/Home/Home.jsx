import React, { useContext } from 'react';
import QuizItem from '../QuizItem/QuizItem';
import { QuizCategoryContext } from '../Root/Root';
import textBG from '../../assets/images/text-bg.png';

const Home = () => {
  const quizCategoryData = useContext(QuizCategoryContext);
  console.log(quizCategoryData);
  return (
    <section>
      <div className=" w-11/12 md:w-3/4 mx-auto text-center mt-8 mb-6">
        <h2 className="  text-4xl md:text-5xl font-bold">
          It matters <br />{' '}
          <span className=" relative text-5xl md:text-6xl font-extrabold text-[#dd392f] z-10">
            how you ask
            <img
              className="absolute  top-2/4 left-2/4 z-[-10] translate-y-[-50%] translate-x-[-50%]"
              src={textBG}
              alt="text background"
            />
          </span>
        </h2>
        <p className="text-md md:text-lg font-semibold">
          {' '}
          matters how you ask Assessment, instruction, and practice that
          motivate every student to mastery
        </p>
      </div>
      <div className="w-4/5 mx-auto text-center grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 ">
        {quizCategoryData[0].map(quizCategory => (
          <QuizItem key={quizCategory.id}></QuizItem>
        ))}
      </div>
    </section>
  );
};

export default Home;
