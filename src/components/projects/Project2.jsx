import React, { useState } from 'react';

function Project1() {
  const [sectionVisibility, setSectionVisibility] = useState('div-hidden');

  return (
    <div className='items-center location-2 mt-6'>
      <div
        className='flex flex-col justify-center items-center max-w-sm mx-auto my-8 relative'
        onMouseEnter={() => setSectionVisibility('div-shown2')}
        onMouseLeave={() => setSectionVisibility('div-hidden')}
      >
        <div className='w-full h-full rotating-bg absolute rounded-md rotate-left' />
        <div className='w-full h-full rotating-bg2 absolute rounded-md rotate-right' />
        <div className='m-bg-contrast h-64 w-full rounded-lg shadow-lg bg-cover bg-center bg-gradient2' />
        <div
          className={`absolute bg-cover shadow-lg w-full h-full rounded-md text-white description ${sectionVisibility} `}
        >
          <div className='w-full h-full rotating-bg3 absolute transform -rotate-6 rounded-md rotate-left' />
          <div className='w-full h-full rotating-bg3 absolute transform rotate-6 rounded-md rotate-right' />
          <p className='m-4'>
            PoE-Util is a utility that wraps around the official Path of Exile
            API. It can search items, stashes, guilds, players, ladders, etc all
            within the game. With NodeJS and Axios we're hitting different PoE
            endpoints requesting and validating the data before sending it back.
            There's JEST testing for each function within the app. Currentl it's
            getting 150 downloads per week from real active users.
          </p>
          <button className='ml-24 bg-gray-800 text-xs text-white p-2 font-semibold rounded uppercase hover:bg-gray-700'>
            Github Link
          </button>
          <button className='ml-4 bg-gray-800 text-xs text-white p-2 font-semibold rounded uppercase hover:bg-gray-700'>
            NPM Link
          </button>
        </div>
        <div className='w-56 md:w-64 m-bg-contrast -mt-10 shadow-lg rounded-lg overflow-hidden'>
          <div className='py-2 text-center font-bold uppercase tracking-wide text-white'>
            PoE-Util NPM Package
          </div>
          <div className='flex items-center justify-between py-2 px-3 m-bg-contrast '>
            <small className='m-cyan'>NodeJS</small>
            <small className='m-cyan'>Axios</small>
            <small className='m-cyan'>JEST</small>
            <small className='m-cyan'>API</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
