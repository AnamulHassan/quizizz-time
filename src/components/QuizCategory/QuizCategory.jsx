import React from 'react';
import {
  ChevronDoubleRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const QuizItem = ({ quizCategory, handleQuizPractice }) => {
  const { id, logo, name, total } = quizCategory;

  return (
    <div className=" bg-[#faf0ee] rounded-lg border translate-y-0 hover:translate-y-2 duration-300 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full rounded-t-lg bg-[#ca6551]" src={logo} alt={name} />
      <div className="py-2 px-4 text-start text-lg font-semibold bg-[#faf0ee]">
        <h3 className="text-2xl text-[#2c0b09]">{name}</h3>
        <h4 className="flex items-center">
          <span>
            <CheckCircleIcon className="h-6 w-6 mr-2 text-[#dd392f]"></CheckCircleIcon>
          </span>{' '}
          <span> Number of Quiz: {total}</span>
        </h4>
        <Link
          onClick={() => handleQuizPractice(id)}
          className="w-full mt-5 inline-flex items-center justify-center py-2 px-3 text-lg font-semibold text-white bg-[#ca6551] rounded-lg hover:bg-[#d58474] duration-300 focus:ring-2 focus:outline-none focus:ring-[#653329] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Let's begin
          <ChevronDoubleRightIcon className="h-6 w-6 ml-2"></ChevronDoubleRightIcon>
        </Link>
      </div>
    </div>
  );
};

export default QuizItem;
