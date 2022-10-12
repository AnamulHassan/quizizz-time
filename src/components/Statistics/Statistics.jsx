import React, { useContext } from 'react';
import { QuizCategoryContext } from '../Root/Root';
import underline from '../../assets/images/underline1.svg';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
  const quizCategoryData = useContext(QuizCategoryContext);
  let chartData = [];
  quizCategoryData[0].forEach(object => {
    let charts = {};
    charts.name = object.name;
    charts.numberOfQuiz = object.total;
    chartData.push(charts);
  });
  return (
    <div className="w-4/5 my-12 mx-auto">
      <h2 className="relative text-4xl md:text-6xl z-[10] text-bold text-center my-8 text-[#ca6551]">
        Quiz Information
        <img
          className="absolute top-[100%] z-[-10]  left-2/4 translate-y-[-50%] translate-x-[-50%]"
          src={underline}
          alt="underline"
        />
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          layout="vertical"
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="numberOfQuiz" barSize={20} fill="#ca6551" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
