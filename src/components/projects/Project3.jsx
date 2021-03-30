import React, { useState } from 'react';

function Project3() {
  const [sectionVisibility, setSectionVisibility] = useState('div-hidden');

  return (
    <div className='items-center location-2 mt-8'>
      <div
        className='flex flex-col justify-center items-center max-w-lg mx-auto my-8 relative h-96'
        onMouseEnter={() => setSectionVisibility('div-shown3')}
        onMouseLeave={() => setSectionVisibility('div-hidden')}
      >
        <div className='w-full h-full rotating-bg absolute rounded-md rotate-left' />
        <div className='w-full h-full rotating-bg2 absolute rounded-md rotate-right' />
        <div className='m-bg-contrast h-full w-full rounded-lg shadow-lg bg-contain bg-center bg-gradient3' />
        <div
          className={`absolute bg-contain shadow-lg w-full h-full rounded-md text-white description ${sectionVisibility}`}
        >
          <div className='w-full h-full rotating-bg3 absolute transform -rotate-6 rounded-md rotate-left' />
          <div className='w-full h-full rotating-bg3 absolute transform rotate-6 rounded-md rotate-right' />
          <div className='m-4'>
            <p className='text-3xl m-blue text-center mb-2'>
              React Ecommerce Site
            </p>
            This ecommerce website was built using{' '}
            <span className='orange-color font-bold'>React</span> and{' '}
            <span className='orange-color font-bold'>Firebase</span> as a
            database. It offers a fully functional payment system with{' '}
            <span className='orange-color font-bold'>Stripe</span>, local
            storage of selected cart items, fully working login using Google or
            your own email. The site has two version, one with a working{' '}
            <span className='orange-color font-bold'>GraphQL</span> as backend
            and one as direct{' '}
            <span className='orange-color font-bold'>Firebase</span> and{' '}
            <span className='orange-color font-bold'>NodeJS+Express </span>a
            backend.{' '}
            <span className='orange-color font-bold'>styled-components</span>{' '}
            was also used for some UI elements along side{' '}
            <span className='orange-color font-bold'>Sass</span>.
          </div>
          <a
            href='https://github.com/smallobject/clothing-store'
            className='m-auto flex button-width bg-gray-800 text-xs text-white p-2 font-semibold rounded uppercase hover:bg-gray-700'
          >
            Github Link
          </a>
        </div>
        <div className='w-56 md:w-64 m-bg-contrast -mt-10 shadow-lg rounded-lg overflow-hidden'>
          <div className='py-2 text-center font-bold uppercase tracking-wide text-white'>
            React ecommerce Site
          </div>
          <div className='flex items-center justify-between py-2 px-3 m-bg-contrast'>
            <small className='m-cyan'>React</small>
            <small className='m-cyan'>NodeJS</small>
            <small className='m-cyan'>GraphQL</small>
            <small className='m-cyan'>Firebase</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project3;
