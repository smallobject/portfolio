import React, { useState } from 'react';

function Project1() {
  const [sectionVisibility, setSectionVisibility] = useState('div-shown');

  return (
    <div className='items-center location-2'>
      <h1 className='text-6xl text-white text-center'>Projects</h1>
      <div
        className='flex flex-col justify-center items-center max-w-sm mx-auto my-8 relative'
        onMouseEnter={() => setSectionVisibility('div-shown')}
        onMouseLeave={() => setSectionVisibility('div-hidden')}
      >
        <div className='m-bg-contrast h-64 w-full rounded-lg shadow-lg bg-cover bg-center bg-gradient' />
        <div
          className={`absolute bg-cover shadow-lg w-full h-full rounded-md text-white description ${sectionVisibility} `}
        >
          <p className='m-4'>
            Building a trading platform while relying on another API can be
            quite a challenge. I used nodeJS and Express to build an API that
            mutates and sends back the data back in the format I want it, all
            through the existing API. TailwindCSS and React made building an MVP
            quite quick and comfortable, while also allowing the possibility to
            scale later on. The project has many features which are listed in
            the github page.
          </p>
          <button className='ml-36 bg-gray-800 text-xs text-white p-2 font-semibold rounded uppercase hover:bg-gray-700'>
            Github Link
          </button>
        </div>
        <div className='w-56 md:w-64 m-bg-contrast -mt-10 shadow-lg rounded-lg overflow-hidden'>
          <div className='py-2 text-center font-bold uppercase tracking-wide text-white'>
            PoE Trading Platform
          </div>
          <div className='flex items-center justify-between py-2 px-3 m-bg-contrast'>
            <small className='m-cyan'>ReactJs</small>
            <small className='m-cyan'>NodeJS</small>
            <small className='m-cyan'>Express</small>
            <small className='m-cyan'>TailwindCSS</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
