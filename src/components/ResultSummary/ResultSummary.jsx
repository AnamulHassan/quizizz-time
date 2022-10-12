import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const ResultSummary = ({
  correct,
  incorrect,
  questionLength,
  handleClearSummary,
}) => {
  return (
    <aside className="bg-[#faf0ee] h-[85vh] rounded-2xl py-8 px-6 sticky top-6">
      <h2 className="text-center text-3xl font-bold">Result Summary</h2>
      <h2 className="text-2xl font-semibold mt-6 mb-8">
        Total Question: {questionLength.length}{' '}
      </h2>
      {correct && (
        <div>
          <h3 className="text-xl font-semibold my-3">
            Correct Answer:{' '}
            {correct.map((num, index) => (
              <span key={index}>{num},</span>
            ))}
          </h3>
          <h3 className="text-xl font-extrabold my-3">
            Total Correct Answer: {correct.length}
          </h3>
        </div>
      )}
      {incorrect && (
        <div>
          <h3 className="text-xl font-semibold my-3">
            Incorrect Answer:{' '}
            {incorrect.map((num, index) => (
              <span key={index}>{num},</span>
            ))}
          </h3>
          <h3 className="text-xl font-extrabold my-3">
            Total Incorrect Answer: {incorrect.length}
          </h3>
        </div>
      )}
      <button
        onClick={handleClearSummary}
        className="bg-[#dd392f]  hover:bg-[#85221c] duration-300 py-2 text-white mt-6 flex mx-auto px-6 rounded-lg text-lg md:text-xl font-bold]"
      >
        {' '}
        Clear Summary
      </button>
      <Link
        to="/category"
        className="bg-[#dd392f]  hover:bg-[#85221c] duration-300 py-2 text-white mt-6 flex justify-center mx-auto px-6 rounded-lg text-lg md:text-xl font-bold]"
      >
        Explore Another Quiz <ArrowSmallRightIcon className="h-6 w-6 ml-2" />
      </Link>
    </aside>
  );
};

export default ResultSummary;
