import React from 'react';

function NavBar() {
  return (
    <div className='flex text-gray-300 text-ms'>
      <span className='m-2 hover:text-white cursor-pointer float-right'>
        About
      </span>
      <span className='m-2 hover:text-white cursor-pointer'>Projects</span>
      <span className='m-2 hover:text-white cursor-pointer'>Resume</span>
      <span className='m-2 hover:text-white cursor-pointer'>Contact</span>
    </div>
  );
}

export default NavBar;
