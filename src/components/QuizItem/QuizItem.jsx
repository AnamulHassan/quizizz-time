import React from 'react';
import { Link } from 'react-router-dom';

const QuizItem = ({ quizCategory }) => {
  const { id, logo, name, total } = quizCategory;

  return (
    <div className="max-w-sm bg-[#faf0ee] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg bg-[#ca6551]" src={logo} alt={name} />
      <div className="py-2 px-4 text-start text-lg font-semibold bg-[#faf0ee]">
        <h3 className="text-2xl text-[#2c0b09]">{name}</h3>
        <h4>Number of quiz: {total}</h4>
        <Link
          to="#"
          className="w-full  inline-flex items-center justify-center py-2 px-3 text-sm font-medium text-white bg-[#ca6551] rounded-lg hover:bg-[#d58474] duration-300 focus:ring-2 focus:outline-none focus:ring-[#653329] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default QuizItem;
