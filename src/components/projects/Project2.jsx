import React, { useState } from 'react';
import { ReactComponent as Dots } from '../../assets/dots.svg';
import { ReactComponent as Blob3 } from '../../assets/blob3.svg';
import { ReactComponent as Blob6 } from '../../assets/blob6.svg';

function Project2() {
  const [sectionVisibility, setSectionVisibility] = useState('div-hidden');

  return (
    <div className='items-center location-2 relative -mt-20'>
      <Dots id='dots2proj2' />
      <Blob3 id='blob3proj2' />
      <Blob6 id='blob6proj2' className='animated' />
      <div
        className='flex flex-col justify-center items-center max-w-lg mx-auto my-8 relative h-96'
        onMouseEnter={() => setSectionVisibility('div-shown2')}
        onMouseLeave={() => setSectionVisibility('div-hidden')}
      >
        <div className='w-full h-full rotating-bg absolute rounded-md rotate-left' />
        <div className='w-full h-full rotating-bg2 absolute rounded-md rotate-right' />
        <div className='m-bg-contrast h-full w-full rounded-lg shadow-lg bg-cover bg-gradient2' />
        <div
          className={`absolute bg-cover shadow-lg w-full h-full rounded-md text-white description ${sectionVisibility}`}
        >
          <div className='w-full h-full rotating-bg3 absolute transform -rotate-6 rounded-md rotate-left' />
          <div className='w-full h-full rotating-bg3 absolute transform rotate-6 rounded-md rotate-right' />
          <div className='m-4'>
            <p className='text-3xl m-blue text-center mb-2'>
              PoE-Util NPM Package
            </p>
            PoE-Util is a utility that wraps around the official Path of Exile
            API. It can search items, stashes, guilds, players, ladders, etc all
            within the game. With{' '}
            <span className='orange-color font-bold'>NodeJS</span> and{' '}
            <span className='orange-color font-bold'>Axios</span> we're hitting
            different PoE endpoints requesting and validating the data before
            sending it back. There's{' '}
            <span className='orange-color font-bold'>JEST</span> testing for
            each function within the app. Currently it's getting 150 downloads
            per week from real active users.
          </div>
          <a
            href='https://github.com/smallobject/poe-trading-site'
            className='m-auto flex button-width bg-gray-800 text-xs text-white p-2 font-semibold rounded uppercase hover:bg-gray-700'
          >
            Github Link
          </a>
          <a
            href='https://www.npmjs.com/package/poe-util'
            className='m-auto flex button-width bg-gray-800 mt-4 text-xs text-white p-2 font-semibold rounded uppercase hover:bg-gray-700'
          >
            NPM Link
          </a>
        </div>
        <div className='w-56 md:w-64 m-bg-contrast -mt-10 shadow-lg rounded-lg overflow-hidden'>
          <div className='py-2 text-center font-bold uppercase tracking-wide text-white'>
            PoE-Util NPM Package
          </div>
          <div className='flex items-center justify-between py-2 px-3 m-bg-contrast'>
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

export default Project2;
