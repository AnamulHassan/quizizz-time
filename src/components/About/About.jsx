import React from 'react';
import aboutImg from '../../assets/images/about-img.png';
import homeImg from '../../assets/images/home-img-2.png';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="bg-[#dcf2f0]">
      <h2 className="text-[#171312] text-4xl md:text-6xl font-extrabold text-center py-12 p-4 md:p-8">
        We're on a mission to <br /> motivate every student
      </h2>
      <img className="w-4/5 md:w-2/4  mx-auto pb-12" src={aboutImg} alt="" />
      <div className=" w4/5 flex flex-col-reverse md:flex-row mt-12 pb-12">
        <div className="w-full md:w-2/4 flex items-center justify-center">
          <img className="w-3/5" src={homeImg} alt="join us" />
        </div>
        <div className="w-full md:w-2/4 text-center md:text-start">
          <h2 className="text-6xl font-extrabold">Join Us</h2>
          <p className="text-xl text-bold">
            We’re venture-funded, growing quickly, and need your help.
          </p>
          <Link
            to="/home"
            className="bg-[#dd392f] w-4/5 mx-auto md:mx-0   md:w-2/5 text-center  justify-center md:justify-start hover:bg-[#85221c] duration-300 py-2 text-white mt-6 flex items-center rounded-lg px-12 text-xl font-bold]"
          >
            Explore Careers <ArrowSmallRightIcon className="h-6 w-6 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
