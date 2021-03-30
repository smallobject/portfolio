import React from 'react';

const Header = () => {
  return (
    <div className='flex order-3 flex-wrap justify-items-center justify-around mt-16 mb-8 location-2'>
      <div className='flex-1'>
        <div className='rounded-md p-1'>
          <h1 className='text-6xl text-center text-white shadow-text dark:text-black'>
            Hello!<span className='emoji-wave'>👋</span>
          </h1>
        </div>
        <div className='w-72 items-center m-auto'>
          <span className='text-white  dark:text-black'>
            I'm Tiesti aka "small object". I am a
            <span className='orange-color  dark:text-blue-900'>
              {' '}
              Project Manager{' '}
            </span>
            turned into a
            <span className='orange-color  dark:text-blue-900'>
              {' '}
              Full Stack Developer
            </span>
            . I have experience in publicly released SaaS products in the
            fintech, crypto and marketing industry.
          </span>
        </div>
        <div className='items-center text-center mt-6'>
          <button className='rounded button-download shadow-md text-white'>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
