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
    <div className='flex order-3 flex-wrap justify-items-center justify-around mt-16 mb-8 location-2'>
      <div className='flex-1'>
        <div className='rounded-md p-1'>
          <h1 className='text-6xl text-center text-white shadow-text'>
            Hello!<span className='emoji-wave'>👋</span>
          </h1>
        </div>
        <div className='w-72 items-center m-auto'>
          <span className='text-white shadow-text'>
            I'm rupture aka "small object". I am a
            <span className='orange-color shadow-text'> Project Manager </span>
            turned into a
            <span className='orange-color shadow-text'>
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
