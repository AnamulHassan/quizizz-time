import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

const ErrorPage = () => {
  const { status, statusText } = useRouteError();
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <FaceFrownIcon className="h-3/4 w-3/4 text-[#dfa397]" />
        <h3 className="text-[#dd392f] text-6xl mb-4 font-extrabold">
          {status}
        </h3>
        <h3 className="text-[#140a08] text-5xl font-extrabold">{statusText}</h3>
        <Link
          to="/home"
          className="bg-[#dd392f] hover:bg-[#85221c] duration-300 py-2 text-white mt-6 flex px-6 rounded-lg text-xl font-bold]"
        >
          Back to the Home <ArrowSmallRightIcon className="h-6 w-6 ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
