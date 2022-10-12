import React from 'react';

const ResultSummary = ({ correct, incorrect }) => {
  console.log(correct, incorrect);
  return (
    <aside className="bg-[#faf0ee] h-[85vh] rounded-2xl py-8 px-6 sticky top-6">
      <h2 className="text-center text-3xl font-bold">Result Summary</h2>
      {correct && <h3>Correct: {correct.length}</h3>}
      {incorrect && <h3>Incorrect: {incorrect.length}</h3>}
    </aside>
  );
};

export default ResultSummary;
