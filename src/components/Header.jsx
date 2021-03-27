import React from 'react';

const Header = () => {
  return (
    // <div className='grid justify-items-center header relative mt-8 grid-cols-3 '>
    //   <div></div>
    //   <div className='rounded-md p-1'>
    //     <h1 className='text-6xl text-center text-white shadow-text'>
    //       Hello!<span className='emoji-wave'>👋</span>
    //     </h1>
    //     <p className='text-white w-80 shadow-text text-left'>
    //       I'm rupture aka "small object". I am a
    //       <span className='orange-color shadow-text'> Project Manager </span>
    //       turned into a
    //       <span className='orange-color shadow-text'>
    //         {' '}
    //         Full Stack Developer
    //       </span>
    //       . I have experience in publicly released SaaS products in the fintech,
    //       crypto and marketing vertical.
    //     </p>
    //     <button className='rounded button-download shadow-md text-white'>
    //       Download Resume
    //     </button>
    //   </div>
    // </div>
    <div className='flex'>
      <div className='rounded-md p-1 flex-auto'>
        <h1 className='text-6xl text-center text-white shadow-text'>
          Hello!<span className='emoji-wave'>👋</span>
        </h1>
        <div className='w-1/3 flex flex-1'>
          <span className='text-white w-80 shadow-text'>
            I'm rupture aka "small object". I am a
            <span className='orange-color shadow-text'> Project Manager </span>
            turned into a
            <span className='orange-color shadow-text'>
              {' '}
              Full Stack Developer
            </span>
            . I have experience in publicly released SaaS products in the
            fintech, crypto and marketing vertical.
          </span>
        </div>
        <div className='items-center text-center m-2'>
          <button className='rounded button-download shadow-md text-white'>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
