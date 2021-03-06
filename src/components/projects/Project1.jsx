import React, { useState } from 'react';
import { ReactComponent as Dots } from '../../assets/dots.svg';
import { ReactComponent as Blob4 } from '../../assets/blob4.svg';
import { ReactComponent as Blob2 } from '../../assets/blob2.svg';
import { ReactComponent as Blob1 } from '../../assets/blob1.svg';

function Project1() {
  const [sectionVisibility, setSectionVisibility] = useState('div-hidden');

  return (
    <div className='items-center location-2 mb-8 relative'>
      <Dots id='dots2' className='animated2' />
      <Blob4 id='blobl4proj1' />
      <Blob2 id='blobl2proj1' />
      <Blob1 id='blobl1proj1' />
      <h3 className='text-6xl text-white text-center p-8 dark:text-black'>
        Projects
      </h3>
      <div
        className='flex flex-col justify-center items-center max-w-lg mx-auto my-8 relative h-96'
        onMouseEnter={() => setSectionVisibility('div-shown')}
        onMouseLeave={() => setSectionVisibility('div-hidden')}
      >
        <div className='w-full h-full rotating-bg absolute rounded-md rotate-left' />
        <div className='w-full h-full rotating-bg2 absolute rounded-md rotate-right' />
        <div className='m-bg-contrast h-full w-full rounded-lg shadow-lg bg-center bg-gradient bg-cover' />
        <div
          className={`absolute bg-cover shadow-lg w-full h-full rounded-md text-white description ${sectionVisibility}`}
        >
          <div className='w-full h-full rotating-bg3 absolute transform -rotate-6 rounded-md rotate-left' />
          <div className='w-full h-full rotating-bg3 absolute transform rotate-6 rounded-md rotate-right' />
          <div className='m-4'>
            <p className='text-3xl m-blue text-center mb-2'>
              PoE Trading Platform
            </p>
            The platform allows players to trade items with each other using the
            publicly listed items on the API. Building a trading platform while
            relying on another API can be quite a challenge. I used
            <span className='orange-color font-bold'> nodeJS</span> and
            <span className='orange-color font-bold'> Express</span> to build an
            API that mutates and sends back the data back in the format I want
            it, all through the existing API.
            <span className='orange-color font-bold'> TailwindCSS</span> and
            <span className='orange-color font-bold'> React</span> made building
            an <span className='orange-color font-bold'>MVP</span> quite quick
            and comfortable, while also allowing the possibility to scale later
            on. The project has many features which are listed in the github
            page. Like auto-complete, local search storage, dark mode, etc.
          </div>
          <a
            href='https://github.com/smallobject/poe-trading-site'
            className='m-auto flex button-width bg-gray-800 text-xs text-white p-2 font-semibold rounded uppercase hover:bg-gray-700'
          >
            Github Link
          </a>
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
