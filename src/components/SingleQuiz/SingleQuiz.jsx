import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const SingleQuiz = ({ questionData, index }) => {
  const { options, id, question, correctAnswer } = questionData;
  const [close, setClose] = useState(true);
  const handleRadioBtn = (event, id) => {
    correctAnswer === event.target.value
      ? toast.success('Your answer is correct', { autoClose: 500 })
      : toast.warning('Your answer is incorrect :(', { autoClose: 500 });
    // console.log(event.target.value);
  };
  const handleCorrectAns = () => {
    setClose(!close);
  };
  // console.log(clickBtn);
  return (
    <div className="text-xl border-2 font-semibold border-black mb-5 px-12 py-4 relative">
      <h2 className="w-4/5 mx-auto text-center text-2xl mb-4">
        {' '}
        <span>Quiz {index}: </span>
        {question.startsWith('<p>')
          ? question.replace('<p>', '').replace('</p>', '')
          : question}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <div key={index}>
            <input
              className="w-6 h-6 mr-3 cursor-pointer text-[#ca6551] border-2 focus:outline-none focus:ring focus:ring-[#e5b2a8]"
              type="radio"
              name="radio-btn"
              value={option}
              onClick={handleRadioBtn}
              id={`radio${option}`}
            ></input>
            <label
              htmlFor={`radio${option}`}
              className=" hover:text-[#ca6551] duration-200 rounded-lg px-2 py-3 cursor-pointer select-none"
            >
              {option}{' '}
            </label>
            <ToastContainer
              position="top-center"
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        ))}
      </div>
      <button className="absolute top-4 right-4" onClick={handleCorrectAns}>
        {close ? (
          <EyeIcon className="h-8 w-8 text-black" />
        ) : (
          <EyeSlashIcon className="h-8 w-8 text-black" />
        )}{' '}
      </button>
    </div>
  );
};

export default SingleQuiz;
