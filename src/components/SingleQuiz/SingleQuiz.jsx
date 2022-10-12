import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';

const SingleQuiz = ({ questionData, index, handleRadioBtn }) => {
  const { options, question, correctAnswer } = questionData;
  const [close, setClose] = useState(true);

  const handleCorrectAns = () => {
    setClose(!close);
    Swal.fire(correctAnswer);
  };
  return (
    <div className="text-lg md:text-xl rounded-2xl font-semibold bg-[#faf0ee] mb-5 py-10 px-4 md:p-12 relative">
      <h2 className="md:w-4/5 mx-auto text-center text-[#2c0b09] text-lg md:text-2xl mb-12">
        {' '}
        <span className="font-bold">Quiz {index}: </span>
        {question.startsWith('<p>')
          ? question.replace('<p>', '').replace('</p>', '')
          : question}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="border-2 border-[#ca6551] p-4 rounded-lg "
          >
            <input
              className=" rounded-lg w-6 h-6 mr-3 cursor-pointer text-[#ca6551] border-2 focus:outline-none focus:ring focus:ring-[#e5b2a8]"
              type="radio"
              name="radio-btn"
              value={option}
              onClick={event => handleRadioBtn(event, correctAnswer)}
              id={`radio${option}`}
            ></input>
            <label
              htmlFor={`radio${option}`}
              className=" hover:text-[#ca6551] duration-200 rounded-lg px-2 py-3 cursor-pointer select-none"
            >
              {option}{' '}
            </label>
            <ToastContainer
              position="bottom-center"
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
        <EyeIcon className="h-8 w-8 text-[#ca6551]" />
      </button>
    </div>
  );
};

export default SingleQuiz;
