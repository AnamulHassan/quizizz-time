import React, { useContext, useState, useEffect } from 'react';
import { QuizDataContext } from '../Root/Root';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import underline from '../../assets/images/underline1.svg';
import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import ResultSummary from '../ResultSummary/ResultSummary';
import {
  storeDataLocal,
  getStoreDataLocal,
  removeStoreDataLocal,
} from '../../loaders/fakeDB';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const RenderQuiz = () => {
  const [correct, setCorrect] = useState([]);
  const [incorrect, setIncorrect] = useState([]);
  useEffect(() => {
    const { correctAnswers, incorrectAnswers } = getStoreDataLocal();
    setCorrect(correctAnswers);
    setIncorrect(incorrectAnswers);
  }, []);
  const handleRadioBtn = (event, correctAnswer) => {
    const answer =
      event.target.parentElement.parentNode.previousSibling.firstChild.nextElementSibling.innerText.slice(
        4,
        -2
      );
    if (correctAnswer === event.target.value) {
      if (correct) {
        setCorrect(previous => [...previous, answer]);
        toast.success('Answer is correct :)', { autoClose: 500 });
        storeDataLocal('correct-answer', answer);
      } else {
        setCorrect([answer]);
        toast.success('Answer is correct :)', { autoClose: 500 });
        storeDataLocal('correct-answer', answer);
      }
    } else {
      if (incorrect) {
        setIncorrect(previous => [...previous, answer]);
        toast.error('Answer is Wrong :(', { autoClose: 500 });
        storeDataLocal('incorrect-answer', answer);
      } else {
        setIncorrect([answer]);
        toast.error('Answer is Wrong :(', { autoClose: 500 });
        storeDataLocal('incorrect-answer', answer);
      }
    }
  };
  const handleClearSummary = () => {
    removeStoreDataLocal();
    setCorrect([]);
    setIncorrect([]);
    Swal.fire('Congratulation!', 'Yoy finished the quiz!', 'success');
  };
  const { questionsData } = useContext(QuizDataContext);
  return (
    <section className="w-11/12 mx-auto grid grid-cols-7 gap-6 my-6">
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
              handleRadioBtn={handleRadioBtn}
            ></SingleQuiz>
          ))}
        {questionsData.questions && (
          <div className="w-full  justify-center hidden md:flex">
            <Link
              to="/home"
              className="bg-[#dd392f]   hover:bg-[#85221c] duration-300 py-2 text-white mt-6 flex px-6 items-center rounded-lg text-xl font-bold]"
            >
              Back to Home <ArrowSmallRightIcon className="h-6 w-6 ml-2" />
            </Link>
          </div>
        )}
      </div>
      <div className="col-span-7 md:col-span-2">
        {questionsData.questions && (
          <ResultSummary
            correct={correct}
            incorrect={incorrect}
            questionLength={questionsData.questions}
            handleClearSummary={handleClearSummary}
          ></ResultSummary>
        )}
      </div>
    </section>
  );
};

export default RenderQuiz;
