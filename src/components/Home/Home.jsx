import React from 'react';
import textBG from '../../assets/images/text-bg.png';
import homeImg1 from '../../assets/images/home-img-1.png';
import homeImg2 from '../../assets/images/home-img-2.png';
import underline from '../../assets/images/underline.svg';
import underline2 from '../../assets/images/underline2.svg';
import {
  PuzzlePieceIcon,
  ViewfinderCircleIcon,
  ClockIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
const Home = () => {
  return (
    <section className="overflow-x-hidden">
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

      <div className="bg-[#fdf8f7] flex flex-col md:flex-col lg:flex-row">
        <div className="w-full md:w-full mx-auto  lg:w-2/4 bg-[#eabbb3]">
          <h2 className="   text-5xl md:text-6xl font-extrabold z-10 px-6 py-8  text-[#fdf8f7]">
            Include and engage <br />
            <span className=" relative text-[#dd392f]">
              {' '}
              every student
              <img
                className="absolute w-full  top-[85%] left-2/4 z-[10] translate-y-[-50%] translate-x-[-50%]"
                src={underline}
                alt="text background"
              />
            </span>
          </h2>
          <p className="text-xl font-semibold px-8">
            Flexibly engage students at their own pace, from any device.
          </p>
          <ul className="text-lg text-semibold px-8 py-4">
            <li className="flex text-2xl font-bold items-center">
              <ViewfinderCircleIcon className="h-12 w-12 mr-2  text-[#dd392f]" />{' '}
              Inclusive, accessible design
            </li>
            <li> Enable Read Aloud for elementary and ELL students</li>
          </ul>
          <ul className="text-lg text-semibold px-8 py-4">
            <li className="flex text-2xl font-bold items-center">
              {' '}
              <PuzzlePieceIcon className="h-12 w-12 mr-2 text-[#dd392f]" />
              Gamification for good
            </li>
            <li>A leaderboard, themes, music, and more to motivate students</li>
          </ul>
        </div>
        <div className="w-11/12 md:w-11/12 mx-auto mt-5 lg:mt-0  lg:w-2/4  flex items-center justify-center">
          <img className="w-[80%]" src={homeImg2} alt="" />
        </div>
      </div>

      <div className="bg-[#fdf8f7] flex flex-col-reverse md:flex-col-reverse lg:flex-row">
        <div className="w-11/12 md:w-11/12 mx-auto mt-5 lg:mt-0  lg:w-2/4  flex items-center justify-center">
          <img className="w-[80%]" src={homeImg1} alt="" />
        </div>
        <div className="w-full md:w-full mx-auto text-[#fdf8f7]  lg:w-2/4 bg-[#dd392f]">
          <h2 className="   text-5xl md:text-6xl font-extrabold z-10 px-6 py-8  text-[#fdf8f7]">
            Get data that’s <br />
            <span className=" relative text-[#171312]">
              {' '}
              easy to act on
              <img
                className="absolute w-full  top-[85%] left-2/4 z-[10] translate-y-[-50%] translate-x-[-50%]"
                src={underline2}
                alt="text background"
              />
            </span>
          </h2>
          <p className="text-xl font-semibold px-8 ">
            The exact insights you need to make data-driven instruction a
            reality.
          </p>
          <ul className="text-lg text-semibold px-8 py-4">
            <li className="flex text-2xl font-bold items-center">
              <ClockIcon className="h-12 w-12 mr-2 " /> Real-time insights
            </li>
            <li>Identify student’s needs and immediately adapt</li>
          </ul>
          <ul className="text-lg text-semibold px-8 py-4">
            <li className="flex text-2xl font-bold items-center">
              {' '}
              <IdentificationIcon className="h-12 w-12 mr-2 " />
              Snapshot reports
            </li>
            <li>
              See overall class performance, the toughest question or topic, and
              individual progress
            </li>
          </ul>
        </div>
      </div>
      <div className="w-screen flex justify-center mt-8 mb-12">
        <Link
          to="/category"
          className="bg-[#dd392f] w-3/5  md:w-1/5 text-center justify-center hover:bg-[#85221c] duration-300 py-2 text-white mt-6 flex items-center rounded-lg text-xl font-bold]"
        >
          Explore Another Quiz <ArrowSmallRightIcon className="h-6 w-6 ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
